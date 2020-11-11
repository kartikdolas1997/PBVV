import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-red-customize',
  templateUrl: './red-customize.component.html',
  styleUrls: ['./red-customize.component.css']
})
export class RedCustomizeComponent implements OnInit {

  constructor(public auth: AuthenticateService) { }

  ngOnInit(): void {
  }
  onSubmit(e) {
    const newRed = {
      G1: e.value.Red_G1,
      G2: e.value.Red_G2,
      G3: e.value.Red_G3,
      G4: e.value.Red_G4,
      B1: e.value.Red_B1,
      B2: e.value.Red_B2,
      B3: e.value.Red_B3,
      B4: e.value.Red_B4,
    };
    console.log(newRed);
    this.auth.submitnomin(newRed).subscribe(
      () => {
        // this.router.navigate(['/link']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
