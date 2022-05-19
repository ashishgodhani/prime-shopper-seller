import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/classes/Feedback';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedbacks : Array<Feedback> = []
  constructor(
    private dataService : DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('Feedback')
    this.loadFeedback()
  }

  loadFeedback(){
    this.dataService.__post('',{})
    .subscribe(
      (feedbacks:Array<any>)=>{
        feedbacks.map((feedback:any)=>{
          this.feedbacks.push(new Feedback({
            _id:feedback._id,
            date: feedback.date,
            rating: feedback.rating,
            orderId : feedback.orderId,
            comments: feedback.comments,
          }))
        })

      },
      (error)=>{
        this.dataService.showAlert('error','Error',error)
      }
    )
  }

}
