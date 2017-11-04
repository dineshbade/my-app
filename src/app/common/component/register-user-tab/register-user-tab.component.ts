import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register-user-tab',
  templateUrl: './register-user-tab.component.html',
  styleUrls: ['./register-user-tab.component.css'],
  providers: [UserService]
})
export class RegisterUserTabComponent implements OnInit {
	 totalUser:number;
  constructor(private _userService:UserService) { }

  ngOnInit() {
  		this.getUserCount();
  }


getUserCount(){
		this._userService.getTotalUser()
		.subscribe(data=>{
			this.totalUser=data

			debugger;},
			err=>console.log(err));

}



}
