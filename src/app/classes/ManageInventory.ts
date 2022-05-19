export class ManageInventory {

    _id : string;
    image:string;
    sku:string;
    productName:string;
    available:string;
    feePriview:string;
    price:number;
    businessPrice:number;
    lowestPrice:number
   

    constructor(init : ManageInventory){
        this._id = init._id;
        this.productName = init.productName;
        this.available = init.available
        this.feePriview = init.feePriview;
        this.image = init.image,
        this.sku = init.sku
        this.price = init.price;
        this.businessPrice = init.businessPrice
        this.lowestPrice = init.lowestPrice;
      
    }

}
