import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-discount-add',
  templateUrl: './fee-discount-add.component.html',
  styleUrls: ['./fee-discount-add.component.css']
})
export class FeeDiscountAddComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
this.location.back()
  }


  postfeeDiscount(feeDiscount:any){

  }
}
