import React, { Component } from "react";

import SizeFilters from "./SizeFilters";
import ProductsContainer from "./ProductsContainer";
import "./styles.css";

class ShoppingSite extends Component {
  render() {
    return (
      <div className="shopping-site-container">
        <div className="filters-sidebar">
          <h3>Sizes:</h3>
          <SizeFilters onfiltersclick={this.props.store.updateSizeFilters} />
        </div>
        <div className="main-content-container">
          <div className="sort-by">
            <div>16 products found</div>
            <div>
              Order by{"  "}
              <select>
                <option value="select">select</option>
                <option value="lh">low to high</option>
                <option value="hl">high to low</option>
              </select>
            </div>
          </div>
          <ProductsContainer
            filteredProducts={this.props.store.filteredProducts}
          />
        </div>
      </div>
    );
  }
}

export default ShoppingSite;
