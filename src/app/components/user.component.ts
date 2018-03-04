import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}} </h1>
  <p>Email: {{email}} </p>
  <p><strong>Addresss: </strong>{{address.street}} {{address.city}} {{address.state}}</p>
  <div>
  <h3>Hobbies</h3>
  <button (click)="toggleHobbies()">{{showhobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  <div *ngIf="showhobbies">
    <ul>
      <li *ngFor="let hobby of hobbies">
        {{ hobby }}
      </li>
    </ul>
  </div>
  <form>
    <label>Name: </label> <br />
    <input type="text" name="name" [(ngModel)]="name" />
  </form>
  `,
})

export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showhobbies: boolean;

  constructor(){
    this.name = 'Sam Smith';
    this.email = 'jwang206@hawk.iitt.edu',
    this.address = {
      street:'12 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['music', 'Movies', 'Sports'];
    this.showhobbies = false;
  }

  toggleHobbies(){
    if(this.showhobbies == true){
      this.showhobbies = false;
    } else {
      this.showhobbies = true;
    }
  }

}


interface address {
  street:string;
  city: string;
  state: string;
}
