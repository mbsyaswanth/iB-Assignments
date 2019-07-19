import React, { Component } from "react";

import SizeFilters from "./SizeFilters";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import "./styles.css";

import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

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
        <div className="shopping-site-container">
          <div className="filters-sidebar">
            <h3 className="sizes-heading">Sizes:</h3>
            <SizeFilters
              onFilterClick={this.props.store.updateSizeFilters}
              sizes={this.props.store.sizes}
            />
          </div>
          <div className="main-content-container">
            <div className="sort-by">
              <div>
                {this.props.store.filteredProductsCount} product(s) found
              </div>
              <div>
                Order by{"  "}
                <select
                  value={this.props.store.orderBy}
                  onChange={this.handleOrderChange}
                >
                  <option value="select">select</option>
                  <option value="lh">low to high</option>
                  <option value="hl">high to low</option>
                </select>
              </div>
            </div>
            <ProductsContainer store={this.props.store} />
          </div>
        </div>
      </>
    );
  }
}

export default ShoppingSite;
