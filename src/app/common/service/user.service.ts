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

  registerAdminUser(user):Observable<User>{
    console.log(user);
    return this._apiService.post('/api/user',user)
    .map(
      result=>{
        return result.data;
      });
  
  }
  

  getTotalUser():Observable<number>{
  	return this._apiService.get('/api/countUser')
  	.map(result=>{

     
  		return result.data;
  		});
  }

  getAllUser():Observable<User[]>{
    debugger;
    return this._apiService.get('/api/users').map(
      result=>{
        debugger;
        console.log(result);
        return result
      },
      error=>console.log(error))
  }
}
