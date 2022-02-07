import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(
    private dataService : DataService,
    private location : Location
  ) { }

  ngOnInit(): void {
  this.dataService.setTitle('Product-Update')
  }

  updateproduct(data:any){

  }



  goBack() {
    this.location.back();
  }

}
