import {NgModule} from '@angular/core';

import { AuthGuard } from '../../common/service/auth.guard';
import { AuthService } from '../../common/service/authService';

import { UserProfileComponent } from './user-profile.component';
import { UserProfileRouting  } from './user-profile.routing';


@NgModule({
imports :[ UserProfileRouting],
declarations :[ UserProfileComponent],
providers: [AuthGuard]
})

export class UserProfileModule{}