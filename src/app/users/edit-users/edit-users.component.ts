import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  userId:any;
  userDetails:any;
  editUserForm : FormGroup = new FormGroup({});
  dataLoaded:boolean = false;
  constructor(private activatedrouter: ActivatedRoute,
    private userSerivce:UserService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedrouter.params.subscribe(data => {
      this.userId = data['id'];
    });

    if(this.userId){
      this.userSerivce.viewuser(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails = data;
        //Object.assign(this.userDetails,data);
        console.log(this.userDetails);
        //buils the form
        this.editUserForm = this.formBuilder.group({
          'name' : new FormControl(this.userDetails.name),
          'gender' : new FormControl(this.userDetails.gender),
          'age' : new FormControl(this.userDetails.age)
        })
        this.dataLoaded = true;
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  updateUser(){
    console.log(this.editUserForm.value);
  }

}
