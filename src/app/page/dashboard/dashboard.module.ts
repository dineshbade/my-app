
import { AuthGuard } from '../../common/service/auth.guard';
import { AuthService } from '../../common/service/authService';
import { SideNavComponent } from '../../side-nav/side-nav.component';
import { TopNavModule } from '../../top-nav/top-nav.module';
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
