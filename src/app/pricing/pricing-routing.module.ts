import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { FeeDiscountAddComponent } from './fee-discount/fee-discount-add/fee-discount-add.component';
import { FeeDiscountComponent } from './fee-discount/fee-discount.component';
import { FixPriceAlertsAddComponent } from './fix-price-alerts/fix-price-alerts-add/fix-price-alerts-add.component';
import { FixPriceAlertsComponent } from './fix-price-alerts/fix-price-alerts.component';
import { ManagePriceAddComponent } from './manage-pricing/manage-price-add/manage-price-add.component';
import { ManagePricingComponent } from './manage-pricing/manage-pricing.component';
import { AddPricingHealthComponent } from './pricing-health/add-pricing-health/add-pricing-health.component';
import { PricingHealthComponent } from './pricing-health/pricing-health.component';

const routes: Routes = [
  {
    path:'pricing',
    component:DefaultLayoutComponent,
    children:[
      {
        path:'health',
        component:PricingHealthComponent
      },
      {
        path:'health/add',
        component:AddPricingHealthComponent
      },
      {
        path:'manage',
        component:ManagePricingComponent
      },
      {
        path:'fixprice/alerts',
        component:FixPriceAlertsComponent
      },
      {
        path:'fixprice/alerts/add',
        component:FixPriceAlertsAddComponent
      },
      {
        path:'fee/discount',
        component:FeeDiscountComponent
      },
      {
        path:'fee/discount/add',
        component:FeeDiscountAddComponent
      },
      {
        path:'manage/add',
        component:ManagePriceAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingRoutingModule { }
