import { Component } from '@angular/core';

@Component({
  selector: 'app-test3',
  imports: [],
  templateUrl: './test3.html',
  styleUrl: './test3.scss',
})
export class Test3 {
  constructor() {
    this.sayHello();
    this.sayBye();
  }

  sayHello() {
    console.log('Hello');
  }

  sayBye() {
    console.log('Bye');
  }
}
