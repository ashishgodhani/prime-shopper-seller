import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { FixPriceAlerts } from 'src/app/classes/FixPriceAlerts';
import { Products } from 'src/app/classes/products';
import { Seller } from 'src/app/classes/Seller';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-fix-price-alerts',
  templateUrl: './fix-price-alerts.component.html',
  styleUrls: ['./fix-price-alerts.component.css']
})
export class FixPriceAlertsComponent implements OnInit {
  fixPriceAlerts:Array<FixPriceAlerts> = []
  constructor(
    private dataService : DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('Fix Price Alerts');
    this.loadFixPriceAlerts()
  }

  loadFixPriceAlerts() {
    this.dataService.__post('',{})
    .subscribe(
      (priceAlerts:Array<any>)=>{
        priceAlerts.map((priceAlert:any)=>{
          this.fixPriceAlerts.push(new FixPriceAlerts({
            _id:priceAlert._id,
            status: priceAlert.status,
            sku: priceAlert.sku,
            productName: new Products({
              _id: priceAlert.product._id,
              productName : priceAlert.product.title,
              description : priceAlert.product.description,
              productPrice : priceAlert.product.price,
              sellingPrice : priceAlert.product.sellingPrice,
              producetImages :priceAlert. product.images,
              bannerImage : priceAlert.product.banner,
              discount: priceAlert.product.discount,
              quantity: priceAlert.product.quantity,
              feature: priceAlert.product.feature,
              seller:new Seller({
                _id: priceAlert.product.seller._id,
                name: priceAlert.product.seller.name,
                email: priceAlert.product.seller.email,
                password: priceAlert.product.seller.password,
                phoneNumber: priceAlert.product.seller.phoneNumber,
              }),
              category : new Category({
                _id : priceAlert.product.category._id,
                name : priceAlert.product.category.name,
                image : priceAlert.product.category.banner
              }),
            }),
            available:priceAlert.available,
            price: priceAlert.price,
            businessPrice: priceAlert.businessPrice,
            minimumPrice: priceAlert.minimumPrice,
            maximumPrice: priceAlert.maximumPrice,
          }))
        })

      },
      (error)=>{
        this.dataService.showAlert('error','Error',error)
      }
    )
  }
}
