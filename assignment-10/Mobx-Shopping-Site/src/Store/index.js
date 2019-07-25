import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

import CartItem from "../models/CartItem";
import Product from "../models/Product";
import User from "../models/User";
import { endpoints } from "../constants";

class Products {
  @observable cart = [];
  @observable products = [];
  @observable sizes = [];
  @observable orderBy = "";
  @observable loadingStatus = "loading";
  @observable loginStatus = {
    status: "",
    accessToken: ""
  };
  @observable signUpStatus = { status: "" };

  @action addToCart = (id, size) => {
    if (
      this.cart.some((item, itemIndex) => {
        if (item.itemId === id && item.size === size) {
          item.increaseQty();
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
  };

  @action removeFromCart = item => {
    this.cart.forEach((cartItem, index) => {
      if (cartItem === item) {
        this.cart.splice(index, 1);
      }
    });
  };

  @action signUp = (username, password) => {
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
        console.log(res);
        this.signUpStatus = res;
      })
      .catch(err => {
        console.log("Ooops, error", err.message);
      });
  };

  @action login = (username, password) => {
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
        console.log(res);
        this.loginStatus = res;
      })
      .catch(err => {
        console.log("Ooops, error", err.message);
      });
  };

  @action fetchData = () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: this.loginStatus.accessToken
      }
    };
    fetch(endpoints.products, options)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          this.loadingStatus = "fail";
        }
      })
      .then(json => {
        json.products.forEach(product => {
          this.addProduct(product);
        });
        this.loadingStatus = "success";
      })
      .catch(err => {
        console.log("Ooops, error", err.message);
        this.loadingStatus = "fail";
      });
  };

  @action addProduct = obj => {
    this.products.push(new Product(obj));
  };
  //TODO: make constants for sizes, orderby
  @action updateSizeFilters = size => {
    if (this.sizes.includes(size)) {
      this.sizes.splice(this.sizes.indexOf(size), 1);
      return;
    }
    this.sizes.push(size);
  };

  @action updateOrderBy = order => {
    this.orderBy = order;
  };

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
    console.log(this.orderBy);
    if (this.orderBy === "lh") {
      console.log("in lh");
      allProducts = allProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (this.orderBy === "hl") {
      console.log("in h1");
      allProducts = allProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (this.sizes.length) {
      console.log("in filter upon");
      allProducts = allProducts.filter(product => {
        // TODO: try to eliminate for
        for (let i = 0; i < this.sizes.length; i++) {
          if (product.availableSizes.includes(this.sizes[i])) {
            return true;
          }
        }
        return false;
      });
    }
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
  // TODO: remove this method - its not used anywhere
  getIndexInCart = id => {
    return this.cart.findIndex(item => {
      return item.itemId === id;
    });
  };
}

export default Products;
