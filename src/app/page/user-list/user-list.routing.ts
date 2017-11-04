import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list.component';

const userListRoute:Routes=[
	{		
		path:'',
		component :UserListComponent

		}	
];

@NgModule({
	imports:[ RouterModule.forChild(userListRoute)],
	exports:[RouterModule]
})


export class UserProfileRouting{}