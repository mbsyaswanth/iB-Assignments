import React, { Component } from "react";
import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

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
    const { product } = this.props;
    return (
      <ProductContainer>
        <FreeShipping isFreeShipping={product.isFreeShipping}>
          Free shipping
        </FreeShipping>
        <div>
          <img alt="productimage" src={product.image} />
        </div>
        <ProductInfo>
          <ProductTitle>{product.title}</ProductTitle>
          <Line />
          <ProductPrice>$ {product.price}</ProductPrice>
          <ProductInstallments>
            or {product.installments}x $
            {(product.price / product.installments).toFixed(2)}
          </ProductInstallments>
          <div>
            <Select value={this.size} onChange={this.onSizeChange}>
              {product.availableSizes.map(size => {
                return (
                  <Option value={size} key={size}>
                    {size}
                  </Option>
                );
              })}
            </Select>
          </div>
        </ProductInfo>
        <ProductCartBtn onClick={this.handleClick}>Add to cart</ProductCartBtn>
      </ProductContainer>
    );
  }
}

export default Product;
