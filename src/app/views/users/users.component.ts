import { Component, OnInit } from '@angular/core';
import { Todo, UserDetails } from 'src/app/models/user-detail.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName: string = ""
  userAge: number = 0
  users: UserDetails[] = [

  ]

  todoList: Todo[] = [


  ]


  constructor() { }
  userDetailsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required])
  });


  todoForm = new FormGroup({
    assignedTo: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {
  }

  onAddUser() {
    if (this.userDetailsForm.valid) {


      let user: UserDetails = this.userDetailsForm.value
      let color = Math.floor(0x1000000 * Math.random()).toString(16);
      color = '#' + ('000000' + color).slice(-6);
      user.background = color
      this.users.push(user)
      this.userDetailsForm.reset()
    }
  }
  onDelete(i: number) {
    console.log("this is called")
    if (i > -1 && i <= this.users.length - 1)
      this.users.splice(i, 1);
  }
  onAddTodo() {

    if (this.todoForm.valid) {
      let todo: Todo = this.todoForm.value

      this.todoList.push(todo)
      this.todoForm.reset()

    }
  }

  deleteTodo(i: number) {
    console.log("in users")
    if (i > -1 && i <= this.todoList.length - 1) {
      this.todoList.splice(i, 1);
    }
  }
}
