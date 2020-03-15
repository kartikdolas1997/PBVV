import { Component, OnInit } from '@angular/core';
import {EportalService} from './eportal.service'

@Component({
  selector: 'app-eportal',
  templateUrl: './eportal.component.html',
  styleUrls: ['./eportal.component.css']
})

export class EportalComponent implements OnInit {

  constructor(private _eportalservice:EportalService
    ) { }

  ngOnInit(): void {}

    selected = 'none';
    favoriteheadboy: string;
    favoriteheadgirl: string;
      
    headboys;
    headgirls;
  

    
    myFunction(){
      // console.log("slect",test);
      console.log("myFunction called")
      if(this.selected =="Red")
      {
        this.headboys = this._eportalservice.headboys_red;
        this.headgirls = this._eportalservice.headgirls_red;
        console.log("Red");
        
      }

      else if(this.selected =="Blue")
      {
        this.headboys = this._eportalservice.headboys_blue;
        this.headgirls = this._eportalservice.headgirls_blue;
      }

      else if(this.selected =="Green")
      {
        this.headboys = this._eportalservice.headboys_green;
        this.headgirls = this._eportalservice.headgirls_green;
      }

      else if(this.selected =="Yellow")
      {
        this.headboys = this._eportalservice.headboys_yellow;
        this.headgirls = this._eportalservice.headgirls_yellow;
      }
      else 
      {
        this.headboys = this._eportalservice.headboys;
        this.headgirls = this._eportalservice.headgirls;
      }
    }

    onSubmit(e) {
      console.log("submit");
      var vote = {
        house : e.value.house,
        headboy : e.value.headboy, 
        headgirl : e.value.headgirl

      }
      console.log(vote);
    }

}