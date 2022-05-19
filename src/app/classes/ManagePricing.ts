import { Products } from "./products";

export class ManagePricing {

    _id : string;
    image : string;
    sku:string;
    productName:Products;
    salesRank:number;
    salesHistory:string;
    feePreview : string;
    price:number;
    businessPrice:number;
    lowestPrice:number;
    buyBoxPrice:number

   

    constructor(init : ManagePricing){
        this._id = init._id;
        this.image = init.image;
        this.productName = init.productName;       
        this.sku = init.sku;
        this.salesRank =  init.salesRank;
        this.salesHistory = init.salesHistory;
        this.feePreview = init.feePreview;
        this.price = init.price;
        this.businessPrice = init.price;
        this.lowestPrice = init.lowestPrice;
        this.buyBoxPrice = init.buyBoxPrice;

    }

}
