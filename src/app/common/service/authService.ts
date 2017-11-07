
import {User} from '../../model/user';
import {ApiService} from './api.service';
import {JwtService} from './jwt.service';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt'
import 'rxjs/add/operator/distinctUntilChanged';


@Injectable()
export class AuthService {
 private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
 constructor(
    private apiService: ApiService,
    private http: Http,
    private jwtService: JwtService) {}

  attemptAuth(user): Observable<User> {
    console.log(user);
    return this.apiService.post('/login', user)
      .map(
      result => {

        this.setAuth(result.data);
        return result.data;
      })

  }

  setAuth(user: any) {
    //Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
     // Set current user data into observable
     debugger;
    this.currentUserSubject.next(user);
      this.currentUser.subscribe((userdata)=>console.log(userdata));
  }

 getCurrentUser():User {

    return this.currentUserSubject.value;
  }
  isLoggedIn() {
    if (this.jwtService.getToken()) {
      let jwt = this.jwtService.getToken();
      let jwtHelper = new JwtHelper();
      let isExpired = jwtHelper.isTokenExpired(<string>jwt);


      return (!isExpired);
    }
    else {
      return false;
    }
  }
}
