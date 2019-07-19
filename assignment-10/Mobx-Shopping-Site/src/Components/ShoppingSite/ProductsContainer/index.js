import React, { Component } from "react";
import Product from "./Product";
import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

@observer
class ProductsContainer extends Component {
  render() {
    return (
      <div className="products-container">
        {this.props.store.filteredProducts.map(product => {
          return (
            <Product
              key={product.id}
              product={product}
              store={this.props.store}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductsContainer;
