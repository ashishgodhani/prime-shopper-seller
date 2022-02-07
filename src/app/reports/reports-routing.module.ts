import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { BusinessReportsComponent } from './business-reports/business-reports.component';
import { CustomerReportsAddComponent } from './custom-reports/customer-reports-add/customer-reports-add.component';
import { CustomerReportsComponent } from './custom-reports/customer-reports.component';
import { PaymentsComponent } from './payments/payments.component';
import { RetrunReportsComponent } from './retrun-reports/retrun-reports.component';
import { TaxDocumentLibraryComponent } from './tax-document-library/tax-document-library.component';

const routes: Routes = [
  {
    path:'reports',
    component:DefaultLayoutComponent,
    children:[
      {
        path:'payments',
        component:PaymentsComponent
      },
      {
        path:'businessreports',
        component:BusinessReportsComponent
      },
      {
        path:'retrunreports',
        component:RetrunReportsComponent
      },
      {
        path:'customerreports',
        component:CustomerReportsComponent
      },
      {
        path:'customerreports/add',
        component:CustomerReportsAddComponent
      },
      {
        path:'tax/document/library',
        component:TaxDocumentLibraryComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
