import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { Products } from 'src/app/classes/products';
import { Seller } from 'src/app/classes/Seller';
import { DataService } from 'src/app/data.service';
// import { Product } from 'src/app/classes/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Array<any> = [];

  constructor(
    private dataService: DataService,
  ) { }  

  ngOnInit(): void {
    this.dataService.setTitle('Products')
    this.loadProducts();
  }

  loadProducts() {
    this.dataService.__post('/seller/products', {})
      .subscribe(
        (products: Array<any>) => {
          console.log("products", products);
          this.products = products;
          
          // products.map((product: any) => {
          //   this.products.push(new Products({
          //     _id: product._id,
          //     productName: product.title,
          //     description: product.description,
          //     productPrice: product.price,
          //     sellingPrice: product.sellingPrice,
          //     producetImages: product.images,
          //     bannerImage: product.banner,
          //     discount: product.discount,
          //     quantity: product.quantity,
          //     feature: product.feature,
          //     seller: new Seller({
          //       _id: product.seller._id,
          //       name: product.seller.name,
          //       email: product.seller.email,
          //       password: product.seller.password,
          //       phoneNumber: product.seller.phoneNumber,
          //     }),
              
          //     category: new Category({
          //       _id: product.category._id,
          //       name: product.category.name,
          //       image: product.category.banner
          //     }),
          //   }));
          // });
        },
        (error) => {
          this.dataService.showAlert('error', 'Error', error)

        }
      )


  }
  onDelete(id: any) {

  }


}
