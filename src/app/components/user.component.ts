import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

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
      <li *ngFor="let hobby of hobbies; let i = index">
        {{ hobby }}  <button (click)="deleteHobby(i)">X</button>
      </li>
    </ul>
    <form (submit)="addHobby(hobby.value)">
      <label>Add Hobby: </label> <br />
      <input type="text" #hobby /><br />
    </form>
  </div>

  <hr/><h3>Edit User</h3>
  <form>
    <label>Name: </label> <br />
    <input type="text" name="name" [(ngModel)]="name" /><br />
    <label>Email: </label> <br />
    <input type="text" name="email" [(ngModel)]="email" /><br />
    <label>Street: </label> <br />
    <input type="text" name="address.street" [(ngModel)]="address.street" /><br />
    <label>City: </label> <br />
    <input type="text" name="address.city" [(ngModel)]="address.city" /><br />
    <label>State: </label> <br />
    <input type="text" name="address.state" [(ngModel)]="address.state" /><br />
  </form>
  `,
  providers:[PostsService]

})

export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showhobbies: boolean;

  constructor(private PostsService: PostsService){
    this.name = 'Sam Smith';
    this.email = 'jwang206@hawk.iitt.edu',
    this.address = {
      street:'12 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['music', 'Movies', 'Sports'];
    this.showhobbies = false;

    this.PostsService.getPosts().subscribe(posts =>{
        console.log(posts);
    });
  }

  toggleHobbies(){
    if(this.showhobbies == true){
      this.showhobbies = false;
    } else {
      this.showhobbies = true;
    }
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }
}


interface address {
  street:string;
  city: string;
  state: string;
}

interface posts {
  id:number;
  title: string;
  body: string;
}
