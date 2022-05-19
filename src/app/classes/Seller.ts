export class Seller {

    _id : string;
    name : string;
    email:string;
    password:string;
    phoneNumber:string;

    constructor(init : Seller){
        this._id = init._id;
        this.name = init.name;
        this.email = init.email;
        this.password = init.password
        this.phoneNumber = init.phoneNumber;
    }

}
