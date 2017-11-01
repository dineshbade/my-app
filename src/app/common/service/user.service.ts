import { User } from '../../model/user';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  
}
