import { Products } from "./products";

export class PricingHealth {

    _id : string;
    productName : Products;
    pricingHealthIssue:string;
    price:number;
    salePrice:number;
    businessPrice:number;
    referencePrice:number;
    minimumPrice:number;
    maximumPrice:number;

   

    constructor(init : PricingHealth){
        this._id = init._id;
        this.productName = init.productName;
        this.pricingHealthIssue = init.pricingHealthIssue;  
        this.price = init.price;
        this.salePrice = init.salePrice;
        this.businessPrice = init.businessPrice;
        this.referencePrice = init.referencePrice;
        this.minimumPrice = init.minimumPrice;
        this.maximumPrice = init.maximumPrice;     
    }

}
