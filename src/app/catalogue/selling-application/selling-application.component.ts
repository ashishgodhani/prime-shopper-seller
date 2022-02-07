import { Component, OnInit } from '@angular/core';
import { SellingApplication } from 'src/app/classes/SellingApplication';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-selling-application',
  templateUrl: './selling-application.component.html',
  styleUrls: ['./selling-application.component.css'],
})
export class SellingApplicationComponent implements OnInit {
  sellingApplications: Array<SellingApplication> = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.setTitle('Selling-Application');
    this.loadSellingApplication();
  }

  loadSellingApplication() {
    this.dataService.__post('', {}).subscribe(
      (sellingApplications: Array<any>) => {
        sellingApplications.map((sellingApplication: any) => {
          this.sellingApplications.push({
            _id: sellingApplication._id,
            applicationName: sellingApplication.name,
            applicationType: sellingApplication.type,
          });
        });
      },
      (error) => {
        this.dataService.showAlert('error', 'Error', error);
      }
    );
  }
}
