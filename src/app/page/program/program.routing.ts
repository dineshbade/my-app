import {NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import {ProgramComponent } from './program.component';

const programRoute:Routes =[{
	path:'',
	component: ProgramComponent

}];

@NgModule({

	imports:[
	RouterModule.forChild(programRoute)],
	exports:[
	RouterModule]
})
export class ProgramRoute{}