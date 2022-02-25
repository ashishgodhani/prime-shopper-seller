import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../../auth.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(
    private http : DataService,
    private auth : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    console.log("Set Category API from https://prime-shopper-api.herokuapp.com/api/v1/categories")
  }

  p_image  = '';
  b_image = "";

  bannerImage(event:any)
  { 
    this.b_image = event.target.files[0];
    // console.log(this.b_image);
      // if(length>0)
      // {   
      //   const file =  event.target.files[0];
      //   this.b_image = file.name; 
      // }
  
  }

  productImg(event:any)
  { 
    
    
    this.p_image = event.target.files;
    // console.log(this.p_image);
    // for(var i = 0 ; i<length ; i++)
    // {
    //     const file =  event.target.files[i]
    //     this.p_image += file.name+',';     
    // }
    // this.p_image = this.p_image.substring(0,this.p_image.length-1);
  }

  addproduct(product_data:any)
  {
    console.log("p_image", this.p_image)
    const send_data = new FormData();

    send_data.append('banner',this.b_image);
    // send_data.append('category',product_data.category);
    send_data.append('category', "6213b4f1562de1be488bc248");
    send_data.append('title',product_data.title);
    send_data.append('price',product_data.price);
    send_data.append('sellingPrice',product_data.sellingPrice);
    send_data.append('SKU',product_data.SKU);
    send_data.append('images',this.p_image);
    send_data.append('quantity',product_data.quantity);
    send_data.append('description',product_data.description);
    send_data.append('features',product_data.features);
    send_data.append('status',product_data.status);
    this.http.add_product(send_data).subscribe((result:any) => {
      console.log(result)
    })
  }

}
