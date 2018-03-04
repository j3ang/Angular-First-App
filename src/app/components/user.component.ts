import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
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
        this.posts = posts;
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
