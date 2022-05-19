import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-notification-add',
  templateUrl: './performance-notification-add.component.html',
  styleUrls: ['./performance-notification-add.component.css']
})
export class PerformanceNotificationAddComponent implements OnInit {

  constructor(
    private location : Location
  ) { }

  ngOnInit(): void {
  }


     goBack() {
this.location.back()
     }


     postPerformanceNotifincation(performanceNotification:any){

     }

}
