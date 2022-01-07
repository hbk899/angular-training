import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/user-detail.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoDetail: Todo = new Todo()

  @Output() deleteEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log("in todo")
    this.deleteEvent.emit()
  }

}
