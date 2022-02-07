import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { ManagePricing } from 'src/app/classes/ManagePricing';
import { Products } from 'src/app/classes/products';
import { Seller } from 'src/app/classes/Seller';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-manage-pricing',
  templateUrl: './manage-pricing.component.html',
  styleUrls: ['./manage-pricing.component.css']
})
export class ManagePricingComponent implements OnInit {
  managePricings : Array<ManagePricing> = []
  constructor(
    private dataService : DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('Manage Pricing')
    this.loadManagePricing()
  }

  loadManagePricing(){
    this.dataService.__post('',{})
    .subscribe(
      (pricings:Array<any>)=>{
       pricings.map((pricing:any)=>{
         this.managePricings.push(new ManagePricing({
           _id:pricing._id,
           image: pricing.image,
           sku: pricing.sku,
           productName:new Products({
            _id: pricing.product._id,
            productName : pricing.product.title,
            description : pricing.product.description,
            productPrice : pricing.product.price,
            sellingPrice : pricing.product.sellingPrice,
            producetImages : pricing.product.images,
            bannerImage : pricing.product.banner,
            discount: pricing.product.discount,
            quantity: pricing.product.quantity,
            feature: pricing.product.feature,

            seller:new Seller({
              _id: pricing.product.seller._id,
              name: pricing.product.seller.name,
              email: pricing.product.seller.email,
              password: pricing.product.seller.password,
              phoneNumber: pricing.product.seller.phoneNumber,
            }),
            category : new Category({
              _id : pricing.product.category._id,
              name : pricing.product.category.name,
              image : pricing.product.category.banner
            }),
           }),
           salesRank:pricing.salesRank,
           salesHistory: pricing.salesHistory,
           feePreview:pricing.feePreview,
           price: pricing.price,
           businessPrice: pricing.businessPrice,
           lowestPrice: pricing.lowestPrice,
           buyBoxPrice: pricing.buyBoxPrice,
         }))

       })
      },
      (error)=>{
        this.dataService.showAlert('error','Error',error)
      }
    )
  }

}
