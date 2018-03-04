import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <user></user>
  `,
})
export class AppComponent  {
  name = 'Angular';
  email = 'jwang206@hawk.oot.edu';
  address = {
    street:'12 Main st',
    city: 'Boston',
    state: 'MA'
  }
}
