import { Component, Input, ElementRef, ViewChild,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { User } from '../../../model/user';

import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {
  @Input()
  user:any;
  profilePicturePath:String;

 form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder,private _userService:UserService) {
    this.createForm();
    
  }
    ngAfterViewChecked() {

   
   this.profilePicturePath= this.user.profilePicture.thumbnailPath;
  }
 ngOnInit() {
  
  }
createForm() {
    this.form = this.fb.group({
      
      avatar: null
    });
  }

 showFileUploader(fileUpload){
  		fileUpload.click();
  }
  onFileChange(event) {
  	debugger;
    if(event.target.files.length > 0) {

      let file = event.target.files[0];
      let formData = new FormData();
      formData.append("file",file);
      this._userService.updateProfilePicture(formData,this.user.userId);
    /*  this.form.get('avatar').setValue(file);*/
    }
  }

  private prepareSave(): any {
    let input = new FormData();
    input.append('avatar', this.form.get('avatar').value);
    return input;
  }

  onSubmit() {
  	debugger;
    const formModel = this.prepareSave();
    this.loading = true;
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

 

}
