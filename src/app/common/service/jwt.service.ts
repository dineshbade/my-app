import { Injectable } from '@angular/core';
import { User } from '../../model/user';

@Injectable()
export class JwtService {
	getLoggedUser(){
    
  
		return JSON.parse(window.localStorage['logged-user']);
	}

	saveLoggedUser(user){
		window.localStorage['logged-user']=user;
	}

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('logged-user');
  }
}
