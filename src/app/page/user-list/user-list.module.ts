import {NgModule} from '@angular/core';

import { AuthGuard } from '../../common/service/auth.guard';
import { AuthService } from '../../common/service/authService';

import { UserListComponent } from './user-list.component';
import { UserProfileRouting  } from './user-list.routing';


@NgModule({
imports :[ UserProfileRouting],
declarations :[ UserListComponent],
providers: [AuthGuard]
})

export class UserListModule{}