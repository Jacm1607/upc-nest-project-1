import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Base de datos
  private listProduct = [];

  public index() {
    return this.listProduct;
  }

  public create (json) {
    return this.listProduct.push(json);
  }

  public show(id) {
    return this.listProduct[id - 1];
  }
}
