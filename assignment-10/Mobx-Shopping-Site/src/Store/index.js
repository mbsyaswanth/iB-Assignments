import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

import CartItem from "../models/CartItem";
import Product from "../models/Product";
import User from "../models/User";
import { endpoints, productFetchStatus, orderBy } from "../constants";

let storage = window.localStorage;
class Products {
  @observable cart = [];
  @observable products = [];
  @observable sizes = [];
  @observable orderBy = "";
  @observable productFetchStatus = productFetchStatus.loading;
  @observable loginStatus = {};
  @observable signUpStatus = { status: "" };
  @observable msg = "";

  @action.bound addToCart(id, size) {
    if (
      this.cart.some((item, itemIndex) => {
        if (item.itemId === id && item.size === size) {
          item.increaseQty();
          storage.setItem("cart", JSON.stringify(this.cart));
          return true;
        }
        return false;
      })
    ) {
      return;
    } else {
      console.log("in else push new item");
      this.cart.push(new CartItem(id, size));
    }
    storage.setItem("cart", JSON.stringify(this.cart));
  }

  @action.bound removeFromCart(item) {
    this.cart.forEach((cartItem, index) => {
      if (cartItem === item) {
        this.cart.splice(index, 1);
      }
    });
    storage.setItem("cart", JSON.stringify(this.cart));
  }

  @action.bound signUp(username, password, history) {
    let user = new User(username, password);
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(endpoints.signup, options)
      .then(res => res.json())
      .then(res => {
        this.signUpStatus = res;
        if (this.signUpStatus.error) {
          this.msg = this.signUpStatus.error;
          console.log(this.msg);
          return;
        }
        this.msg = "user created successfully. please login";
      })
      .catch(err => {
        console.log("Ooops, error", err.message);
      });
  }

  @action.bound login(username, password, history) {
    let user = new User(username, password);
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(endpoints.login, options)
      .then(res => res.json())
      .then(res => {
        this.loginStatus = res;
      })
      .then(res => {
        if (this.loginStatus.error) {
          this.msg = this.loginStatus.error;
          console.log(this.msg);
          return;
        }
        history.replace("/products");
      })
      .catch(err => {
        console.log("Ooops, error", err.message);
      });
  }

  @action.bound fetchData() {
    const options = {
      method: "POST",
      headers: {
        Authorization: this.loginStatus.accessToken,
        "Content-Type": "application/json"
      }
    };
    fetch(endpoints.products, options)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          this.productFetchStatus = productFetchStatus.fail;
        }
      })
      .then(json => {
        json.products.forEach(product => {
          this.addProduct(product);
        });
        this.productFetchStatus = productFetchStatus.success;
        let localCart =
          storage.getItem("cart") != null
            ? JSON.parse(storage.getItem("cart"))
            : [];

        this.cart = localCart.map(item => {
          return new CartItem(item.itemId, item.size, item.quantity);
        });
      })
      .catch(err => {
        console.log("Ooops, error", err.message);
        this.productFetchStatus = productFetchStatus.fail;
      });
  }

  @action.bound addProduct(product) {
    this.products.push(new Product(product));
  }

  @action.bound updateSizeFilters = size => {
    if (this.sizes.includes(size)) {
      this.sizes.splice(this.sizes.indexOf(size), 1);
      return;
    }
    this.sizes.push(size);
    console.log(this.sizes);
  };

  @action.bound updateOrderBy(order) {
    this.orderBy = order;
  }

  @computed get cartItemsCount() {
    if (this.cart.length === 0) {
      return 0;
    }
    return this.cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
  }

  @computed get filteredProducts() {
    let allProducts = this.products;
    if (!this.sizes.length && this.orderBy === "") {
      return allProducts;
    }

    if (this.orderBy === orderBy.lh) {
      allProducts = this.sortInAsc(allProducts);
    }

    if (this.orderBy === orderBy.hl) {
      allProducts = this.sortInDesc(allProducts);
    }

    if (this.sizes.length) {
      allProducts = this.filterBySizes(allProducts);
    }
    return allProducts;
  }

  filterBySizes(allProducts) {
    allProducts = allProducts.filter(product => {
      // TODO: try to eliminate for
      for (let i = 0; i < this.sizes.length; i++) {
        if (product.availableSizes.includes(this.sizes[i])) {
          return true;
        }
      }
      return false;
    });
    return allProducts;
  }

  sortInDesc(allProducts) {
    allProducts = allProducts.sort((a, b) => {
      return b.price - a.price;
    });
    return allProducts;
  }

  sortInAsc(allProducts) {
    allProducts = allProducts.sort((a, b) => {
      return a.price - b.price;
    });
    return allProducts;
  }

  @computed get filteredProductsCount() {
    return this.filteredProducts.length;
  }

  @computed get totalCartValue() {
    if (this.cart.length === 0) {
      return "0.00";
    }
    return this.cart
      .reduce((accumulator, currentValue) => {
        return (
          accumulator +
          currentValue.quantity *
            this.products[this.getIndexInProducts(currentValue.itemId)].price
        );
      }, 0)
      .toFixed(2);
  }

  getProduct = id => {
    return this.products[this.getIndexInProducts(id)];
  };

  getIndexInProducts = id => {
    return this.products.findIndex(product => {
      return product.id === id;
    });
  };
}

export default Products;
