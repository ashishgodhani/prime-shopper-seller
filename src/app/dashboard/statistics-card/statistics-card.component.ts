import { Component, OnInit } from '@angular/core';
import {StatisticsCard} from './statistics-card.model'

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.css'],
  providers: [StatisticsCard]
 
})
export class StatisticsCardComponent implements OnInit {
  StatisticsData:Array<any>=[]
  constructor(
    private statisticsCard: StatisticsCard 
  ) { }

  ngOnInit(): void {
    this.StatisticsData= this.statisticsCard.Statistics
   
    
  }


 

}
