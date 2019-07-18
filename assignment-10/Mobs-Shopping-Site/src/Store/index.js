import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

import CartItem from "../models/CartItem";
import Product from "../models/Product";

class Products {
  @observable cart = [];
  @observable products = [];
  @observable sizes = [];
  @observable orderBy = "";

  @action addToCart = id => {
    let index = this.getIndexInCart(id);
    if (index) {
      this.cart[index].increaseQty();
      return;
    }
    this.cart.push(new CartItem(id));
  };

  @action removeFromCart = id => {
    this.cart.splice(this.getIndexInCart(id), 1);
  };

  @action addProduct = obj => {
    this.products.push(new Product(obj));
  };
  //TODO: make constants for sizes, orderby
  @action updateSizeFilters = size => {
    if (this.sizes.includes[size]) {
      this.sizes.splice(this.sizes.indexOf(size), 1);
      return;
    }
    this.sizes.push(size);
  };

  @action updateOrderBy = order => {
    this.orderBy = order;
  };

  @computed get cartItemsCount() {
    return this.cart.length;
  }

  @computed get filteredProducts() {
    let allProducts = this.products;
    if (!this.sizes.length && this.orderBy === "") {
      return;
    }
    if (this.orderBy === "lh") {
      allProducts.sort((a, b) => {
        return a.price < b.price;
      });
    }
    if (this.orderBy === "hl") {
      this.allProducts.sort((a, b) => {
        return a.price > b.price;
      });
    }
    if (this.sizes.length) {
      this.allProducts.filter(product => {
        for (let i = 0; i < this.sizes.length; i++) {
          if (product.availableSizes.includes[this.sizes[i]]) {
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
    return this.cart.reduce((accumulator, currentValue) => {
      return (
        accumulator +
        currentValue.quantity *
          this.products[this.getIndexInProducts(currentValue.itemId)].price
      );
    });
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
