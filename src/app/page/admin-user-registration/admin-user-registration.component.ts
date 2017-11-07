import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  EmailValidator,
  NgForm,
  Validator
} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CommonModule} from '@angular/common'
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../../common/service/user.service';

import { User } from '../../model/user';
import { Authority } from '../../model/authorities';


@Component({
  selector: 'app-admin-user-registration',
  templateUrl: './admin-user-registration.component.html',
  styleUrls: ['./admin-user-registration.component.css'],
  providers :[UserService]
})
export class AdminUserRegistrationComponent implements OnInit {
succesRegistration: string;
  userRegistrationForm: FormGroup;
 
  constructor(private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _userService: UserService  ) { }
fullName = new FormControl('', [
    Validators.required
  ]);
  email = new FormControl('', [
    Validators.required]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  passwords = this._formBuilder.group({
    password: this.password,
    confirmPassword: this.confirmPassword
  })
  ngOnInit() {
  	 this.userRegistrationForm = this._formBuilder.group({
      fullName: this.fullName,
      email: this.email,
      passwords: this.passwords,

    })
  }


register() {
    console.log(this.userRegistrationForm.value)
    const credentials = this.userRegistrationForm.value;
    let u = new User();
    let fullName = this.userRegistrationForm.value['fullName'];
    let fullNameArr: string[] = fullName.split(" ");

    u.FirstName = fullNameArr[0];
    u.LastName = fullNameArr[1];
    u.Email = this.userRegistrationForm.value['email'];
    debugger;
    u.Password = this.userRegistrationForm.value['passwords']['password'];
    u.Enabled = true;
    let authority = new Authority();
      authority.Id=2;
     let authorities:Array<Authority>= new Array<Authority>();
     authorities.push(authority);

     u.Authorities=authorities;
    this._userService.registerAdminUser(u)
      .subscribe(
      data => {
       /* this.router.navigateByUrl('/login')*/
       console.log(data);
        this.succesRegistration = 'Registration Successful';
      },
      err => {
        console.log(err);
      })
  }
}
