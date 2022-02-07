import { Products } from "./products";

export class FixPriceAlerts {

    _id : string;
    status : string;
    sku:string;
    productName:Products;
    available:string;
    price:number;
    businessPrice:number;
    minimumPrice:number;
    maximumPrice:number;
   

    constructor(init : FixPriceAlerts){
        this._id = init._id;
        this.status = init.status;
        this.sku = init.sku;      
        this.productName = init.productName;
        this.available = init.available
        this.price = init.price;
        this.businessPrice = init.businessPrice;
        this.minimumPrice = init.minimumPrice;
        this.maximumPrice = init.maximumPrice;
    }

}
