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
    const { image, title, style, price } = this.props.product;
    return (
      <StyledCartItem>
        <div>
          <CartItemImage alt="cartitem" src={image} />
        </div>
        <CartItemInfoWrapper>
          <CrossMark onClick={this.handleRemove}>x</CrossMark>
          <CartItemInfo>
            <div>
              <ItemName>{title}</ItemName>
              <Grey>
                {this.props.cartItem.size} | {style}
              </Grey>
              <Grey>Quantity : {this.props.cartItem.quantity}</Grey>
            </div>
            <ItemPrice>
              <span>$</span>
              {price}
            </ItemPrice>
          </CartItemInfo>
        </CartItemInfoWrapper>
      </StyledCartItem>
    );
  }
}

export default CartItem;
