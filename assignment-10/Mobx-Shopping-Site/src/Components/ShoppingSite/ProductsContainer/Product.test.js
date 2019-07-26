import React from "react";
import { shallow, mount, render } from "enzyme";
import Product from "./Product";

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

describe("Product", () => {
  it("should load the given product according to the props.", () => {
    const component = shallow(<Product product={product} />);
    console.log(component.find("#title").text());
    expect(component.find("#title").text()).toBe("Cat Tee Black T-Shirt");
    component.unmount();
  });
});
