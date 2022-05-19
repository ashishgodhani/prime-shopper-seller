export class PerformanceNotification {

    _id : string;
    subject : string;
    date:string;
   

    constructor(init : PerformanceNotification){
        this._id = init._id;
        this.subject = init.subject;
        this.date = init.date;       
    }

}
