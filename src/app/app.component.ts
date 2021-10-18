import { Component, OnInit } from '@angular/core';
import { User } from './users/user';
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ITP CANDIDATE';
  userList: User[] = [];
  constructor(private userService: UserService) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    // this.userList = this.userService.getUsers();
  }

  getData() {
    this.userList = this.userService.getUsers();
  }

  getActiveData() {
    this.userList = this.userService.getActiveUsers();
  }

  getAdminData() {
    this.userList = this.userService.getAdminUsers();
  }
}
