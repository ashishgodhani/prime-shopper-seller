import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-reports-add',
  templateUrl: './order-reports-add.component.html',
  styleUrls: ['./order-reports-add.component.css']
})
export class OrderReportsAddComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  goBack(){
this.location.back()
  }

  postOrdersReports(ordersReports:any){

  }

}
