import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public role = undefined;
  public password;
  constructor(private router: Router,
              private aut: AuthenticateService) { }

  ngOnInit(): void {
  }


  onSubmit(e) {
    console.log('submitted Login Credentials');
    const credentials = {
      role : e.value.role,
      password : e.value.Password
      };
    console.log(credentials);
    if ((e.role === 'Teacher' && e.password === 'pass1') || (e.role === 'Student' && e.password === 'pass2') ) {
      this.router.navigate(['portal']);
      this.aut.putuser(this.role);
    } else {
      alert('Password incorrect');
      // write code to reset password
      this.ClearForm(e);
    }
  }

  btndisable(e) {
    if (e.valid) {
      return false;
    } else {
      return true;
    }
  }

  ClearForm(e) {
    e.resetForm();
  }

}
