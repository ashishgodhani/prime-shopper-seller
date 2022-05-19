import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { Discount } from 'src/app/classes/Discount';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-fee-discount',
  templateUrl: './fee-discount.component.html',
  styleUrls: ['./fee-discount.component.css']
})
export class FeeDiscountComponent implements OnInit {
  feeDiscounts :Array<Discount> = []
  constructor(
    private dataService : DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('Fee Discount')
 this. loadFeeDiscount()
  }

  loadFeeDiscount(){
    this.dataService.__post('',{})
    .subscribe(
      (feeDiscounts:Array<any>)=>{
      feeDiscounts.push((feeDiscount:any)=>{
        this.feeDiscounts.push(new Discount({
          _id: feeDiscount._id,
          category: new Category({
            _id :feeDiscount.category._id,
            name: feeDiscount.category.name,
            image:feeDiscount.category.image

          }),
          brand:feeDiscount.brand,
          stdReferralFee:feeDiscount.stdReferralFee,
          promotionalReferralFee: feeDiscount.promotionalReferralFee,
          formDate:feeDiscount.formDate,
          toDate: feeDiscount.toDate,
        }))
      })
      },
      (error)=>{
        this.dataService.showAlert('error','Error',error)
      }
    )
  }

}
