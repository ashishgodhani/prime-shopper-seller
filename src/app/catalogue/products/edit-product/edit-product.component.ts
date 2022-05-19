import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';
import { } from '@angular/common/http';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private location: Location,
    private _ActivatedRoute: ActivatedRoute
  ) { }

  id: any;
  data:any[]=[];

  ngOnInit(): void {
    this.dataService.setTitle('Product-Update');
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id");
    this.data.push({product:this.id});
   
  }

  updateproduct(data: any) {

  }

  goBack() {
    this.location.back();
  }

}
