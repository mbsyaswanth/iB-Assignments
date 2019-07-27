import React from "react";
import { shallow, mount, render } from "enzyme";
import "jest-styled-components";
import ProductContainer from "./ProductsContainer";
import Products from "../../Store";
import Product from "./ProductsContainer/Product";

let store = new Products();

const product1 = {
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

describe("Product Container 1", () => {
  it("should display loading on unsuccessful load", () => {
    const wrapper = shallow(<ProductContainer store={store} />);
    store.productFetchStatus = "LOADING";
    const complexComponents = wrapper.findWhere(n => {
      // console.log(n);
      if (typeof n.type() === "string")
        return n.text() == "Loading products..........";
      return false;
    });
    console.log(complexComponents.debug());
    expect(complexComponents.text()).toBe("Loading products..........");
  });
});

describe("Product Container 2", () => {
  it("should display something went wrong on failed fetching", () => {
    const wrapper = shallow(<ProductContainer store={store} />);
    store.productFetchStatus = "FAIL";
    const complexComponents = wrapper.findWhere(n => {
      //console.log(n.debug());
      if (typeof n.type() === "string")
        return n.text() == "something went wrong";
      return false;
    });
    console.log(complexComponents.debug());
    expect(complexComponents.text()).toBe("something went wrong");
  });
});

describe("Product Container 3", () => {
  it("should display no products available when there are no products in store", () => {
    const wrapper = shallow(<ProductContainer store={store} />);
    store.productFetchStatus = "SUCCESS";
    store.products = [];
    const complexComponents = wrapper.findWhere(n => {
      //console.log(n.debug());
      if (typeof n.type() === "string")
        return n.text() == "No products available";
      return false;
    });
    console.log(complexComponents.debug());
    expect(complexComponents.text()).toBe("No products available");
  });
});

describe("Product Container 4", () => {
  it("should display all the available products in store.", () => {
    const wrapper = shallow(<ProductContainer store={store} />);
    store.productFetchStatus = "SUCCESS";
    store.addProduct(product1);
    console.log(wrapper.find(Product).debug());
    expect(wrapper.find(Product)).toHaveLength(1);
  });
});
