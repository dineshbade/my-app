import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../common/service/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    providers: [AuthService]

})
export class LoginComponent implements OnInit {

loginForm:FormGroup;
errors: string;
  constructor(private builder: FormBuilder,
         private router: Router,
          private _authService: AuthService) { }
username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  
  password = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  	this.loginForm = this.builder.group({
    username: this.username,
    password: this.password
  });
}
    login () {
 
    console.log(this.loginForm.value);
    
     console.log(JSON.stringify(this.loginForm.value));
                this._authService.attemptAuth(this.loginForm.value)
                  .subscribe(
                  data=> {  this.router.navigateByUrl('/dashboard'),
                   console.log(data);
                   
                  } , err => {
                    
                      this.errors = err.message;
      
                  })
    // Attempt Logging in...
  }

  
  }


