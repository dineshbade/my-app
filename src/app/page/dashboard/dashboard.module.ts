
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {NgModule} from '@angular/core';
import { RegisterUserTabComponent } from '../../common/component/register-user-tab/register-user-tab.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RegisterUserTabComponent
   
  ],
  imports: [
    DashboardRoutingModule
   
    ],
  providers: [],
})
export class DashboardModule {}
