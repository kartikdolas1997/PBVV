import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EportalService {

  constructor() { }
  headboys;
  headgirls;
  
  headboys_red = ['Red_Boy 1', 'Red_Boy 2', 'Red_Boy 3', 'Red_Boy 4'];
  headgirls_red = ['Red_Girl 1', 'Red_Girl 2', 'Red_Girl 3', 'Red_Girl 4'];

  headboys_yellow = ['Yellow_Boy 1', 'Yellow_Boy 2', 'Yellow_Boy 3', 'Yellow_Boy 4'];
  headgirls_yellow = ['Yellow_Girl 1', 'Yellow_Girl 2', 'Yellow_Girl 3', 'Yellow_Girl 4'];

  headboys_blue = ['Blue_Boy 1', 'Blue_Boy 2', 'Blue_Boy 3', 'Blue_Boy 4'];
  headgirls_blue = ['Blue_Girl 1', 'Blue_Girl 2', 'Blue_Girl 3', 'Blue_Girl 4'];

  headboys_green = ['Green_Boy 1', 'Green_Boy 2', 'Green_Boy 3', 'Green_Boy 4'];
  headgirls_green = ['Green_Girl 1', 'Green_Girl 2', 'Green_Girl 3', 'Green_Girl 4'];

}
