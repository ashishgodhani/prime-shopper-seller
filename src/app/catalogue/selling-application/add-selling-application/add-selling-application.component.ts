import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-selling-application',
  templateUrl: './add-selling-application.component.html',
  styleUrls: ['./add-selling-application.component.css']
})
export class AddSellingApplicationComponent implements OnInit {

  constructor(
  private location:Location,
    ) { }

  ngOnInit(): void {
  }


 
  postApplication(applicationData:any){

  }

  goBack(){
    this.location.back()

  }

}
