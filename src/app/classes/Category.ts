export class Category {

    _id : string;
    name : string;
    image : string;


    constructor(init : Category){
        this._id = init._id;
        this.name = init.name;
        this.image = init.image;
    }

}
