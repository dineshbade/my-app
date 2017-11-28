import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../common/service/user.service';
import { User } from '../../model/user';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {
	 id: number;
  private sub: any;
  user:User;
  rDate :Date;
 
  constructor(private _route:ActivatedRoute,
              private _userService:UserService) { }


  ngOnInit() {
 this.sub = this._route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });	
 	console.log(this.id);

   this._userService.getUserById(this.id)
                     .subscribe(data=>{
                    
                          this.rDate= new Date(data.registrationDate) ;
                       this.user=data;
                       console.log(this.user);
                       debugger;
                    })

    }

}
