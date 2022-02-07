import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CompleteDraftsComponent } from './complete-drafts/complete-drafts.component';
import { SellingApplicationComponent } from './selling-application/selling-application.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { AddSellingApplicationComponent } from './selling-application/add-selling-application/add-selling-application.component';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    CompleteDraftsComponent,
    SellingApplicationComponent,
    ProductsComponent,
    EditProductComponent,
    AddProductComponent,
    AddSellingApplicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDropzoneModule,

    HttpClientModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
