import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-otplogin',
  templateUrl: './otplogin.component.html',
  styleUrls: ['./otplogin.component.css']
})
export class OtploginComponent implements OnInit  {
  public role = undefined;
  public password;
  constructor(private router: Router,
              private aut: AuthenticateService) { }

  ngOnInit(): void {
  }


  onSubmit(e) {
    console.log('submitted Login Credentials');
    const credentials = {
      Role : e.value.role,
      Password : e.value.password
      };
    console.log(credentials);
    if ((e.value.role == 'Teacher' && e.value.password == 'pass1') || (e.value.role == 'Student' && e.value.password == 'pass2') ) {
      this.router.navigate(['portal']);
      this.aut.putuser(credentials.Role);
    } else {
      alert('Password incorrect');
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
