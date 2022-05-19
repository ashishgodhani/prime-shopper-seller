export class Feedback {

    _id : string;
    date : string;
    rating:string;
    orderId:string;
    comments:string;

   

    constructor(init : Feedback){
        this._id = init._id;
        this.date = init.date;
        this.rating = init.rating;      
         this.orderId = init.orderId
         this.comments = init.comments;
    }

}
