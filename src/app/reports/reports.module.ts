import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReportsRoutingModule } from './reports-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { BusinessReportsComponent } from './business-reports/business-reports.component';
import { RetrunReportsComponent } from './retrun-reports/retrun-reports.component';
import { CustomerReportsComponent } from './custom-reports/customer-reports.component';
import { TaxDocumentLibraryComponent } from './tax-document-library/tax-document-library.component';
import { CustomerReportsAddComponent } from './custom-reports/customer-reports-add/customer-reports-add.component';


@NgModule({
  declarations: [
    PaymentsComponent,
    BusinessReportsComponent,
    RetrunReportsComponent,
    CustomerReportsComponent,
    TaxDocumentLibraryComponent,
    CustomerReportsAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
