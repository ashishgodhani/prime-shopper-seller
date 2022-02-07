import { Component, OnInit } from '@angular/core';
import { PerformanceNotification } from 'src/app/classes/PerformanceNotification';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-performance-notifications',
  templateUrl: './performance-notifications.component.html',
  styleUrls: ['./performance-notifications.component.css']
})
export class PerformanceNotificationsComponent implements OnInit {
  performanceNotifications :Array<PerformanceNotification> = []
  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('Performance Notifications')
   this.loadPerformanceNotifications()
   }

   loadPerformanceNotifications(){
     this.dataService.__post('',{})
     .subscribe(
       (performanceNotifications:Array<any>)=>{
        performanceNotifications.map((notification:any)=>{
          this.performanceNotifications.push(new PerformanceNotification({
            _id:notification._id,
            subject: notification.subject,
            date: notification.date,
          }))
        })

       },
       (error)=>{
         this.dataService.showAlert('error', 'Error',error)
       }
     )
   }

}
