import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserDetails } from 'src/app/models/user-detail.model';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() index: number = 0
  @Input() userDetail: UserDetails = new UserDetails()
  @Output() deleteEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(index: number) {
    console.log("this method is called")
    this.deleteEvent.emit(index)
  }

}
