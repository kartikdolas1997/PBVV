import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
UserloggedIn;
  constructor() { }
  putuser(inp) {
    this.UserloggedIn = inp;
  }
  getuser() {
    return this.UserloggedIn;
  }
}
