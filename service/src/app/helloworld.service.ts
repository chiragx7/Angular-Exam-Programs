import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor() { }

  printHelloWorld() {
    return "Hello World From Service";
  }
}
