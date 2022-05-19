export class AContentManger {
  _id: string;
  contentName: string;
  contentType: string;
  language: string;
  asins: string;
  lastModified: string;
  contentStatus: string;

  constructor(init: AContentManger) {
    this._id = init._id;
    this.contentName = init.contentName;
    this.contentType = init.contentType;
    this.language = init.language;
    this.asins = init.asins;
    this.lastModified = init.lastModified;
    this.contentStatus = init.contentStatus;
  }
}
