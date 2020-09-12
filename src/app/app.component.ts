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
constructor(db: AngularFireDatabase) {
  db.list('/VoterNode').valueChanges().subscribe(voterArr =>{
    this.voterArr = voterArr;
    console.log(this.voterArr);
  });

  // To query full collection
  // db.collection('courses')
  // .get()
  // .then(snaps =>{
  //   console.log(snaps.docs.map(snap=>snap.id))
  // }
  //   );
}
}
