import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-inventory-reports',
  templateUrl: './add-inventory-reports.component.html',
  styleUrls: ['./add-inventory-reports.component.css']
})
export class AddInventoryReportsComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }


  postInventoryReport(addInventoryReport:any){

  }

  goBack() {
  this.location.back()
  }

}
