
import {User} from '../../model/user';
import {ApiService} from './api.service';
import {JwtService} from './jwt.service';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt'

@Injectable()
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  constructor(
    private apiService: ApiService,
    private http: Http,
    private jwtService: JwtService) {}

  attemptAuth(user): Observable<User> {
    console.log(user);
    return this.apiService.post('/login', user)
      .map(
      result => {

        this.setAuth(result.data.token);
        return result.data;
      })

  }

  setAuth(token: string) {
    //Save JWT sent from server in localstorage
    this.jwtService.saveToken(token);
     // Set current user data into observable
/*    this.currentUserSubject.next(user);
*/
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
