import { Component, OnInit } from '@angular/core';
import { InventoryReport } from 'src/app/classes/InventoryReport';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-inventory-reports',
  templateUrl: './inventory-reports.component.html',
  styleUrls: ['./inventory-reports.component.css'],
})
export class InventoryReportsComponent implements OnInit {
  inventoryReports: Array<InventoryReport> = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.setTitle('Inventory-Reports');
  }

  loadInventoryReports() {
    this.dataService.__post('', {}).subscribe((reports: Array<any>) => {
      reports.map((report: any) => {
        this.inventoryReports.push(
          new InventoryReport({
            _id: report._id,
            reportType: report.reportType,
            batchId: report.batchId,
            dateAndTimeRequested: report.dateAndTimeRequested,
            dateTimeCompleted: report.dateTimeCompleted,
            reportStatus: report.reportStatus,
          })
        );
      });
    });
  }
}
