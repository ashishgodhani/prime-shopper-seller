import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { ImproveListingQualityComponent } from './improve-listing-quality/improve-listing-quality.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { AddProductsViaUploadComponent } from './add-products-via-upload/add-products-via-upload.component';
import { InventoryReportsComponent } from './inventory-reports/inventory-reports.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { UploadManageVideosComponent } from './upload-manage-videos/upload-manage-videos.component';
import { AddManageInventoryComponent } from './manage-inventory/add-manage-inventory/add-manage-inventory.component';
import { FormsModule } from '@angular/forms';
import { AddImproveListingQualityComponent } from './improve-listing-quality/add-improve-listing-quality/add-improve-listing-quality.component';
import { AddInventoryReportsComponent } from './inventory-reports/add-inventory-reports/add-inventory-reports.component';
import {MatCardModule} from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductItemComponent } from './add-products-via-upload/product-item/product-item.component'

@NgModule({
  declarations: [
    ManageInventoryComponent,
    ImproveListingQualityComponent,
    ProductAddComponent,
    AddProductsViaUploadComponent,
    InventoryReportsComponent,
    UploadImagesComponent,
    UploadManageVideosComponent,
    AddManageInventoryComponent,
    AddImproveListingQualityComponent,
    AddInventoryReportsComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    NgxDropzoneModule,
    FormsModule,
    InventoryRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class InventoryModule { }
