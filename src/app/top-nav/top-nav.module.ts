
import { NavLoggedUserTabComponent } from '../common/component/nav-logged-user-tab/nav-logged-user-tab.component';
import { NavLoggedUserTabModule } from '../common/component/nav-logged-user-tab/nav-logged-user-tab.module';

import { NgModule } from '@angular/core';

import { TopNavComponent } from './top-nav.component';

import { AuthService } from '../common/service/authService';
@NgModule({
  declarations:[TopNavComponent
  ],
  imports :[ NavLoggedUserTabModule],
  exports :[TopNavComponent],
  providers: [AuthService]
})

export class TopNavModule{}
