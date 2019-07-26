import React from "react";
import { shallow } from "enzyme";
import ShoppingSite from "./ShoppingSite";
import Products from "../Store";

let store = new Products();

describe("ShoppingSite", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ShoppingSite store={store} debug />);

    expect(component).toMatchSnapshot();
  });
});
