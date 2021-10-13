import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ITP CANDIDATE';
  fname: string = '';
  lname: string = '';
  fruits: string[] = ['carrot', 'apple', 'banana'];
}
