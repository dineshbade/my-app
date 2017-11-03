import { User } from '../../model/user';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
   constructor(private _apiService:ApiService) { }

  registerUser(user):Observable<User>{
    console.log(user);
    return this._apiService.post('/user',user)
    .map(
      result=>{
        return result.data;
      });
  
  }
  

  getTotalUser():Observable<number>{
  	return this._apiService.get('/countUser')
  	.map(result=>{

      debugger;
  		console.log(result);
  		return result.data;
  		});
  }
}
