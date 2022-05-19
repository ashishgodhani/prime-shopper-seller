import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { ListingQuality } from 'src/app/classes/ListingQuality';
import { Products } from 'src/app/classes/products';
import { Seller } from 'src/app/classes/Seller';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-improve-listing-quality',
  templateUrl: './improve-listing-quality.component.html',
  styleUrls: ['./improve-listing-quality.component.css'],
})
export class ImproveListingQualityComponent implements OnInit {
  listingQualitys: Array<ListingQuality> = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.setTitle('Improve-Listing-Quality');
    this.loadImproveListingQuality();
  }

  loadImproveListingQuality() {
    this.dataService.__post('', {}).subscribe(
      (listingQualitysQuality: Array<any>) => {
       listingQualitysQuality.map((quality:any)=>{
         this.listingQualitys.push(new ListingQuality({ 
           _id:quality._id,
           sales:quality.sales,
           available:quality.available,
           recommendations:quality.recommendations,
           product:new Products({
             _id:quality.product._id,
             description : quality.product.description,
            productPrice : quality.product.price,
            sellingPrice : quality.product.sellingPrice,
            producetImages : quality.product.images,
            bannerImage : quality.product.banner,
            discount: quality.product.discount,
            quantity: quality.product.quantity,
            feature: quality.product.feature,
            seller:new Seller({
              _id: quality.product.seller._id,
              name: quality.product.seller.name,
              email:quality.product.seller.email,
              password: quality.product.seller.password,
              phoneNumber: quality.product.seller.phoneNumber,
            }),
            category : new Category({
              _id : quality.product.category._id,
              name : quality.product.category.name,
              image : quality.product.category.banner
            }),
           })
         }))
       })
      },
      (error) => {
        this.dataService.showAlert('error', 'Error', error);
      }
    );
  }
}
