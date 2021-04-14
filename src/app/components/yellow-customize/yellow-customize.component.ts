import { Component, OnInit } from "@angular/core";
import { AuthenticateService } from "src/app/services/authenticate.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ResultsService } from "../results/results.service";

@Component({
  selector: "app-yellow-customize",
  templateUrl: "./yellow-customize.component.html",
  styleUrls: ["./yellow-customize.component.css"],
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
  headboys: any;
  headgirls: any;

  constructor(
    public auth: AuthenticateService,
    private resl: ResultsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.resl.fetchresults("yellow", "male").subscribe((data: any) => {
      this.headboys = data.map((a) => a.names);
      this.Yellow_B1 = this.headboys[0];
      this.Yellow_B2 = this.headboys[1];
      this.Yellow_B3 = this.headboys[2];
      this.Yellow_B4 = this.headboys[3];
    });
    this.resl.fetchresults("yellow", "female").subscribe((data: any) => {
      this.headgirls = data.map((a) => a.names);
      console.log(this.headgirls);
      this.Yellow_G1 = this.headgirls[0];
      this.Yellow_G2 = this.headgirls[1];
      this.Yellow_G3 = this.headgirls[2];
      this.Yellow_G4 = this.headgirls[3];
    });
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
    this.auth.submitnominYellow(newYellow).subscribe(
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
