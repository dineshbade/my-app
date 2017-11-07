import {NgModule} from '@angular/core';

import { AuthGuard } from '../../common/service/auth.guard';
import { AuthService } from '../../common/service/authService';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './user-list.component';
import { UserProfileRouting  } from './user-list.routing';
import {CommonModule} from '@angular/common';
@NgModule({
imports :[ UserProfileRouting,CommonModule ],
declarations :[ UserListComponent],
providers: [AuthGuard]
})

export class UserListModule{}