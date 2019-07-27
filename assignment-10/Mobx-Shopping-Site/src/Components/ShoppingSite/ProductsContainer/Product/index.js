import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";

import {
  ProductContainer,
  FreeShipping,
  ProductInfo,
  ProductTitle,
  Line,
  ProductPrice,
  ProductInstallments,
  ProductCartBtn,
  Select,
  Option
} from "./styledComponents";

@observer
class Product extends Component {
  @observable size = this.props.product.availableSizes[0];
  onSizeChange = event => {
    console.log(event.target.value);
    this.size = event.target.value;
  };

  handleClick = () => {
    this.props.store.addToCart(this.props.product.id, this.size);
  };

  render() {
    const {
      isFreeShipping,
      image,
      title,
      price,
      installments,
      availableSizes
    } = this.props.product;

    return (
      <ProductContainer>
        <FreeShipping id="freeshipping" isFreeShipping={isFreeShipping}>
          Free shipping
        </FreeShipping>
        <div>
          <img alt="productimage" src={image} />
        </div>
        <ProductInfo>
          <ProductTitle id="title1">{title}</ProductTitle>
          <Line />
          <ProductPrice id="price">$ {price}</ProductPrice>
          <ProductInstallments id="installments">
            or {installments}x ${(price / installments).toFixed(2)}
          </ProductInstallments>
          <div>
            <Select value={this.size} onChange={this.onSizeChange}>
              {availableSizes.map(size => {
                return (
                  <Option value={size} key={size}>
                    {size}
                  </Option>
                );
              })}
            </Select>
          </div>
        </ProductInfo>
        <ProductCartBtn id="addtocart" onClick={this.handleClick}>
          Add to cart
        </ProductCartBtn>
      </ProductContainer>
    );
  }
}

export default Product;
