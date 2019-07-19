import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

class CartItem {
  @observable quantity;
  constructor(itemId) {
    this.itemId = itemId;
    this.quantity = 1;
  }

  @action increaseQty = () => {
    this.quantity++;
  };
}

export default CartItem;
