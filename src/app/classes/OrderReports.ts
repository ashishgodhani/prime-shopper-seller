export class OrderReports {
  _id: string;
  repoertType: string;
  batchId: string;
  dateRangeCovered: string;
  dateAndTimeRequested: string;
  reportStatus: string;

  constructor(init: OrderReports) {
    this._id = init._id;
    this.repoertType = init.repoertType;
    this.batchId = init.batchId;
    this.dateAndTimeRequested = init.dateAndTimeRequested;
    this.dateRangeCovered = init.dateRangeCovered;
    this.reportStatus = init.reportStatus;
  }
}
