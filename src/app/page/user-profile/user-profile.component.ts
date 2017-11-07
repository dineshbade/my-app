import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { ActivatedRoute,  ActivatedRouteSnapshot } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	
  constructor() { }


  ngOnInit() {
 /*console.log(this._route.paramMap.get('id'));*/
  	
  	 }

}
