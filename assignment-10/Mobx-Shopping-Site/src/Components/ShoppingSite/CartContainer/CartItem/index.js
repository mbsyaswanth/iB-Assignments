import React, { Component } from "react";
import { observer } from "mobx-react";

import {
  StyledCartItem,
  CartItemImage,
  CartItemInfoWrapper,
  CrossMark,
  CartItemInfo,
  ItemName,
  ItemPrice,
  Grey
} from "./styledComponents";
@observer
class CartItem extends Component {
  handleRemove = () => {
    this.props.store.removeFromCart(this.props.cartItem);
  };

  render() {
    return (
      <StyledCartItem>
        <div>
          <CartItemImage alt="cartitem" src={this.props.product.image} />
        </div>
        <CartItemInfoWrapper>
          <CrossMark onClick={this.handleRemove}>x</CrossMark>
          <CartItemInfo>
            <div>
              <ItemName>{this.props.product.title}</ItemName>
              <Grey>
                {this.props.cartItem.size} | {this.props.product.style}
              </Grey>
              <Grey>Quantity : {this.props.cartItem.quantity}</Grey>
            </div>
            <ItemPrice>
              <span>$</span>
              {this.props.product.price}
            </ItemPrice>
          </CartItemInfo>
        </CartItemInfoWrapper>
      </StyledCartItem>
    );
  }
}

export default CartItem;
