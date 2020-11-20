import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor() { }
  fetchresults() {
    const Res = [
      {position: 1, name: 'Hydrogen', votes: 12},
      {position: 2, name: 'Helium', votes: 40},
      {position: 3, name: 'Lithium', votes: 69},
      {position: 4, name: 'Beryllium', votes: 90},
    ];
    return Res;
  }

}
