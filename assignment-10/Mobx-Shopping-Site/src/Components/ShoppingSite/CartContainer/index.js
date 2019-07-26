import React, { Component } from "react";
import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";
import CartItem from "../CartContainer/CartItem";

import {
  StyledCartContainer,
  CartToggle,
  CartCount,
  CartItemsContainer,
  InsideCartCount,
  CartItemsInnerWrap,
  CartIconInCart,
  CartIcon,
  InCartIcon,
  CartText,
  CartSubtotal,
  SubTotal,
  SubTotalText,
  SubTotalCount,
  Checkout
} from "./styledComponents";

@observer
class CartContainer extends Component {
  @observable isClicked = false;
  @action cartClick = () => {
    this.isClicked = !this.isClicked;
  };

  @computed get cartIcon() {
    let cart = <CartIcon alt="carticon" src="assets/cart.png" />;
    return this.isClicked ? "x" : cart;
  }

  render() {
    const {
      cartItemsCount,
      cart,
      getProduct,
      totalCartValue
    } = this.props.store;
    return (
      <StyledCartContainer isClicked={this.isClicked}>
        <CartToggle onClick={this.cartClick}>
          {this.cartIcon}
          <CartCount show={!this.isClicked}>{cartItemsCount}</CartCount>
        </CartToggle>
        <CartItemsContainer>
          <CartItemsInnerWrap>
            <CartIconInCart>
              <CartToggle>
                <InCartIcon alt="carticon" src="assets/cart.png" />
                <InsideCartCount>{cartItemsCount}</InsideCartCount>
              </CartToggle>
              <CartText>Cart</CartText>
            </CartIconInCart>
            <div className="cart-items-wrapper">
              {cart.map(item => {
                return (
                  <CartItem
                    key={item.id}
                    product={getProduct(item.itemId)}
                    store={this.props.store}
                    cartItem={item}
                  />
                );
              })}
            </div>
          </CartItemsInnerWrap>
          <CartSubtotal>
            <SubTotal>
              <SubTotalText>SUBTOTAL</SubTotalText>
              <SubTotalCount>
                <span>$</span>
                {totalCartValue}
              </SubTotalCount>
            </SubTotal>
            <Checkout>CHECKOUT</Checkout>
          </CartSubtotal>
        </CartItemsContainer>
      </StyledCartContainer>
    );
  }
}

export default CartContainer;
