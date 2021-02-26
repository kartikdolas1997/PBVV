import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blue-customize',
  templateUrl: './blue-customize.component.html',
  styleUrls: ['./blue-customize.component.css']
})
export class BlueCustomizeComponent implements OnInit {
  role;
  Blue_G1;
  Blue_G2;
  Blue_G3;
  Blue_G4;
  Blue_B1;
  Blue_B2;
  Blue_B3;
  Blue_B4;
  newBlue: { G1: any; G2: any; G3: any; G4: any; B1: any; B2: any; B3: any; B4: any; };

  constructor(private auth: AuthenticateService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.role = this.auth.getuser();
    if (this.role === undefined) {
      this.router.navigate(['/']);
    }
  }
  onSubmit(e) {
     this.newBlue = {
      G1: e.value.Blue_G1,
      G2: e.value.Blue_G2,
      G3: e.value.Blue_G3,
      G4: e.value.Blue_G4,
      B1: e.value.Blue_B1,
      B2: e.value.Blue_B2,
      B3: e.value.Blue_B3,
      B4: e.value.Blue_B4,
    };
    console.log(this.newBlue);
    this.auth.submitnomin(this.newBlue).subscribe(
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
  btndisable(e) {
    if (e.valid) {
      return false;
    } else {
      return true;
    }
  }
}
