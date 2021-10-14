import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  url: string = 'img/abc.jpeg';
  isDisabledBtn = false;
  classes = 'special';

  parentchildName: string = 'MyChild';

  userList: User[] = [
    {
      userId: 1,
      userName: 'abc',
    },
    {
      userId: 2,
      userName: 'prq',
    },
    {
      userId: 3,
      userName: 'xyz',
    },
  ];

  toggle() {
    this.isDisabledBtn = true;
  }

  enabled() {
    this.isDisabledBtn = false;
  }

  deleteUser(param: User) {
    console.log('parent', param);
    // filter user data
    this.userList = this.userList.filter(
      (user) => user.userId !== param.userId
    );
  }
}
