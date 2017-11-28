import { Injectable } from '@angular/core';

import {ApiService} from './api.service';
import {Program } from '../../model/program.model';
import { Observable } from 'rxjs';


@Injectable()
export class ProgramService {

  constructor(private _apiService : ApiService) { }

 addProgram(program:Program):Observable<Program>{

 	return this._apiService.post('/api/program',program).map(result=>{return result.data});
 }

getAllPrograms():Observable<Program[]>{
	return this._apiService.get('/api/programs').map(result=>{return result.data});

}
}
