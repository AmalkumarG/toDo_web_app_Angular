import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos:any

  constructor() { 

    const todos=[{
      content:'',
      status:Boolean,date:''

    }]
    this.todos=todos
 
  }
}
