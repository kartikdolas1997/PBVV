import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';

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

  constructor(private auth: AuthenticateService,
              private router: Router) { }

  ngOnInit(): void {
    this.role = this.auth.getuser();
    if(this.role ===  undefined) {
      this.router.navigate(['/']);
    }
  }
  onSubmit(e) {
    const newBlue = {
      G1: e.value.Blue_G1,
      G2: e.value.Blue_G2,
      G3: e.value.Blue_G3,
      G4: e.value.Blue_G4,
      B1: e.value.Blue_B1,
      B2: e.value.Blue_B2,
      B3: e.value.Blue_B3,
      B4: e.value.Blue_B4,
    };
    console.log(newBlue);
    this.auth.submitnominBlue(newBlue).subscribe(
      () => {
        // this.router.navigate(['/link']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
