import { NgModule } from '@angular/core';
import {ProgramRoute } from './program.routing';
import { ProgramComponent } from './program.component';
import { ProgramService} from '../../common/service/program.service';
import { CommonModule } from '@angular/common';

@NgModule({

	declarations:[ProgramComponent],
	imports:[ProgramRoute,CommonModule],
	exports:[],
	providers:[ProgramService]
})

export class ProgramModule{

}