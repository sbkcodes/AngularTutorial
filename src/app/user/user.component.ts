import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user!: User;
  @Output() deleteRequest = new EventEmitter<User>();

  onDelete(userParam: User) {
    // console.log(userParam);
    // Need to call parent component method
    this.deleteRequest.emit(userParam);
  }
}
