import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api:string = 'http://localhost:6969/';
  isImageLoading: any;
  imageService: any;
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get(this.api + 'user');
  }

  viewuser(id: string){
    return this.http.get(this.api + 'user/' + id);
  }

  addUser(userObj:any){
    return this.http.post(this.api + 'user/add',userObj);
  }

  deleteUser(id: string){
    return this.http.get(this.api + 'user/delete/' + id);
  }
}
