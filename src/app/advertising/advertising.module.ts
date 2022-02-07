import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertisingRoutingModule } from './advertising-routing.module';
import { CampaignManagerComponent } from './campaign-manager/campaign-manager.component';
import { AContentManagerComponent } from './a-content-manager/a-content-manager.component';
import { DealsComponent } from './deals/deals.component';
import { PrimeExclusiveDiscountsComponent } from './prime-exclusive-discounts/prime-exclusive-discounts.component';
import { PromotionsComponent } from './promotions/promotions.component';


@NgModule({
  declarations: [
    CampaignManagerComponent,
    AContentManagerComponent,
    DealsComponent,
    PrimeExclusiveDiscountsComponent,
    PromotionsComponent,
  ],
  imports: [
    CommonModule,
    AdvertisingRoutingModule
  ]
})
export class AdvertisingModule { }
