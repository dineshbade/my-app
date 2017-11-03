import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';

const userProfileRoute:Routes=[
	{		
		path:'',
		component :UserProfileComponent

		}	
];

@NgModule({
	imports:[ RouterModule.forChild(userProfileRoute)],
	exports:[RouterModule]
})


export class UserProfileRouting{}