import { Component, OnInit } from '@angular/core';
import { ResultsService } from './results.service';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

export interface PeriodicElement {
  name: string;
  position: number;
  votes: number;
}


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

  ELEMENT_DATA: PeriodicElement[] = this.resul.fetchresults();

  displayedColumns: string[] = ['position', 'name', 'votes'];
  dataSource = this.ELEMENT_DATA;

  ngOnInit(): void {
    this.role = this.aut.getuser();
    if (this.role ===  undefined) {
      this.router.navigate(['/']);
    }

  }

}


