import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { OrderReportsComponent } from './order-reports/order-reports.component';
import { UploadOrderRelatedFilesComponent } from './upload-order-related-files/upload-order-related-files.component';
import { ManageReturnsComponent } from './manage-returns/manage-returns.component';
import { OrderReportsAddComponent } from './order-reports/order-reports-add/order-reports-add.component';


@NgModule({
  declarations: [
    ManageOrdersComponent,
    OrderReportsComponent,
    UploadOrderRelatedFilesComponent,
    ManageReturnsComponent,
    OrderReportsAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
