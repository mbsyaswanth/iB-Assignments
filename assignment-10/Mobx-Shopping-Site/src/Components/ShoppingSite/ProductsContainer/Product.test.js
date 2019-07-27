import React from "react";
import { shallow, mount, render } from "enzyme";
import Product from "./Product";
import Products from "../../../Store";
import "jest-styled-components";
import { ProductCartBtn, FreeShipping } from "./Product/styledComponents";

let store = new Products();
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
    expect(component.find("#title1").text()).toBe("Cat Tee Black T-Shirt");
    expect(component.find("#price").text()).toBe("$ 10.9");
    expect(component.find("#installments").text()).toBe("or 9x $1.21");
    expect(component.find("#addtocart").text()).toBe("Add to cart");
    component.unmount();
  });
});

it("should Test whether add to cart function is called upon click", () => {
  const storeFunction = jest.spyOn(Products.prototype, "addToCart");
  const component = shallow(<Product product={product} store={store} />);
  // console.log(component.debug());
  component.find("#addtocart").simulate("click");
  component.update();
  expect(storeFunction).toHaveBeenCalled();
  component.unmount();
});

it("should Test whether free shipping label is present or not based on prop", () => {
  const wrapper = mount(<Product product={product} store={store} />);
  if (product.isFreeShipping) {
    expect(wrapper.find(FreeShipping)).toHaveStyleRule("display", "block");
  } else {
    expect(wrapper.find(FreeShipping)).toHaveStyleRule("display", "none");
  }
  wrapper.unmount();
});

describe("Product Snapshot", () => {
  it("should match the snapshot", () => {
    const component = shallow(<Product product={product} store={store} />);

    expect(component).toMatchSnapshot();
  });
});
