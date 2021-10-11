import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  parent: string = 'Parent works using url';
  fruits: string[] = ['carrot', 'banana', 'apple', 'abc'];
  userList = [
    {
      firstName: 'John',
      lastname: 'Doe',
    },
    {
      firstName: 'abc',
      lastname: 'ajd',
    },
    {
      firstName: 'Priynk',
      lastname: 'Doe',
    },
  ];
}
