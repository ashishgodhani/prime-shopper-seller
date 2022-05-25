import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MessageComponent } from './message/message/message.component';
import { CatalogueModule } from './catalogue/catalogue.module';
import { InventoryModule } from './inventory/inventory.module';
import { PricingModule } from './pricing/pricing.module';
import { OrdersModule } from './orders/orders.module';
import { AdvertisingModule } from './advertising/advertising.module';
import { ReportsModule } from './reports/reports.module';
import { PerformanceModule } from './performance/performance.module';
import { DashboardSalesChartComponent } from './dashboard/dashboard-sales-chart/dashboard-sales-chart.component';
import { StatisticsCardComponent } from './dashboard/statistics-card/statistics-card.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProfileModule } from './profile/profile.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DefaultLayoutComponent,
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    ForgetPasswordComponent,
   
    ResetPasswordComponent,
        MessageComponent,
        DashboardSalesChartComponent,
        StatisticsCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CatalogueModule,
    InventoryModule,
    PricingModule,
    OrdersModule,
    AdvertisingModule,
    ReportsModule,
    PerformanceModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    ProfileModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
