export class SellingApplication {

    _id : string;
    applicationName : string;
    applicationType:string;
   

    constructor(init : SellingApplication){
        this._id = init._id;
        this.applicationName = init.applicationName;
        this.applicationType = init.applicationType;       
    }

}
