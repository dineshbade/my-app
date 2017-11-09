import {NgModule} from '@angular/core';

import { AuthGuard } from '../../common/service/auth.guard';
import { AuthService } from '../../common/service/authService';
import { CommonModule } from '@angular/common';  

import { UserProfileComponent } from './user-profile.component';
import { UserProfileRouting  } from './user-profile.routing';
import { ProfilePictureComponent } from '../../common/component/profile-picture/profile-picture.component';
import {
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
@NgModule({
imports :[ 
			 UserProfileRouting,
			 ReactiveFormsModule,
			 FormsModule
			 ,CommonModule
			 ],

declarations :[ UserProfileComponent,ProfilePictureComponent],
providers: [AuthGuard]
})

export class UserProfileModule{}