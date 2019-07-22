import React, { Component } from "react";
import Product from "./Product";
import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

@observer
class ProductsContainer extends Component {
  getContent = () => {
    if (this.props.store.loadingStatus === "loading") {
      return <p>Loading products..........</p>;
    }
    if (this.props.store.loadingStatus === "fail") {
      return <p>something went wrong</p>;
    }
    if (this.props.store.loadingStatus === "success") {
      if (this.props.store.products.length === 0) {
        return <p>No products available</p>;
      }
      return this.props.store.filteredProducts.map(product => {
        return (
          <Product
            key={product.id}
            product={product}
            store={this.props.store}
          />
        );
      });
    }
  };

  componentDidMount() {
    this.props.store.fetchData();
  }

  render() {
    return <div className="products-container">{this.getContent()}</div>;
  }
}

export default ProductsContainer;
