import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-yellow-customize',
  templateUrl: './yellow-customize.component.html',
  styleUrls: ['./yellow-customize.component.css']
})
export class YellowCustomizeComponent implements OnInit {

  constructor(public auth: AuthenticateService) { }

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
    this.auth.submitnomin(newYellow).subscribe();
  }
}
