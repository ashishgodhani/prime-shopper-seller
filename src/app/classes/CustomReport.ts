export class CustomReport {
  _id: string;
  name: string;
  segment: string;
  dateFrom: string;
  dateTo: string;
  generatedOn: string;
  notes: string;

  constructor(init: CustomReport) {
    this._id = init._id;
    this.name = init.name;
    this.segment = init.segment;
    this.dateFrom = init.dateFrom;
    this.dateTo = init.dateTo;
    this.generatedOn = init.generatedOn;
    this.notes = init.notes;
  }
}
