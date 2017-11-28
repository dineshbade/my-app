import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../../common/service/program.service';
import{ Program } from '../../model/program.model';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css'],
  providers:[ProgramService]
})
export class ProgramComponent implements OnInit {
		programs:Program[];
  constructor(private _programService:ProgramService) { }

  ngOnInit() {

  	this.getAllPrograms();

  }

   getAllPrograms(){
   	 this._programService.getAllPrograms()
   	 .subscribe(data=>{
   	 	this.programs=data;

   	 })


  }

  addProgram(program:string){
  	let programs = new Program();
  	debugger;
  	console.log(program);
  	programs.ProgramName=program;
  	/*this._programService.addProgram(programs)
  	.subscribe(result=>{
  		this.programs.push(result)
  	})*/
  	
  }



}
