import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
 todo:any
  stored:any
 completed=false
  updateData:any
 
cls="d-flex flex-row justify-content-betweentext-break border rounded border-2 border-danger"
  constructor(private fb:FormBuilder,private todos:TodoService) { 
    

  }
  addDta=this.fb.group({
    add:[''],update:['']
})
a=this.addDta.value.update
  ngOnInit(): void {
this.todo=this.todos.todos
   
  }
disp=()=>{
  let todoDate=new Date
this.todo.push({content:this.addDta.value.add,status:false,date:`${todoDate.getDate()}/${todoDate.getMonth()}/${todoDate.getFullYear()} Time : ${todoDate.getHours()} : ${todoDate.getMinutes()}`})

  this.addDta.value.add=''
  
}
Remove=(i:any)=>{
  console.log("aaaaaaa");
  
this.todo=this.todo.filter((a:any,index:any)=>{return(a.content!=this.todo[i].content)})
 console.log(this.todo);
 
}
Edit=(i:any)=>{



this.todo.map((a:any,index:number)=>{
i==index?(this.updateData=a,this.addDta.value.update='',a=''):""
})


}

Update=()=>{
  console.log(this.updateData);
  
  this.todo.map((a:any,index:any)=>{
    if(a.content==this.updateData.content){
      console.log(this.todo[index]["content"]);
      
      this.todo[index].content=this.addDta.value.update
    }

  })
  
  
  this.addDta.value.add=''
  this.addDta.value.update=''
  alert("Your Todo is updated")
  
  
  
}
complete=(i:any)=>{
this.todo.map((a:any,index:any)=>{
  i==index?(
    a.status?this.todo[index].status=false:this.todo[index].status=true
  ):""
    
  
})

}
}
