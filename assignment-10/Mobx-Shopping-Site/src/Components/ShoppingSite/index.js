import React, { Component } from "react";

import SizeFilters from "./SizeFilters";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

import { orderBy } from "../../constants";
import {
  ShoppingSiteContainer,
  FiltersSidebar,
  SizesHeading,
  MainContentContainer,
  SortBy
} from "./styledComponents";
import { observer } from "mobx-react";

@observer
class ShoppingSite extends Component {
  handleOrderChange = event => {
    console.log("orderby triggered");
    this.props.store.updateOrderBy(event.target.value);
  };

  render() {
    return (
      <>
        <CartContainer store={this.props.store} />
        <ShoppingSiteContainer>
          <FiltersSidebar>
            <SizesHeading>Sizes:</SizesHeading>
            <SizeFilters
              onFilterClick={this.props.store.updateSizeFilters}
              sizes={this.props.store.sizes}
            />
          </FiltersSidebar>
          <MainContentContainer>
            <SortBy>
              <div>
                {this.props.store.filteredProductsCount} product(s) found
              </div>
              <div>
                Order by{"  "}
                <select
                  value={this.props.store.orderBy}
                  onChange={this.handleOrderChange}
                >
                  {/* TODO: make lh hl as constants */}
                  <option value="select">select</option>
                  <option value={orderBy.lh}>low to high</option>
                  <option value={orderBy.hl}>high to low</option>
                </select>
              </div>
            </SortBy>
            <ProductsContainer store={this.props.store} />
          </MainContentContainer>
        </ShoppingSiteContainer>
      </>
    );
  }
}

export default ShoppingSite;
