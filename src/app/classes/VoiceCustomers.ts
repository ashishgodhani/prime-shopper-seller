import { Products } from "./products";

export class VoiceCustomers {
  _id: string;
  image: string;
  productName: Products;
  sku: string;
  sellerControllableRate: number;
  sellerControllableReturns: string;
  totalOrders: number;
  topReturnReason:string;
  lastUpdated:string;
  status:string

  constructor(init: VoiceCustomers) {
    this._id = init._id;
    this.productName = init.productName;
    this.image = init.image;
    this.sku = init.sku;
    this.sellerControllableRate = init.sellerControllableRate;
    this.sellerControllableReturns = init.sellerControllableReturns;
    this.totalOrders = init.totalOrders;
    this.topReturnReason = init.topReturnReason;
    this.lastUpdated = init.lastUpdated;
    this.status = init.status
  }
}
