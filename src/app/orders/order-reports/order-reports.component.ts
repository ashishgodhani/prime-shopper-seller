import { Component, OnInit } from '@angular/core';
import { OrderReports } from 'src/app/classes/OrderReports';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-order-reports',
  templateUrl: './order-reports.component.html',
  styleUrls: ['./order-reports.component.css'],
})
export class OrderReportsComponent implements OnInit {
  orderReports: Array<OrderReports> = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.setTitle('Order-Reports');
    this.loadOrderReports();
  }

  loadOrderReports() {
    this.dataService.__post('', {}).subscribe(
      (oderReports: Array<any>) => {
        oderReports.map((orderReport: any) => {
          this.orderReports.push(
            new OrderReports({
              _id: orderReport._id,
              repoertType: orderReport.repoertType,
              batchId: orderReport.batchId,
              dateAndTimeRequested: orderReport.dateAndTimeRequested,
              dateRangeCovered: orderReport.dateRangeCovered,
              reportStatus: orderReport.reportStatus,
            })
          );
        });
      },
      (error) => {
        this.dataService.showAlert('error', 'Error', error);
      }
    );
  }
}
