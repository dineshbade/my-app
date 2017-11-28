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
  	return this._apiService.get('/api/countUser',null)
  	.map(result=>{

     
  		return result.data;
  		});
  }

  getAllUser():Observable<User[]>{
    debugger;
    return this._apiService.get('/api/users',null).map(
      result=>{ 
     
        return result
      },
      error=>console.log(error))
  }

  getUserById(userId:number):Observable<User>{
    return this._apiService.get('/api/users/'+userId,null)
                            .map((result:User)=>{return result});
  }


  updateProfilePicture(formData:any,userId:number){
      this._apiService.postFormData('/api/userProfilePicture/'+userId,formData).subscribe((result)=>{
        debugger;
        console.log(result);
      })
  }
}
