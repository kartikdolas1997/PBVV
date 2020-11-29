import { Component, OnInit, Input } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

// @Input
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  role;
  VarName;
  constructor(private aut: AuthenticateService) { }

  ngOnInit(): void {
      this.role = this.aut.getuser();
      this.aut.putuser(this.role);

  }
  selected(inp) {
    console.log(inp);
    this.VarName = inp;
  }
}
