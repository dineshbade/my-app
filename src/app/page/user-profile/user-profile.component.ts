import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
	 id: number;
  private sub: any;

 
  constructor(private _route:ActivatedRoute) { }


  ngOnInit() {
 this.sub = this._route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });	
 	console.log(this.id);
     }

}
