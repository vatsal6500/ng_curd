import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});  
  userId: any;
  userDetails: any;

  constructor(private formBuilder: FormBuilder, 
    private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {

    this.addUserForm = this.formBuilder.group({
      'name' : new FormControl('',[Validators.required,Validators.minLength(2)]),
      'gender' : new FormControl('',[Validators.required]),
      'age' : new FormControl('',[Validators.required,Validators.max(100),Validators.min(18)]),
    });
  }

  createUser(){
    // console.log(this.addUserForm.value);
    this.userService.addUser(this.addUserForm.value).subscribe(data => {
      console.log("User Created");
      this.router.navigate(['list']);
    },err => {
      console.log(err); 
    })
  }

}
