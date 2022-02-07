import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-reports-add',
  templateUrl: './customer-reports-add.component.html',
  styleUrls: ['./customer-reports-add.component.css']
})
export class CustomerReportsAddComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  goBack(){
this.location.back()
  }

  postCustomerReports(customerReports:any){

  }

}
