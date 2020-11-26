import { Component, OnInit } from '@angular/core';
import { EportalService } from './eportal.service';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResultsService } from '../results/results.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-eportal',
  templateUrl: './eportal.component.html',
  styleUrls: ['./eportal.component.css']
})

export class EportalComponent implements OnInit {
  public role;

  constructor(private eportalService: EportalService,
              private aut: AuthenticateService,
              private router: Router,
              private snackBar: MatSnackBar,
              private resl: ResultsService
  ) { }

  selected = 'none';
  favoriteheadboy: string;
  favoriteheadgirl: string;
  headboys;
  headgirls;
  // DataRedMale;

  ngOnInit(): void {
    this.role = this.aut.getuser();
    if (this.role === undefined) {
      this.router.navigate(['/']);
    }

    // console.log(this.DataRedMale);

    // const DataRedFemale = this.resl.fetchresults('red', 'female');

    // const DataYellowMale = this.resl.fetchresults('yellow', 'male');
    // const DataYellowFemale = this.resl.fetchresults('yellow', 'female');

    // const DataBlueMale = this.resl.fetchresults('blue', 'male');
    // const DataBlueFemale = this.resl.fetchresults('blue', 'female');

    // const DataGreenMale = this.resl.fetchresults('green', 'male');
    // const DataGreenFemale = this.resl.fetchresults('green', 'female');


  }


  myFunction() {
    console.log('myFunction called');
    if (this.selected === 'Red') {
      this.resl.fetchresults('red', 'male').subscribe((data: any) => {
        this.headboys = data.map(a => a.names);
        console.log(this.headboys);
      });
      this.resl.fetchresults('red', 'female').subscribe((data: any) => {
        this.headgirls = data.map(a => a.names);
        console.log(this.headgirls);
      });

    } else if (this.selected === 'Blue') {
      this.resl.fetchresults('blue', 'male').subscribe((data: any) => {
        this.headboys = data.map(a => a.names);
        console.log(this.headboys);
      });
      this.resl.fetchresults('blue', 'female').subscribe((data: any) => {
        this.headgirls = data.map(a => a.names);
        console.log(this.headgirls);
      });

    } else if (this.selected === 'Green') {

      this.resl.fetchresults('green', 'male').subscribe((data: any) => {
        this.headboys = data.map(a => a.names);
        console.log(this.headboys);
      });
      this.resl.fetchresults('green', 'female').subscribe((data: any) => {
        this.headgirls = data.map(a => a.names);
        console.log(this.headgirls);
      });

    } else if (this.selected === 'Yellow') {
      this.resl.fetchresults('yellow', 'male').subscribe((data: any) => {
        this.headboys = data.map(a => a.names);
        console.log(this.headboys);
      });
      this.resl.fetchresults('yellow', 'female').subscribe((data: any) => {
        this.headgirls = data.map(a => a.names);
        console.log(this.headgirls);
      });

    } else {
      this.headboys = this.eportalService.headboys;
      this.headgirls = this.eportalService.headgirls;
    }
  }

  onSubmit(e) {
    const vote = {
      house: e.value.house,
      headboy: e.value.headboy,
      headgirl: e.value.headgirl,
    };
    console.log(vote);
    // code to submit individual vote
    this.eportalService.submitvote(vote);
    // {
    //   this. snackBar.openFromComponent(EportalComponent, {
    //     duration: 2000,
    //   });
    // }

    // this.router.navigate(['/']);
  }


}
