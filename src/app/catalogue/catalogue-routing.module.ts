import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { CompleteDraftsComponent } from './complete-drafts/complete-drafts.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductsComponent } from './products/products.component';
import { AddSellingApplicationComponent } from './selling-application/add-selling-application/add-selling-application.component';
import { SellingApplicationComponent } from './selling-application/selling-application.component';

const routes: Routes = [
  {
    path:'catalogue',
    component:DefaultLayoutComponent,
    children:[
     {
      path:'products',
      component:ProductsComponent
     },
      {
        path:'drafts/complete',
        component:CompleteDraftsComponent
      },
      {
        path:'selling/application',
        component:SellingApplicationComponent
      },
      {
        path:'product/add',
        component:AddProductComponent
      },
      {
        path:'product/edit/:id',
        component:EditProductComponent
      },
      {
        path:'selling/application/add',
        component:AddSellingApplicationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
