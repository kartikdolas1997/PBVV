import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    console.log(inpobj);
    return this.http.post(environment.apiUrl + '/api/customize/red', inpobj);
  }
  submitnominYellow(inpobj) {
    console.log(inpobj);
    return this.http.post(environment.apiUrl + '/api/customize/yellow', inpobj);
  }
  submitnominBlue(inpobj) {
    console.log(inpobj);
    return this.http.post(environment.apiUrl + '/api/customize/blue', inpobj);
  }
  submitnominGreen(inpobj) {
    console.log(inpobj);
    return this.http.post(environment.apiUrl + '/api/customize/green', inpobj);
  }
}
