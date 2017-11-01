import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { NgModule } from '@angular/core';
import { AuthGuard} from '../common/service/auth.guard'


const pageRoute:Routes = [
{
	path:'',
	component: PageComponent,
	children:[
	{
		path:'dashboard',
		loadChildren:'./dashboard/dashboard.module#DashboardModule',
		canActivate: [AuthGuard]
	}
		
	]
}
	


	
];
@NgModule({
    imports: [RouterModule.forChild(pageRoute)],
    exports: [RouterModule]
})
export class PageRoutingModule{}