export class InventoryReport {

    _id : string;
    reportType : string;
    batchId:number;
    dateAndTimeRequested:string;
    dateTimeCompleted:string;
    reportStatus:String
   

    constructor(init : InventoryReport){
        this._id = init._id;
        this.reportType = init.reportType;
        this.batchId = init.batchId;      
        this.dateAndTimeRequested = init.dateAndTimeRequested;
        this.dateTimeCompleted = init.dateTimeCompleted;
        this.reportStatus = init.reportStatus; 
    }

}
