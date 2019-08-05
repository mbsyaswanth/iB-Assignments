import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

class CartItem {
  @observable quantity;
  constructor(itemId, size, quantity = 1) {
    this.itemId = itemId;
    this.size = size;
    this.quantity = quantity;
  }

  @action increaseQty = () => {
    this.quantity++;
  };
}

export default CartItem;
