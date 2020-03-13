import { Component, OnInit } from '@angular/core';
import {EportalService} from './eportal.service'

@Component({
  selector: 'app-eportal',
  templateUrl: './eportal.component.html',
  styleUrls: ['./eportal.component.css']
})

export class EportalComponent implements OnInit {

  constructor(private _eportalservice:EportalService) { }

  ngOnInit(): void {}
  
    selected = 'none';

      
    favoriteheadboy: string;
    headboys = this._eportalservice.headboys;

    favoriteheadgirl: string;
    headgirls = this._eportalservice.headgirls;

}

