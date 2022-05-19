import { Products } from "./products";

export class ListingQuality {

    _id : string;
    product : Products;
    available:string;
    sales:string;
    recommendations:string
   

    constructor(init : ListingQuality){
        this._id = init._id;
        this.product = init.product;
        this.available = init.available;     
        this.sales = init.sales;
        this.recommendations = init.recommendations;  
    }

}
