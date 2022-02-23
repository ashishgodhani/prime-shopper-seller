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
  }

  p_image = "";
  b_image = "";

  bannerImage(event:any)
  { 
    var length = event.target.files.length;

      if(length>0)
      {   
        const file =  event.target.files[0];
        this.b_image = file.name; 
      }
  
  }

  productImg(event:any)
  { 
    var length = event.target.files.length;
    for(var i = 0 ; i<length ; i++)
    {
        const file =  event.target.files[i]
        this.p_image += file.name+',';     
    }
    this.p_image = this.p_image.substring(0,this.p_image.length-1);
  }

  addproduct(product_data:any)
  {
    
    product_data.image = this.p_image;
    product_data.banner = this.b_image;
    console.warn(product_data)
    this.http.add_product(product_data).subscribe((result:any) => {
    console.warn(result)
    })
  }

}
