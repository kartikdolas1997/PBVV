import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-yellow-customize',
  templateUrl: './yellow-customize.component.html',
  styleUrls: ['./yellow-customize.component.css']
})
export class YellowCustomizeComponent implements OnInit {
  Yellow_G1;
  Yellow_G2;
  Yellow_G3;
  Yellow_G4;
  Yellow_B1;
  Yellow_B2;
  Yellow_B3;
  Yellow_B4;

  constructor(public auth: AuthenticateService,
              private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
  }
  onSubmit(e) {
    const newYellow = {
      G1: e.value.Yellow_G1,
      G2: e.value.Yellow_G2,
      G3: e.value.Yellow_G3,
      G4: e.value.Yellow_G4,
      B1: e.value.Yellow_B1,
      B2: e.value.Yellow_B2,
      B3: e.value.Yellow_B3,
      B4: e.value.Yellow_B4,
    };
    console.log(newYellow);
    this.auth.submitnomin(newYellow).subscribe(
      (res) => {
        console.log(res);
        this.snackBar.open('Submitted Successfully', '', {
          duration: 2000,
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  ClearForm(e) {
    e.resetForm();
  }
}
