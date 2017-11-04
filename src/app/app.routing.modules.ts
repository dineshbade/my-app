
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthGuard } from './common/service/auth.guard';

const  appRoutes: Routes =[
{
	path: '',
	loadChildren:'./page/page.module#PageModule'
	 
},
		
		{	path:'signup',
			component: RegistrationComponent
			},
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path:'**',
				component:PageNotFoundComponent
			}
];

@NgModule({
	imports:[
		RouterModule.forRoot(appRoutes,{enableTracing:true}
			)
	],
	exports:[
	RouterModule
	]
})

export class AppRoutingModule {}