import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  userId:string = '';
  constructor(private activatedRoute:ActivatedRoute,
    private userService: UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    });

    if(this.userId){
      if(confirm('Are You Sure?')){
        this.userService.deleteUser(this.userId).subscribe(data => {
          console.log("Data Deleted");
          this.router.navigate(['list']);
        },err => {
          console.log(err);
        })
      }
      else{
        this.router.navigate(['list']);
      }
    }
  }

}
