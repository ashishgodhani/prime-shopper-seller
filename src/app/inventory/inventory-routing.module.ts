import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { AddProductsViaUploadComponent } from './add-products-via-upload/add-products-via-upload.component';
import { AddImproveListingQualityComponent } from './improve-listing-quality/add-improve-listing-quality/add-improve-listing-quality.component';
import { ImproveListingQualityComponent } from './improve-listing-quality/improve-listing-quality.component';
import { AddInventoryReportsComponent } from './inventory-reports/add-inventory-reports/add-inventory-reports.component';
import { InventoryReportsComponent } from './inventory-reports/inventory-reports.component';
import { AddManageInventoryComponent } from './manage-inventory/add-manage-inventory/add-manage-inventory.component';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { UploadManageVideosComponent } from './upload-manage-videos/upload-manage-videos.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path:'inventory',
    component:DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'manage/inventory',
        component:ManageInventoryComponent
      },
     
      {
        path:'improve/listing/quality',
        component:ImproveListingQualityComponent
      },
      {
        path:'improve/listing/quality/add',
        component:AddImproveListingQualityComponent
      },
      {
        path:'product/add',
        component:ProductAddComponent,
        pathMatch:'full'
      },
      {
        path:'productsviaupload/add',
        component:AddProductsViaUploadComponent
      },
      {
        path:'inventory/reports',
        component:InventoryReportsComponent
      },
      {
        path:'images/upload',
        component:UploadImagesComponent
      },
      {
        path:'upload/managevideos',
        component:UploadManageVideosComponent
      },
      {
        path:'manage/inventory/add',
        component:AddManageInventoryComponent
      },
      {
        path:'inventory/reports/add',
        component:AddInventoryReportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
