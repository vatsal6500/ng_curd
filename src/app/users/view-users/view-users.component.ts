import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  userId: string = '';
  userDetails:any;
  constructor(private userServices: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    })

    console.log(this.userId);

    this.userServices.viewuser(this.userId).subscribe(data => {
      //console.log(data);
      this.userDetails = data;
    })

  }

}
