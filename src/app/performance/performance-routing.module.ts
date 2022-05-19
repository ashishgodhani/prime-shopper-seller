import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../layout/default-layout/default-layout.component';
import { AccountHealthComponent } from './account-health/account-health.component';
import { FeedbackAddComponent } from './feedback/feedback-add/feedback-add.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PerformanceNotificationAddComponent } from './performance-notifications/performance-notification-add/performance-notification-add.component';
import { PerformanceNotificationsComponent } from './performance-notifications/performance-notifications.component';
import { VoiceCusomerAddComponent } from './voice-customer/voice-cusomer-add/voice-cusomer-add.component';
import { VoiceCustomerComponent } from './voice-customer/voice-customer.component';

const routes: Routes = [
  {
    path:'performance',
    component:DefaultLayoutComponent,
    children:[
      {
        path:'account/health',
        component:AccountHealthComponent
      },
      {
        path:'feedback',
        component:FeedbackComponent
      },
      {
        path:'feedback/add',
        component:FeedbackAddComponent
      },
      {
        path:'notifications',
        component:PerformanceNotificationsComponent
      },
      {
        path:'notifications/add',
        component:PerformanceNotificationAddComponent
      },
      {
        path:'customer',
        component:VoiceCustomerComponent,
      
      },
      {
        path:'customer/add',
        component:VoiceCusomerAddComponent,
      
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
