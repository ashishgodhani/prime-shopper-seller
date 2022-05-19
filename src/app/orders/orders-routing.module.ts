import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageReturnsComponent } from './manage-returns/manage-returns.component';
import { OrderReportsAddComponent } from './order-reports/order-reports-add/order-reports-add.component';
import { OrderReportsComponent } from './order-reports/order-reports.component';
import { UploadOrderRelatedFilesComponent } from './upload-order-related-files/upload-order-related-files.component';

const routes: Routes = [
  {
    path:'order',
    component:DefaultLayoutComponent,
    children:[
      {
        path:'manage-orders',
        component:ManageOrdersComponent,
      },
      {
        path:'reports',
        component:OrderReportsComponent
      },
      {
        path:'reports/add',
        component:OrderReportsAddComponent
      },
      {
        path:'upload/file',
        component:UploadOrderRelatedFilesComponent
      },
      {
        path:'manage/returns',
        component:ManageReturnsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
