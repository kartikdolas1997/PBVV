import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-green-customize',
  templateUrl: './green-customize.component.html',
  styleUrls: ['./green-customize.component.css']
})
export class GreenCustomizeComponent implements OnInit {
  Green_G1;
  Green_G2;
  Green_G3;
  Green_G4;
  Green_B1;
  Green_B2;
  Green_B3;
  Green_B4;

  constructor(public auth: AuthenticateService) { }

  ngOnInit(): void {
  }
  onSubmit(e) {
    const newGreen = {
      G1 : e.value.Green_G1,
      G2 : e.value.Green_G2,
      G3 : e.value.Green_G3,
      G4 : e.value.Green_G4,
      B1 : e.value.Green_B1,
      B2 : e.value.Green_B2,
      B3 : e.value.Green_B3,
      B4 : e.value.Green_B4,
    };
    console.log(newGreen);

    this.auth.submitnominGreen(newGreen).subscribe(
      () => {
        // this.router.navigate(['/link']);
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
