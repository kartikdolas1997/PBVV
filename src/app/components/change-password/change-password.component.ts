import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticateService } from "src/app/services/authenticate.service";
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent implements OnInit {
  role;
  contactForm;
  hide = true;
  hide2 = true;
  hide3 = true;

  constructor(
    private formBuilder: FormBuilder,
    private aut: AuthenticateService,
    private router: Router
  ) {
    this.contactForm = this.formBuilder.group({
      oldPass: [""],
      newPass: [""],
      cnfNewPass: [""],
    });
  }

  get oldPass() {
    return this.contactForm.get('oldPass');
  }
 
  get newPass() {
    return this.contactForm.get('newPass');
  }
 
  get cnfNewPass() {
    return this.contactForm.get('cnfNewPass');
  }

  // DataRedMale;

  ngOnInit(): void {
    this.role = this.aut.getuser();
    if (this.role === undefined) {
      this.router.navigate(["/"]);
    }
  }



  onSubmit() {
    console.log(this.contactForm.value);
  }
}
