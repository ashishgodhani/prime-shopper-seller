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
    private dataService : DataService,
    private auth : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  p_image = "";

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
    console.warn(product_data);
  }

}
