import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { Products } from 'src/app/classes/products';
import { Seller } from 'src/app/classes/Seller';
import { VoiceCustomers } from 'src/app/classes/VoiceCustomers';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-voice-customer',
  templateUrl: './voice-customer.component.html',
  styleUrls: ['./voice-customer.component.css']
})
export class VoiceCustomerComponent implements OnInit {
  voiceCustomers:Array<VoiceCustomers> = []
  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
  this.dataService.setTitle('Voice-Customers')
  this.loadCustomers()
  }

  loadCustomers(){
    this.dataService.__post('',{})
    .subscribe(
      (customers:Array<any>)=>{
        customers.map((customer:any)=>{
          this.voiceCustomers.push(new VoiceCustomers({
            _id:customer._id,
            image: customer.image,
            productName: new Products({
              _id: customer.product._id,
              productName : customer.product.title,
              description : customer.product.description,
              productPrice : customer.product.price,
              sellingPrice : customer.product.sellingPrice,
              producetImages : customer.product.images,
              bannerImage : customer.product.banner,
              discount: customer.product.discount,
              quantity: customer.product.quantity,
              feature: customer.product.feature,
              seller:new Seller({
                _id: customer.product.seller._id,
                name: customer.product.seller.name,
                email: customer.product.seller.email,
                password: customer.product.seller.password,
                phoneNumber: customer.product.seller.phoneNumber,
              }),
              category : new Category({
                _id : customer.product.category._id,
                name : customer.product.category.name,
                image : customer.product.category.banner
              }),
            }),
            sku:customer.sku,
            sellerControllableRate: customer.sellerControllableRate,
            sellerControllableReturns: customer.sellerControllableReturns,
            totalOrders: customer.totalOrders,
            topReturnReason: customer.topReturnReason,
            lastUpdated: customer.lastUpdated,
            status: customer.status

          }))
        })
      },
      (error)=>{
        this.dataService.showAlert('error','Error',error)
      }
    )
    
  }

}
