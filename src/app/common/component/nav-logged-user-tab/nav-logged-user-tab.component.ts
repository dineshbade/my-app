import { AuthService } from '../../service/authService';
import { JwtService } from '../../service/jwt.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-logged-user-tab',
  templateUrl: './nav-logged-user-tab.component.html',
  styleUrls: ['./nav-logged-user-tab.component.css'],
  providers: [JwtService,AuthService]
})
export class NavLoggedUserTabComponent implements OnInit {

  constructor(private _jwtService: JwtService,
    private authService:AuthService,
  private _router:Router) { }

  ngOnInit() {
  }

  
  logOut(){
   debugger;
    this._jwtService.destroyToken();
    this._router.navigateByUrl('/login');
  }
}
