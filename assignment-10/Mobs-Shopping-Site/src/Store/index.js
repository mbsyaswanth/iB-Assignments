import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

@observer
class Products {
  @observable cart = [];
  @observable products = [];
  @observable sizes = [];
  @observable orderBy = "";
}

export default Products;
