import { Component, OnInit } from '@angular/core';
import { CustomReport } from 'src/app/classes/CustomReport';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-customer-reports',
  templateUrl: './customer-reports.component.html',
  styleUrls: ['./customer-reports.component.css']
})
export class CustomerReportsComponent implements OnInit {
customReports : Array<CustomReport> = []
  constructor(
    private dataService : DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle('Custom Reports')
    this.loadCustomReports()
  }


  loadCustomReports(){
    this.dataService.__post('',{})
    .subscribe(
      (reports:Array<any>)=>{
        reports.map((customReport:any)=>{
          this.customReports.push(new CustomReport({
            _id:customReport._id,
            name: customReport.name,
            segment:customReport.segment,
            dateFrom: customReport.dateFrom,
            dateTo: customReport.dateTo,
            generatedOn : customReport.generatedOn,
            notes:customReport.notes,
          }))
        })
      },
      (error)=>{
        this.dataService.showAlert('error','Error',error)
      }
    )
  }
}
