import { Component, OnInit } from '@angular/core';
import {EportalService} from './eportal.service';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


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
              private snackBar: MatSnackBar
    ) { }

    selected = 'none';
    favoriteheadboy: string;
    favoriteheadgirl: string;
    headboys;
    headgirls;

  ngOnInit(): void {
    this.role = this.aut.getuser();

  }


    myFunction() {
      console.log('myFunction called');
      if (this.selected === 'Red') {
        this.headboys = this.eportalService.headboys_red;
        this.headgirls = this.eportalService.headgirls_red;
        console.log('Red');

      } else if (this.selected === 'Blue') {
        this.headboys = this.eportalService.headboys_blue;
        this.headgirls = this.eportalService.headgirls_blue;

      } else if (this.selected === 'Green') {

        this.headboys = this.eportalService.headboys_green;
        this.headgirls = this.eportalService.headgirls_green;

      } else if (this.selected === 'Yellow') {
        this.headboys = this.eportalService.headboys_yellow;
        this.headgirls = this.eportalService.headgirls_yellow;

      } else {
        this.headboys = this.eportalService.headboys;
        this.headgirls = this.eportalService.headgirls;
      }
    }

    onSubmit(e) {
      console.log('submit');
      const vote = {
        house : e.value.house,
        headboy : e.value.headboy,
        headgirl : e.value.headgirl

      };
      console.log(vote);
      // code to submit individual vote
      this.eportalService.submitvote(vote);
      // {
      //   this. snackBar.openFromComponent(EportalComponent, {
      //     duration: 2000,
      //   });
      // }
      this.router.navigate(['/']);
    }

}
