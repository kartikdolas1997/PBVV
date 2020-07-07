import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // role: String = '';
  // password: String = '';
  public role;
  public password;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(e) {
    console.log('submitted Login Credentials');
    const credentials = {
      role : e.value.Role,
      password : e.value.Password
      };
    console.log(credentials);
    if ((this.role === 'Teacher' && this.password === 'pass1') || (this.role === 'Student' && this.password === 'pass2') ) {
      this.router.navigate(['portal']);
    } else {
      alert('Password incorrect');
      // write code to reset password
    }
  }

}
