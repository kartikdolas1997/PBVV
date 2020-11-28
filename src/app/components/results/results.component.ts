import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import {Sort} from '@angular/material/sort';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   votes: number;
// }


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  role;

  constructor( public resul: ResultsService,
               private aut: AuthenticateService,
               private router: Router) { }
  displayedColumns: string[] = ['name', 'votes'];
  ELEMENT_DATA = this.resul.fetchresults('yellow', 'female');
  dataSource = this.ELEMENT_DATA;

  ELEMENT_DATA_RED_MALE = this.resul.fetchresults('red', 'male');
  dataSourceRedMale = this.ELEMENT_DATA_RED_MALE;
  ELEMENT_DATA_RED_FEMALE = this.resul.fetchresults('red', 'female');
  dataSourceRedFemale = this.ELEMENT_DATA_RED_FEMALE;

  ELEMENT_DATA_YELLOW_MALE = this.resul.fetchresults('yellow', 'male');
  dataSourceYellowMale = this.ELEMENT_DATA_YELLOW_MALE;
  ELEMENT_DATA_YELLOW_FEMALE = this.resul.fetchresults('yellow', 'female');
  dataSourceYellowFemale = this.ELEMENT_DATA_YELLOW_FEMALE;

  ELEMENT_DATA_BLUE_MALE = this.resul.fetchresults('blue', 'male');
  dataSourceBlueMale = this.ELEMENT_DATA_BLUE_MALE;
  ELEMENT_DATA_BLUE_FEMALE = this.resul.fetchresults('blue', 'female');
  dataSourceBlueFemale = this.ELEMENT_DATA_BLUE_FEMALE;

  ELEMENT_DATA_GREEN_MALE = this.resul.fetchresults('green', 'male');
  dataSourceGreenMale = this.ELEMENT_DATA_GREEN_MALE;
  ELEMENT_DATA_GREEN_FEMALE = this.resul.fetchresults('green', 'female');
  dataSourceGreenFemale = this.ELEMENT_DATA_GREEN_FEMALE;


  ngOnInit(): void {
    this.role = this.aut.getuser();
    if (this.role ===  undefined) {
      this.router.navigate(['/']);
    }

  }
  Del(col, gen) {
    const inpobj = {
      color : col,
      gender : gen,
    };
    this.resul.Deletevote(inpobj)
    .subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
    this.dataSourceRedMale = this.resul.fetchresults('red', 'male');
    this.dataSourceRedFemale = this.resul.fetchresults('red', 'female');

    this.dataSourceYellowMale = this.resul.fetchresults('yellow', 'male');
    this.dataSourceYellowFemale = this.resul.fetchresults('yellow', 'female');

    this.dataSourceBlueMale = this.resul.fetchresults('blue', 'male');
    this.dataSourceBlueFemale = this.resul.fetchresults('blue', 'female');

    this.dataSourceGreenMale = this.resul.fetchresults('green', 'male');
    this.dataSourceGreenFemale = this.resul.fetchresults('green', 'female');

  }

//   sortData(sort: Sort) {
//     const data = this.sortedData.slice();
//     if (!sort.active || sort.direction === '') {
//       this.sortedData = data;
//       return;
//     }

// }

}
