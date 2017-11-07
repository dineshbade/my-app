import { Component, OnInit } from '@angular/core';
import { UserService } from '../../common/service/user.service';
import { User } from '../../model/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
		userList:User[];
  constructor(private _userService:UserService) { }

  ngOnInit() {
  	this._userService.getAllUser().subscribe(
  		(data)=>{
  			debugger;
  			console.log(data)
  			this.userList=data;
  		});
  		console.log(this.userList);
  }

}
