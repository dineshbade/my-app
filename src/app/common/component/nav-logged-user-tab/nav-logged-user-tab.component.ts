import { AuthService } from '../../service/authService';
import { JwtService } from '../../service/jwt.service';
import { User } from '../../../model/user';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-logged-user-tab',
  templateUrl: './nav-logged-user-tab.component.html',
  styleUrls: ['./nav-logged-user-tab.component.css'],
  providers: [JwtService]
})
export class NavLoggedUserTabComponent implements OnInit {
    currentUser:User;
  constructor(private _jwtService: JwtService,
    private authService:AuthService,
  private _router:Router
) { }

  ngOnInit() {
     debugger;
    console.log(this._jwtService.getLoggedUser());
   this.currentUser=this._jwtService.getLoggedUser();
 // this.authService.currentUser.subscribe((data)=>{
 //   console.log(data);
 //   this.currentUser=data;
  
 // })
 console.log(this.currentUser);

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
