import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css'],
})
export class OnChangesParentComponent {
  fullname!: User;
  name!: string;
  constructor() {}

  changeName(): void {
    this.fullname = new User(this.name, '');
  }
}
