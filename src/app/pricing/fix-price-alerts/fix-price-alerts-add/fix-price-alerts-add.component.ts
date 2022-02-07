import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fix-price-alerts-add',
  templateUrl: './fix-price-alerts-add.component.html',
  styleUrls: ['./fix-price-alerts-add.component.css']
})
export class FixPriceAlertsAddComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
   this.location.back()
  }

  postfixPriceAlerts(fixPrice:any){

  }
}
