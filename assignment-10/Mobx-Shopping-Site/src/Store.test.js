import React from "react";
import { shallow, mount, render } from "enzyme";
import "jest-styled-components";
import Products from "./Store";
import CartItem from "./models/CartItem";
import { orderBy, sizeConstants } from "./constants";

const product = {
  availableSizes: ["S", "XS"],
  currencyFormat: "$",
  currencyId: "USD",
  description: "4 MSL",
  id: 12,
  installments: 9,
  isFreeShipping: true,
  price: 10.9,
  sku: 12064273040195392,
  style: "Black with custom print",
  title: "Cat Tee Black T-Shirt",
  image:
    "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
};

const product2 = {
  availableSizes: ["M"],
  currencyFormat: "$",
  currencyId: "USD",
  description: "",
  id: 13,
  installments: 5,
  isFreeShipping: true,
  price: 29.45,
  sku: 51498472915966370,
  style: "Front print and paisley print",
  title: "Dark Thug Blue-Navy T-Shirt",
  image:
    "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg"
};

const product3 = {
  availableSizes: ["X", "L", "XL"],
  currencyFormat: "$",
  currencyId: "USD",
  description: "GPX Poly 1",
  id: 14,
  installments: 3,
  isFreeShipping: true,
  price: 9,
  sku: 10686354557628304,
  style: "Front tie dye print",
  title: "Sphynx Tie Dye Wine T-Shirt",
  image:
    "https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg"
};

describe("Store 1", () => {
  it("all the variables shoud be initialized initially as expected", () => {
    let store = new Products();
    expect(store.cart).toStrictEqual([]);
    expect(store.products).toStrictEqual([]);
    expect(store.sizes).toStrictEqual([]);
    expect(store.orderBy).toStrictEqual("");
    expect(store.productFetchStatus).toStrictEqual("LOADING");
    expect(store.loginStatus).toStrictEqual({});
    expect(store.signUpStatus).toStrictEqual({ status: "" });
    expect(store.msg).toStrictEqual("");
  });

  it("should add the given product to cart and the depedendent computed values should be as expected", () => {
    let store = new Products();
    store.addToCart(12, "S");
    store.addProduct(product);
    expect(store.cart.length).toBe(1);
    expect(store.cartItemsCount).toBe(1);
    expect(store.totalCartValue).toBe("10.90");
  });

  it("should remove the product from cart", () => {
    let store1 = new Products();
    store1.addToCart(2, "S");
    // console.log(store1.cart[0]);
    store1.removeFromCart(store1.cart[0]);
    expect(store1.cart.length).toBe(0);
    expect(store1.cartItemsCount).toBe(0);
    expect(store1.totalCartValue).toBe("0.00");
  });
});

describe("Store test cases", () => {
  let store = new Products();
  it("should should add a product to the products array and the dependencies should also work as expected", () => {
    store.addProduct(product);
    expect(store.products.length).toBe(1);
    expect(store.filteredProducts.length).toBe(1);
  });

  it("should add the given order to orderby", () => {
    store.updateOrderBy(orderBy.hl);
    expect(store.orderBy).toBe(orderBy.hl);
    store.updateOrderBy(orderBy.lh);
    expect(store.orderBy).toBe(orderBy.lh);
    expect(store.filteredProducts.length).toBe(1);
  });

  it("should add the given size to sizes array if not present - Avl-size in products", () => {
    store.updateSizeFilters(sizeConstants.s);
    expect(store.sizes.includes(sizeConstants.s)).toBe(true);
    expect(store.filteredProducts.length).toBe(1);
  });
  it("should add the given size to sizes array if not present - unavailable size in products", () => {
    store.updateSizeFilters(sizeConstants.xl);
    expect(store.sizes.includes(sizeConstants.xl)).toBe(true);
    expect(store.filteredProducts.length).toBe(1);
  });
  it("should remove the given size to sizes if already present   ", () => {
    store.updateSizeFilters(sizeConstants.xl);
    expect(store.sizes.includes(sizeConstants.xl)).toBe(false);
    expect(store.filteredProducts.length).toBe(1);
  });

  it("should return the product, given the id", () => {
    expect(store.getProduct(12)).toEqual(product);
  });

  it("should get index of product in products array given the id", () => {
    expect(store.getIndexInProducts(12)).toBe(0);
  });

  it("should return the products sorted in ascending order", () => {
    store.addProduct(product2);
    store.addProduct(product3);
    expect(store.sortInAsc(store.products)).toEqual([
      product3,
      product,
      product2
    ]);
    //console.log(store.orderBy);
    store.sizes = [];
    expect(store.filteredProducts).toEqual([product3, product, product2]);
  });

  it("should return the products sorted in descending order", () => {
    expect(store.sortInDesc(store.products)).toEqual([
      product2,
      product,
      product3
    ]);
    store.updateOrderBy(orderBy.hl);
    expect(store.filteredProducts).toEqual([product2, product, product3]);
  });

  it("should return the products containing given sizes", () => {
    store.updateSizeFilters(sizeConstants.l);
    //console.log(store.sizes);
    expect(store.filterBySizes.length).toBe(1);
  });

  it("should return the filtered products according to given filters", () => {
    expect(store.filteredProducts).toEqual([product3]);
  });

  it("should return the number of cart items, considering the quantity", () => {
    store.addToCart(product3.id, "L");
    store.addToCart(product3.id, "L");
    expect(store.cart.length).toBe(1);
    expect(store.cartItemsCount).toBe(2);
  });
});
