import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});  
  image: any;

  constructor(private formBuilder: FormBuilder, 
    private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'name' : new FormControl(''),
      'gender' : new FormControl(''),
      'age' : new FormControl(''),
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
