import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Base de datos
  private listProduct = [
    {
      "name": "product_default",
      "price": 1000,
      "brand": "generic"
    }
  ];

  public index() {
    return this.listProduct;
  }

  public create (json) {
    return this.listProduct.push(json);
  }

  public show(id) {
    return this.listProduct[id - 1];
  }

  public edit(id, json) {
    this.listProduct[id - 1].name = json.name;
    this.listProduct[id - 1].brand = json.brand;
    this.listProduct[id - 1].price = json.price;
    return this.listProduct[id - 1];
  }
}
