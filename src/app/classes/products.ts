import { Category } from "./Category";
import { Seller } from "./Seller";


export class Products {

     _id: string;
     productName : string;
     description : string;
     productPrice : number;
     sellingPrice : number;
     producetImages : Array<any>;
     bannerImage : string;
     category : Category;
     discount : number;
     seller:Seller;
     quantity : number;
     feature:string;



     constructor(init:any){
          this._id = init._id
          this.productName = init.productName;
          this.description = init.description;
          this.productPrice = init.productPrice;
          this.sellingPrice = init.sellingPrice;
          this.producetImages = init.producetImages;
          this.bannerImage = init.bannerImage;
          this.category = init.category;
          this.seller = init.seller
          this.discount = init.discount;
          this.quantity = init.quantity;
          this.feature = init.feature
          // this.setDiscount();

     }


     public get getBannerImage(){
          return 'http://192.168.1.4:3030/cloths/' + this.bannerImage;
     }


  
   



}
