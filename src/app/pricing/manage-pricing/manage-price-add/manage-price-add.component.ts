import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-price-add',
  templateUrl: './manage-price-add.component.html',
  styleUrls: ['./manage-price-add.component.css'],
})
export class ManagePriceAddComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }


  postManagePrice(managePricing:any){

  }
}
