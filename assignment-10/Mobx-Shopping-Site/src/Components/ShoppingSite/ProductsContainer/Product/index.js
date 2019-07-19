import React, { Component } from "react";

class Product extends Component {
  handleClick = () => {
    this.props.store.addToCart(this.props.product.id);
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
        </div>
        <button onClick={this.handleClick} className="product-cart-btn">
          Add to cart
        </button>
      </div>
    );
  }
}

export default Product;
