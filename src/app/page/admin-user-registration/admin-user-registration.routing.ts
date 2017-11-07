import { AuthGuard } from '../../common/service/auth.guard';
import { AdminUserRegistrationComponent } from './admin-user-registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const adminUserRegistrationRoute: Routes = [
  {
     path: '',
     component: AdminUserRegistrationComponent
    
   }
  ];


@NgModule({
  imports: [
    RouterModule.forChild(adminUserRegistrationRoute)
  ], exports: [
    RouterModule
  ]
})
export class AdminUserRegistrationRoutingModule {}
