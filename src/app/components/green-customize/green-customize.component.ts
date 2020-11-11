import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-green-customize',
  templateUrl: './green-customize.component.html',
  styleUrls: ['./green-customize.component.css']
})
export class GreenCustomizeComponent implements OnInit {

  constructor(public auth: AuthenticateService) { }

  ngOnInit(): void {
  }
  onSubmit(e) {
    const newRed = {
      G1 : e.value.Red_G1,
      G2 : e.value.Red_G2,
      G3 : e.value.Red_G3,
      G4 : e.value.Red_G4,
      B1 : e.value.Red_B1,
      B2 : e.value.Red_B2,
      B3 : e.value.Red_B3,
      B4 : e.value.Red_B4,
    };
    this.auth.submitnomin(newRed).subscribe();
}}
