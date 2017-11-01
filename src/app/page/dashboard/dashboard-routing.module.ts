import { AuthGuard } from '../../common/service/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const dashboardRoutes: Routes = [
  {
     path: '',
     component: DashboardComponent
    
   }
  ];


@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ], exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
