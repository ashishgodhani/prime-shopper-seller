import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError, Subject, Observable } from 'rxjs';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import * as $ from "jquery";
import { Title } from '@angular/platform-browser';
import { Products } from './classes/products';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  productData:Array<Products> = []

  selectedSocialMedias  = new Subject<any>();
   _id:object={}
  constructor(
    private _http: HttpClient, 
    private titleService: Title,
    private toastr : ToastrService,
    ) { }

  localUrl: string = 'http://192.168.1.3:8080/api/v1';
  liveUrl: string = 'http://134.209.70.91:8080/api/v1';
  // liveUrl: string = 'http://192.168.1.4:9090/api/v1/front';
  apiUrl: string = (window.location.origin.match('localhost') !== null ? this.localUrl : this.liveUrl);


 
  sellerID:any
  userName = new Subject<any>() 


  setTitle(title: string = 'Home', main : string = '| PrimeShopper') {
    this.titleService.setTitle(`${title} ${main}`);
  }
  
  _response(response: any) {
    if (response.code !== 200) {
      throw new Error(response.data);
    }

    return response.data;
  }

  _handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage =
        error.message || 'Oops! Something went wrong, Please try again.';
    }
    return errorMessage;
  }

  __post(url: string, data: any, loaderElement: any = false,progressBarLine : any = false) {

    var buttonName = "";

    if (loaderElement) {
      buttonName = $(loaderElement).text();
      $(buttonName).attr('disabled', 'true');
      $(loaderElement).html('<i class="fa fa-spin fa-spinner"></i> ' + buttonName);
    }

    var options : any = { headers: this._getHeaders() };

    // if(progressBarLine !== false){
    //   options.reportProgress = true;
    //   options.observe = 'events';

    //   $(progressBarLine).attr('style', 'width:1%');
    // }


    return this._http.post(`${this.apiUrl}${url}`, data, options).pipe(
      map((response: any) => {

        // Remove Loader

        if (loaderElement) {
          $(buttonName).removeAttr('disabled');
          $(loaderElement).find('.fa').remove();
          $(loaderElement).html(buttonName);
        }

        return this._response(response);
      }),
      catchError((error: any) => {
        // this._toast.error(error)

        if (loaderElement) {
          $(loaderElement).find('.fa').remove();
          $(loaderElement).html(buttonName);
        }

        return throwError(this._handleError(error));
      })
    );
  }

  _getHeaders() {
    var token = this.getToken();
    return new HttpHeaders({ 'X-Authentication-token': (token ? token : 'unAuth') })
  }

  getToken() {
    return localStorage.getItem('X-Authentication-token');
  }

  showAlert(type : string, title : string, message : string) {
    if (type == 'success') {
      this.toastr.success(message, title);
    } else if (type == 'error') {
      this.toastr.error(message, title);
    }
  }

  setTemp(key : any,value : any){
    localStorage.setItem(key,value);
  }

  getTemp(key : any){
    return localStorage.getItem(key);
  }

    
  


  

  


  

 

  

}

