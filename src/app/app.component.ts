import { Component } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/firestore'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  voterArr: any[];
constructor() {

}
}
