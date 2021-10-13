import { Component, OnInit } from '@angular/core';

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

  toggle() {
    this.isDisabledBtn = true;
  }

  enabled() {
    this.isDisabledBtn = false;
  }
}
