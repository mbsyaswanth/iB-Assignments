import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

class CartItem {
  @observable quantity;
  constructor(itemId, size) {
    this.itemId = itemId;
    this.size = size;
    this.quantity = 1;
  }

  @action increaseQty = () => {
    this.quantity++;
  };
}

export default CartItem;
