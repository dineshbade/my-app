import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { NgModule } from '@angular/core';
import { AuthGuard} from '../common/service/auth.guard'


const pageRoute:Routes = [
{
	path:'',
	component: PageComponent,
	canActivate :[AuthGuard],
	children:[
	{
		path:'dashboard',
		loadChildren:'./dashboard/dashboard.module#DashboardModule'
	},{
		path: 'user-profile/:id',
		loadChildren: './user-profile/user-profile.module#UserProfileModule'
	},
	{
		path:'user-list',
		loadChildren: './user-list/user-list.module#UserListModule'
	},
	{
		path:'admin-user-registration',
		loadChildren: './admin-user-registration/admin-user-registration.module#AdminUserRegistrationModule'
	}
	
		
	]
}
	


	
];
@NgModule({
    imports: [RouterModule.forChild(pageRoute)],
    exports: [RouterModule]
})
export class PageRoutingModule{}