import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }
  fetchresults(color, gender) {
    return this.http.get('http://localhost:3000/api/results/' + color + '/' + gender);
  }


}
