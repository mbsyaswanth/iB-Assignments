import React from "react";
import { shallow, mount, render } from "enzyme";
import "jest-styled-components";
import Products from "./Store";
import CartItem from "./models/CartItem";

describe("Store 1", () => {
  let store = new Products();
  it("all the variables shoud be initialized initially as expected", () => {
    expect(store.cart).toStrictEqual([]);
    expect(store.products).toStrictEqual([]);
    expect(store.sizes).toStrictEqual([]);
    expect(store.orderBy).toStrictEqual("");
    expect(store.productFetchStatus).toStrictEqual("LOADING");
    expect(store.loginStatus).toStrictEqual({});
    expect(store.signUpStatus).toStrictEqual({ status: "" });
    expect(store.msg).toStrictEqual("");
  });
});

describe("Store 2 :  addtocart function", () => {
  let store = new Products();
  it("should add the given product to cart", () => {
    store.addToCart(1, "S");
    expect(store.cart.length).toBe(1);
  });
});

describe("Store 3 :  removefromcart function", () => {
  let store = new Products();
  it("should remove the product from cart", () => {
    store.addToCart(1, "S");
    store.removeFromCart(new CartItem(1, "S"));
    expect(store.cart.length).toBe(0);
  });
});
