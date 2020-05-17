import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  role : String ="";
  password : String="";

  constructor() { }

  ngOnInit(): void {
  }
  


  onSubmit(e){
    console.log("submitted");
    var credentials = {
      Role : e.value.Role,
      Password : e.value.Password

    }
    console.log(credentials);
    
    
  }

}
