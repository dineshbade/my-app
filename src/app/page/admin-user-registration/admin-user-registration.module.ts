
import { AuthGuard } from '../../common/service/auth.guard';
import { AuthService } from '../../common/service/authService';
/*import {Ad} from './admin-user-registration.routing';
*/import {AdminUserRegistrationComponent} from './admin-user-registration.component';
import {NgModule} from '@angular/core';
/*import { RegisterUserTabComponent } from '../../common/component/register-user-tab/register-user-tab.component';
*/
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

import {AdminUserRegistrationRoutingModule } from './admin-user-registration.routing';
import {ActivatedRoute, Router} from '@angular/router';
import {
  ReactiveFormsModule,
 FormsModule

} from '@angular/forms';

@NgModule({
  declarations: [
    AdminUserRegistrationComponent
    
   
  ],
  imports: [
  CommonModule,
  	ReactiveFormsModule,
  	FormsModule,

    AdminUserRegistrationRoutingModule
   
    ],
  providers: [],
})
export class AdminUserRegistrationModule {}
