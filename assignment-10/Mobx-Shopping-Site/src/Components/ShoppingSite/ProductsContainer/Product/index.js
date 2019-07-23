import React, { Component } from "react";
import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

@observer
class Product extends Component {
  @observable size = this.props.product.availableSizes[0];
  //TODO: use destructuring
  onSizeChange = event => {
    console.log(event.target.value);
    this.size = event.target.value;
  };

  handleClick = () => {
    console.log("add to cart button", this.size);
    this.props.store.addToCart(this.props.product.id, this.size);
  };

  render() {
    return (
      <div className="product-container">
        <div
          className={
            this.props.product.isFreeShipping ? "free-shipping" : "display-none"
          }
        >
          Free shipping
        </div>
        <div className="product-image-container">
          <img alt="productimage" src={this.props.product.image} />
        </div>
        <div className="product-info">
          <div className="product-title">{this.props.product.title}</div>
          <div className="line" />
          <div className="product-price">$ {this.props.product.price}</div>
          <div className="product-installments">
            or {this.props.product.installments}x $
            {(
              this.props.product.price / this.props.product.installments
            ).toFixed(2)}
          </div>
          <div className="sizes-available">
            <select value={this.size} onChange={this.onSizeChange}>
              {this.props.product.availableSizes.map(size => {
                return (
                  <option value={size} key={size}>
                    {size}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button onClick={this.handleClick} className="product-cart-btn">
          Add to cart
        </button>
      </div>
    );
  }
}

export default Product;
