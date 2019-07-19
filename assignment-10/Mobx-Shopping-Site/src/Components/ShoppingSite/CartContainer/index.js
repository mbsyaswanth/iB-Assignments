import React, { Component } from "react";
import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";
import CartItem from "../CartContainer/CartItem";

@observer
class CartContainer extends Component {
  @observable isClicked = false;
  @action cartClick = () => {
    this.isClicked = !this.isClicked;
  };

  @computed get loadIcon() {
    let cart = (
      <img alt="carticon" className="cart-image" src="assets/cart.png" />
    );
    return this.isClicked ? "x" : cart;
  }

  render() {
    return (
      <div className={"cart-container " + (this.isClicked ? "cart-show" : "")}>
        <div onClick={this.cartClick} className="cart-toggle">
          {this.loadIcon}
          <span className={this.isClicked ? "display-none" : "cart-count"}>
            {this.props.store.cartItemsCount}
          </span>
        </div>
        <div className="cart-items-container">
          <div className="cart-items-inner-wrap">
            <div className="cart-icon-in-cart">
              <div className="cart-toggle">
                <img
                  alt="carticon"
                  className="cart-image in-cart-image"
                  src="assets/cart.png"
                />
                <span className="cart-count">
                  {this.props.store.cartItemsCount}
                </span>
              </div>
              <div className="cart-text">Cart</div>
            </div>
            <div className="cart-items-wrapper">
              {this.props.store.cart.map(item => {
                return (
                  <CartItem
                    key={item.id}
                    id={item.itemId}
                    product={this.props.store.getProduct(item.itemId)}
                    store={this.props.store}
                    quantity={item.quantity}
                  />
                );
              })}
            </div>
          </div>
          <div className="cart-subtotal">
            <div className="sub-total">
              <span className="sub-total-text">SUBTOTAL</span>
              <span className="sub-total-count">
                <span>$</span>
                {this.props.store.totalCartValue}
              </span>
            </div>
            <div className="checkout">CHECKOUT</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
