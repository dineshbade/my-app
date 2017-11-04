import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	
  constructor() { }

  ngOnInit() {
  	this.pageTitle = 'User Profile';
  }

}
