import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { AContentManagerComponent } from './a-content-manager/a-content-manager.component';
import { CampaignManagerComponent } from './campaign-manager/campaign-manager.component';
import { DealsComponent } from './deals/deals.component';
import { PrimeExclusiveDiscountsComponent } from './prime-exclusive-discounts/prime-exclusive-discounts.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {
    path:'advertising',
    component:DefaultLayoutComponent,
    children:[
      {
        path:'campaign/manager',
        component:CampaignManagerComponent
      },
      {
        path:'content/manager',
        component:AContentManagerComponent
      },
      {
        path:'deals',
        component:DealsComponent
      },
      {
        path:'primeexclusivediscounts',
        component:PrimeExclusiveDiscountsComponent
      },
      {
        path:'promotions',
        component:PromotionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisingRoutingModule { }
