import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EportalService {

  constructor(private http: HttpClient) { }
  headboys;
  headgirls;
  HeadBoyRed() {
  const headboys_red = ['Red_Boy 1', 'Red_Boy 2', 'Red_Boy 3', 'Red_Boy 4'];
  return headboys_red;
  }
  HeadGirlRed() {
  const headgirls_red = ['Red_Girl 1', 'Red_Girl 2', 'Red_Girl 3', 'Red_Girl 4'];
  return headgirls_red;
  }
  HeadGirlYellow() {
  const headgirls_yellow = ['Yellow_Girl 1', 'Yellow_Girl 2', 'Yellow_Girl 3', 'Yellow_Girl 4'];
  return headgirls_yellow;
  }
  HeadBoyYellow(){
  const headboys_yellow = ['Yellow_Boy 1', 'Yellow_Boy 2', 'Yellow_Boy 3', 'Yellow_Boy 4'];
  return headboys_yellow;
  }
  HeadBoyBlue() {
  const headboys_blue = ['Blue_Boy 1', 'Blue_Boy 2', 'Blue_Boy 3', 'Blue_Boy 4'];
  return headboys_blue;
  }
  HeadGirlBlue() {
  const headgirls_blue = ['Blue_Girl 1', 'Blue_Girl 2', 'Blue_Girl 3', 'Blue_Girl 4'];
  return headgirls_blue;
  }
  HeadBoyGreen() {
  const headboys_green = ['Green_Boy 1', 'Green_Boy 2', 'Green_Boy 3', 'Green_Boy 4'];
  return headboys_green;
  }
  HeadGirlGreen() {
  const headgirls_green = ['Green_Girl 1', 'Green_Girl 2', 'Green_Girl 3', 'Green_Girl 4'];
  return headgirls_green;
  }

  submitvote(inp) {
    // code to caste voter's vote.
    console.log('Cast vote API', JSON.stringify(inp));
    return this.http.post('url/api/index/endpoint', inp);
    // return this.http.post('localhost:4200/api/submit-vote', inp);
  }
}
