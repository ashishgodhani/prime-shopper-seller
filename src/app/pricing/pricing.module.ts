import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingHealthComponent } from './pricing-health/pricing-health.component';
import { ManagePricingComponent } from './manage-pricing/manage-pricing.component';
import { FixPriceAlertsComponent } from './fix-price-alerts/fix-price-alerts.component';
import { FeeDiscountComponent } from './fee-discount/fee-discount.component';
import { AddPricingHealthComponent } from './pricing-health/add-pricing-health/add-pricing-health.component';
import { ManagePriceAddComponent } from './manage-pricing/manage-price-add/manage-price-add.component';
import { FixPriceAlertsAddComponent } from './fix-price-alerts/fix-price-alerts-add/fix-price-alerts-add.component';
import { FeeDiscountAddComponent } from './fee-discount/fee-discount-add/fee-discount-add.component';


@NgModule({
  declarations: [
    PricingHealthComponent,
    ManagePricingComponent,
    FixPriceAlertsComponent,
    FeeDiscountComponent,
    AddPricingHealthComponent,
    ManagePriceAddComponent,
    FixPriceAlertsAddComponent,
    FeeDiscountAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
