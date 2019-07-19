class Product {
  constructor(productObj) {
    this.availableSizes = productObj.availableSizes;
    this.currencyFormat = productObj.currencyFormat;
    this.currencyId = productObj.currencyId;
    this.description = productObj.description;
    this.id = productObj.id;
    this.installments = productObj.installments;
    this.isFreeShipping = productObj.isFreeShipping;
    this.price = productObj.price;
    this.sku = productObj.sku;
    this.style = productObj.style;
    this.title = productObj.title;
    this.image = productObj.image;
  }
}

export default Product;
