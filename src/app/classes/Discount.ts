import { Category } from "./Category";

export class Discount {

    _id : string;
    category : Category;
    brand:string;
    stdReferralFee:string;
    promotionalReferralFee:string;
    formDate:string;
    toDate:string;
   

    constructor(init : Discount){
        this._id = init._id;
        this.category = init.category;
        this.brand = init.brand;      
        this.stdReferralFee = init.stdReferralFee;
        this.promotionalReferralFee = init.promotionalReferralFee;
        this.formDate = init.formDate;
        this.toDate = init.toDate
    }

}
