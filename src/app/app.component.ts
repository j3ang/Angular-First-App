import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">About</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  // name = 'Angular';
  // email = 'jwang206@hawk.oot.edu';
  // address = {
  //   street:'12 Main st',
  //   city: 'Boston',
  //   state: 'MA'
  // }
}
