import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../models/user-detail.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userName: string = ""
  userAge: number = 0
  users: UserDetails[] = [
    {
      name: "Bilal",
      age: 25
    },
    {
      name: "Soman",
      age: 25
    },
    {
      name: "Ghulam",
      age: 25
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onAddUser() {
    if (this.userName != "" && this.userAge != null && this.userAge != 0) {
      let user: UserDetails = {
        name: this.userName,
        age: this.userAge
      }

      this.users.push(user)
      this.userAge = 0
      this.userName = ""
    }
  }

}
