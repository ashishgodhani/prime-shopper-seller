import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pricing-health',
  templateUrl: './add-pricing-health.component.html',
  styleUrls: ['./add-pricing-health.component.css'],
})
export class AddPricingHealthComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}


  postPriceHealth(addPriceHealth:any){

  }
  goBack() {
    this.location.back();
  }
}
