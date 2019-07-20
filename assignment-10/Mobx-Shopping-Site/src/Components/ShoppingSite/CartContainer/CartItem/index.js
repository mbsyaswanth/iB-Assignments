import React, { Component } from "react";
import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";
@observer
class CartItem extends Component {
  handleRemove = () => {
    this.props.store.removeFromCart(this.props.cartItem);
  };

  render() {
    return (
      <div className="cart-item">
        <div className="cart-item-image-wrapper">
          <img
            className="cart-item-image"
            alt="cartitem"
            src={this.props.product.image}
          />
        </div>
        <div className="cart-item-info-wrapper">
          <span className="cross-mark" onClick={this.handleRemove}>
            x
          </span>
          <div className="cart-item-del-wrapper" />
          <div className="cart-item-info">
            <div className="item-info">
              <div className="item-name">{this.props.product.title}</div>
              <div className="size-style">
                {this.props.size} | {this.props.product.style}
              </div>
              <div className="item-qty">Quantity : {this.props.quantity}</div>
            </div>
            <div className="item-price">
              <span>$</span>
              {this.props.product.price}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
