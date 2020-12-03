import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient) { }
  fetchresults(color, gender) {
    console.log('feched ' + color + '  ' + gender);
    return this.http.get(environment.apiUrl + '/api/results/' + color + '/' + gender);
  }
  Deletevote(inp) {
    console.log(inp);

    return this.http.post(environment.apiUrl + '/api/reset/abc', inp).pipe(
      catchError((err) => {
        console.log('error caught in service');
        console.error(err);
        return throwError(err);
      })
    );
  }

}
