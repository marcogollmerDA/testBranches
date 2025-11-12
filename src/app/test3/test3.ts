import { Component } from '@angular/core';

@Component({
  selector: 'app-test3',
  imports: [],
  templateUrl: './test3.html',
  styleUrl: './test3.scss',
})
export class Test3 {
  name = 'Freddy';

  constructor() {
    this.sayWorld();
    this.sayBye();
  }

  sayWorld() {
    console.log('Hello World!', this.name);
  }

  sayBye() {
    console.log('Bye');
  }
}
