import React from "react";
import { shallow, mount, render } from "enzyme";
import "jest-styled-components";
import Products from "../../../Store";
import { sizeConstants } from "../../../constants";
import SizeFilters from "./index";
import { SizeFilter } from "./styledComponents";

const store = new Products();

describe("sizeFilters", () => {
  it("should Test whether add to cart function is called upon click", () => {
    const storeFunction = jest.spyOn(store, "updateSizeFilters");
    const component = mount(
      <SizeFilters
        onFilterClick={store.updateSizeFilters}
        sizes={store.sizes}
      />
    );
    //console.log(component.find(SizeFilter).debug());
    component
      .find(SizeFilter)
      .at(0)
      .simulate("click");
    expect(storeFunction).toHaveBeenCalled();
    console.log(store.sizes);

    component.unmount();
  });

  it("should change style on click - 1", () => {
    const component = mount(
      <SizeFilters
        onFilterClick={store.updateSizeFilters}
        sizes={store.sizes}
      />
    );
    expect(component.find(SizeFilter).at(0)).toHaveStyleRule(
      "background-color",
      "black"
    );
    component.unmount();
  });

  it("should change style on click - 2", () => {
    const component = mount(
      <SizeFilters
        onFilterClick={store.updateSizeFilters}
        sizes={store.sizes}
      />
    );
    component
      .find(SizeFilter)
      .at(0)
      .simulate("click");
    expect(component.find(SizeFilter).at(0)).toHaveStyleRule(
      "background-color",
      "rgba(219,219,219,0.384)"
    );
    component.unmount();
  });

  it("should have the same snapshot", () => {
    const component = shallow(
      <SizeFilters
        onFilterClick={store.updateSizeFilters}
        sizes={store.sizes}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
