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


  onSubmit(e){
    console.log('submitted Login Credentials');
    const credentials = {
      Role : e.value.Role,
      Password : e.value.Password
      };
    console.log(credentials);
    this.router.navigate(['portal']);
  }

}
