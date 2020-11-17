import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  UserloggedIn;

  constructor(private http: HttpClient) { }
  putuser(inp) {
    this.UserloggedIn = inp;
  }
  getuser() {
    return this.UserloggedIn;
  }

  submitnomin(inpobj) {
    // used to submit candidate names for first time
    console.log(inpobj);
    return this.http.post('http://localhost:3000/api/customize/red', inpobj);
  }
  submitnominYellow(inpobj) {
    // used to submit candidate names for first time
    console.log(inpobj);
    return this.http.post('http://localhost:3000/api/customize/yellow', inpobj);
  }
}
