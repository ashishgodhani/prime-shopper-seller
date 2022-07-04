import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import { throwError, Subject, Observable } from "rxjs";
import { HttpClient, HttpEventType, HttpHeaders } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import $ from "jquery";
import { Title } from "@angular/platform-browser";
import { Products } from "./classes/products";

@Injectable({
  providedIn: "root",
})
export class DataService {
  productData: Array<Products> = [];

  selectedSocialMedias = new Subject<any>();
  _id: object = {};
  constructor(
    private _http: HttpClient,
    private titleService: Title,
    private toastr: ToastrService
  ) {}

  currentLiveUrl = "https://api.admincliq.com"
  // currentLiveUrl = "http://localhost:5000";

  liveUrl: string = `${this.currentLiveUrl}/api/v1`;
  addproduct_url = `${this.currentLiveUrl}/api/v1/seller/product/add`;
  updateproduct_url = `${this.currentLiveUrl}/api/v1/seller/product/update`;
  apiUrl: string = this.liveUrl;
  productListData_url = `${this.currentLiveUrl}/api/v1/seller/category`;
  orders_url = `${this.currentLiveUrl}/api/v1/seller/orders`;
  updateOrder_url = `${this.currentLiveUrl}/api/v1/seller/order/update`;
  couriers_url = `${this.currentLiveUrl}/api/v1/seller/couriers`;
  getsproduct = `${this.currentLiveUrl}/api/v1/seller/product`;
  getsproducts = `${this.currentLiveUrl}/api/v1/seller/products`;
  sellerProfile = `${this.currentLiveUrl}/api/v1/seller/profile`;
  updateDataUser = `${this.currentLiveUrl}/api/v1/seller/update/profile`;
  UpdatePassword = `${this.currentLiveUrl}/api/v1/seller/change/password`;

  sellerID: any;
  userName = new Subject<any>();

  setTitle(title: string = "Home", main: string = "| PrimeShopper") {
    this.titleService.setTitle(`${title} ${main}`);
  }

  _response(response: any) {
    if (response.code !== 200) {
      throw new Error(response.data);
    }

    return response.data;
  }

  _handleError(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage =
        error.message || "Oops! Something went wrong, Please try again.";
    }
    return errorMessage;
  }

  __post(
    url: string,
    data: any,
    loaderElement: any = false,
    progressBarLine: any = false
  ) {
    var buttonName = "";

    if (loaderElement) {
      buttonName = $(loaderElement).text();
      $(buttonName).attr("disabled", "true");
      $(loaderElement).html(
        '<i class="fa fa-spin fa-spinner"></i> ' + buttonName
      );
    }

    var options: any = { headers: this._getHeaders() };

    // if(progressBarLine !== false){
    //   options.reportProgress = true;
    //   options.observe = 'events';

    //   $(progressBarLine).attr('style', 'width:1%');
    // }

    return this._http.post(`${this.apiUrl}${url}`, data, options).pipe(
      map((response: any) => {
        // Remove Loader

        if (loaderElement) {
          $(buttonName).removeAttr("disabled");
          $(loaderElement).find(".fa").remove();
          $(loaderElement).html(buttonName);
        }

        return this._response(response);
      }),
      catchError((error: any) => {
        // this._toast.error(error)

        if (loaderElement) {
          $(loaderElement).find(".fa").remove();
          $(loaderElement).html(buttonName);
        }

        return throwError(this._handleError(error));
      })
    );
  }

  _getHeaders() {
    var token = this.getToken();
    return new HttpHeaders({
      "X-Authentication-token": token ? token : "unAuth",
    });
  }

  _getHeadersFile() {
    var token = this.getToken();
    return new HttpHeaders({
      "X-Authentication-token": token ? token : "unAuth",
    });
  }

  getToken() {
    return localStorage.getItem("X-Authentication-token");
  }

  showAlert(type: string, title: string, message: string) {
    if (type == "success") {
      this.toastr.success(message, title);
    } else if (type == "error") {
      this.toastr.error(message, title);
    }
  }

  setTemp(key: any, value: any) {
    localStorage.setItem(key, value);
  }

  getTemp(key: any) {
    return localStorage.getItem(key);
  }

  add_product(data: any) {
    let options: any = { headers: this._getHeadersFile() };
    return this._http.post(this.addproduct_url, data, options);
  }

  update_product(data: any) {
    let options: any = { headers: this._getHeadersFile() };
    return this._http.post(this.updateproduct_url, data, options);
  }

  uploded_product_list_data() {
    var options: any = { headers: this._getHeaders() };
    return this._http.get(this.productListData_url, options);
  }

  upload_svg(data: any, api: any) {
    var options: any = { headers: this._getHeaders() };
    return this._http.post(this.liveUrl + api, data, options);
  }

  get_orders() {
    var options: any = { headers: this._getHeaders() };
    return this._http.post(this.orders_url, "", options);
  }
  get_couriers() {
    var options: any = { headers: this._getHeaders() };
    return this._http.post(this.couriers_url, "", options);
  }

  update_order(data: any) {
    var options: any = { headers: this._getHeaders() };
    return this._http.post(this.updateOrder_url, data, options);
  }

  product(data: any) {
    var options: any = { headers: this._getHeaders() };
    let product_id = { product: data ? data : "unAuth" };
    return this._http.post(this.getsproduct, product_id, options);
  }

  products() {
    var options: any = { headers: this._getHeaders() };
    return this._http.post(this.getsproducts, '', options);
  }

  update_profile(data:any)
  {
    let options : any = { headers: this._getHeaders() };
    return this._http.post(this.updateDataUser,data,options);
  }

  updatepassword(data:any)
  {
    let options : any = { headers: this._getHeaders() };
    return this._http.post(this.UpdatePassword,data,options);
  }

  getProfile()
  {
    let options : any = { headers: this._getHeaders() };
    return this._http.post(this.sellerProfile,'',options);
  }
}
