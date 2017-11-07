import { AuthService } from '../../service/authService';
import { JwtService } from '../../service/jwt.service';
import { User } from '../../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-logged-user-tab',
  templateUrl: './nav-logged-user-tab.component.html',
  styleUrls: ['./nav-logged-user-tab.component.css'],
  providers: [JwtService,AuthService]
})
export class NavLoggedUserTabComponent implements OnInit {
    currentUser:User;
  constructor(private _jwtService: JwtService,
    private authService:AuthService,
  private _router:Router) { }

  ngOnInit() {
   
 this.authService.currentUser.subscribe((user:User)=>{
     console.log(user);
   this.currentUser=user

 });
 console.log(this.currentUser);
  debugger;
 /*.
 subscribe((userData)=>{
   debugger;
   this.currentUser=userData})*/
 
  /*.subscribe(
      (userData) => {

        debugger;
        this.currentUser = userData;
      }
    )*/
  }

  
  logOut(){
   debugger;
    this._jwtService.destroyToken();
    this._router.navigateByUrl('/login');
  }
}
