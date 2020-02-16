import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eportal',
  templateUrl: './eportal.component.html',
  styleUrls: ['./eportal.component.css']
})

export class EportalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  
    selected = 'none';

      
    favoriteheadboy: string;
    headboys: string[] = ['Boy1', 'Boy2', 'Boy3', 'Boy4'];

    favoriteheadgirl: string;
    headgirls: string[] = ['Girl1', 'Girl2', 'Girl3', 'Girl4'];

}

