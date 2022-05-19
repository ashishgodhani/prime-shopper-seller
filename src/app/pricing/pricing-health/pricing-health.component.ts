import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { PricingHealth } from 'src/app/classes/PricingHealth';
import { Products } from 'src/app/classes/products';
import { Seller } from 'src/app/classes/Seller';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-pricing-health',
  templateUrl: './pricing-health.component.html',
  styleUrls: ['./pricing-health.component.css'],
})
export class PricingHealthComponent implements OnInit {
  pricingHealths: Array<PricingHealth> = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.setTitle('PricingHealth');
    this.loadPricingHealth();
  }

  loadPricingHealth() {
    this.dataService.__post('', {}).subscribe(
      (healths: Array<any>) => {
        healths.map((health: any) => {
          this.pricingHealths.push(
            new PricingHealth({
              _id: health._id,
              pricingHealthIssue: health.pricingHealthIssue,
              price: health.price,
              salePrice: health.salePrice,
              businessPrice: health.businessPrice,
              referencePrice: health.referencePrice,
              minimumPrice: health.minimumPrice,
              maximumPrice: health.maximumPrice,
              productName: new Products({
                _id: health.product._id,
                productName: health.product.title,
                description: health.product.description,
                productPrice: health.product.price,
                sellingPrice: health.product.sellingPrice,
                producetImages: health.product.images,
                bannerImage: health.product.banner,
                discount: health.product.discount,
                quantity: health.product.quantity,
                feature: health.product.feature,
                seller:new Seller({
                  _id: health.product.seller._id,
                  name: health.product.seller.name,
                  email: health.product.seller.email,
                  password: health.product.seller.password,
                  phoneNumber: health.product.seller.phoneNumber,
                }),
                category : new Category({
                  _id : health.product.category._id,
                  name : health.product.category.name,
                  image : health.product.category.banner
                }),
              }),
            })
          );
        });
      },
      (error) => {
        this.dataService.showAlert('error', 'Error', error);
      }
    );
  }
}
