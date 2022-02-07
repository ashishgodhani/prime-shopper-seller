import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { AccountHealthComponent } from './account-health/account-health.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PerformanceNotificationsComponent } from './performance-notifications/performance-notifications.component';
import { VoiceCustomerComponent } from './voice-customer/voice-customer.component';
import { FeedbackAddComponent } from './feedback/feedback-add/feedback-add.component';
import { FormsModule } from '@angular/forms';
import { PerformanceNotificationAddComponent } from './performance-notifications/performance-notification-add/performance-notification-add.component';
import { VoiceCusomerAddComponent } from './voice-customer/voice-cusomer-add/voice-cusomer-add.component';


@NgModule({
  declarations: [
    AccountHealthComponent,
    FeedbackComponent,
    PerformanceNotificationsComponent,
    VoiceCustomerComponent,
    FeedbackAddComponent,
    PerformanceNotificationAddComponent,
    VoiceCusomerAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerformanceRoutingModule
  ]
})
export class PerformanceModule { }
