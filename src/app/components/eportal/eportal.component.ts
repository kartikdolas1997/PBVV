import { Component, OnInit } from '@angular/core';
import { EportalService } from './eportal.service';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResultsService } from '../results/results.service';
import { map } from 'rxjs/operators';
import { TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';


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
  fontColor;

  // DataRedMale;
  

  ngOnInit(): void {
    this.role = this.aut.getuser();
    if (this.role === undefined) {
      this.router.navigate(['/']);
    }

  }
  textColor(inp){
    console.log('from textcolor',inp);
    
    switch(inp){
      case 'Red': this.fontColor='#ff0000'; break;
      case 'Blue': this.fontColor='#0000ff'; break;
      case 'Green': this.fontColor='#006600'; break;
      case 'Yellow': this.fontColor='#cccc00'; break;
      default: console.log('invalid color'); break;
      

    }
  }


  myFunction() {
    console.log('myFunction called');
    this.textColor(this.selected);
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
    this.snackBar.open('Submitted Successfully', '', {
      duration: 5000,
    });

    // }
    this.playAudio();
    this.eportalService.submitvote(vote)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.error(error);
        }
      );
      (<HTMLFormElement>document.getElementById("stu")).reset();
      this.fontColor=null;
    // if (this.role === 'Student') {
    //   this.router.navigate(['/']);
    //   console.log(this.role);
    // }
  }
  btndisable(e) {
    if (e.valid) {
      return false;
    } else {
      return true;
    }
  }
  playAudio() {
    let audio = new Audio();
    audio.src = '../../../assets/long.mp3';
    audio.load();
    audio.play();
  }

  //  this.st=function(){
  //   return 0;
  //   };


}
