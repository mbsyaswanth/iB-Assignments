import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

import CartItem from "../models/CartItem";
import Product from "../models/Product";

class Products {
  @observable cart = [];
  @observable products = [];
  @observable sizes = [];
  @observable orderBy = "";

  @action addToCart = (id, size) => {
    // let index = this.getIndexInCart(id);
    // if (index >= 0) {
    //   this.cart.forEach((item, itemIndex) => {
    //     if (item.itemId === id) {
    //       console.log("same id found", itemIndex);
    //       if (item.size === size) {
    //         console.log("increasing qty");
    //         item.increaseQty();
    //         return;
    //       } else if (itemIndex === this.cart.length - 1) {
    //         this.cart.push(new CartItem(id, size));
    //       }
    //     }
    //   });
    // }

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
    }

    // console.log("adding to cart", index);
    // if (index >= 0) {
    //   if (this.cart[index].size === size) {
    //     console.log("increasing qty");
    //     this.cart[index].increaseQty();
    //     return;
    //   }
    // }
    // console.log("pusing as new item");
    else {
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
      allProducts = allProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (this.sizes.length) {
      allProducts = allProducts.filter(product => {
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

  getIndexInCart = id => {
    return this.cart.findIndex(item => {
      return item.itemId === id;
    });
  };
}

export default Products;