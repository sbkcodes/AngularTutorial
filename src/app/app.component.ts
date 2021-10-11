import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ITP CANDIDATE';
  note: string = 'Good Morning';
  imgUrl: string = 'www.abc.com/photo.jpeg';

  add(): number {
    return 3;
  }

  addData(): void {
    console.log('addData');
  }

  addDataEvent(e: any): void {
    console.log('event data', e);
  }
}
