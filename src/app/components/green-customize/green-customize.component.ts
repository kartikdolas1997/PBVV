import { Component, OnInit } from "@angular/core";
import { AuthenticateService } from "src/app/services/authenticate.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ResultsService } from "../results/results.service";

@Component({
  selector: "app-green-customize",
  templateUrl: "./green-customize.component.html",
  styleUrls: ["./green-customize.component.css"],
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
  headboys: any;
  headgirls: any;

  constructor(
    public auth: AuthenticateService,
    private snackBar: MatSnackBar,
    private resl: ResultsService
  ) {}

  ngOnInit(): void {
    this.resl.fetchresults("blue", "male").subscribe((data: any) => {
      this.headboys = data.map((a) => a.names);
      this.Green_B1 = this.headboys[0];
      this.Green_B2 = this.headboys[1];
      this.Green_B3 = this.headboys[2];
      this.Green_B4 = this.headboys[3];
    });
    this.resl.fetchresults("blue", "female").subscribe((data: any) => {
      this.headgirls = data.map((a) => a.names);
      console.log(this.headgirls);
      this.Green_G1 = this.headgirls[0];
      this.Green_G2 = this.headgirls[1];
      this.Green_G3 = this.headgirls[2];
      this.Green_G4 = this.headgirls[3];
    });
  }
  onSubmit(e) {
    const newGreen = {
      G1: e.value.Green_G1,
      G2: e.value.Green_G2,
      G3: e.value.Green_G3,
      G4: e.value.Green_G4,
      B1: e.value.Green_B1,
      B2: e.value.Green_B2,
      B3: e.value.Green_B3,
      B4: e.value.Green_B4,
    };
    console.log(newGreen);

    this.auth.submitnominGreen(newGreen).subscribe(
      (res) => {
        console.log(res);
        this.snackBar.open("Submitted Successfully", "", {
          duration: 2000,
        });
      },
      (error) => {
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
