
import { AuthGuard } from '../../common/service/auth.guard';
import { AuthService } from '../../common/service/authService';
import { SideNavComponent } from '../../side-nav/side-nav.component';
import { TopNavModule } from '../../top-nav/top-nav.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {NgModule} from '@angular/core';



@NgModule({
  declarations: [
    DashboardComponent
    
   
  ],
  imports: [

    DashboardRoutingModule
   
    ],
  providers: [AuthGuard],
})
export class DashboardModule {}
