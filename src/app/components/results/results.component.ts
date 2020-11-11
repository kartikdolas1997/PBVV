import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

  constructor( public resul: ResultsService) { }


  ELEMENT_DATA: PeriodicElement[] = this.resul.fetchresults();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
}


