import React from "react";
import { shallow, mount, render } from "enzyme";
import Products from "../../../Store";
import CartContainer from "./index";
import CartItem from "./CartItem";
import { StyledCartItem, CrossMark } from "./CartItem/styledComponents";

const store = new Products();

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

store.addProduct(product1);
store.addProduct(product2);
store.addProduct(product3);

describe("Cart ", () => {
  it("should show the products added to cart", () => {
    store.addToCart(12, "XS");
    store.addToCart(12, "XS");
    store.addToCart(13, "M");
    const wrapper = mount(<CartContainer store={store} />);
    expect(wrapper.find(StyledCartItem).length).toBe(2);
    wrapper.unmount();
  });
  it("should remove item from cart uppon clicking on cross mark", () => {
    const wrapper = mount(<CartContainer store={store} />);
    wrapper
      .find(CrossMark)
      .at(0)
      .simulate("click");
    expect(wrapper.find(StyledCartItem).length).toBe(1);
    wrapper.unmount();
  });
});
