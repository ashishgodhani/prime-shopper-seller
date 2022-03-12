import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private DataServices:DataService) { }
  userData: any;
  ngOnInit(): void {
    this.DataServices.getProfile().subscribe((result:any)=>{
      this.userData = result;
      console.log(result)
    })
  }
}
