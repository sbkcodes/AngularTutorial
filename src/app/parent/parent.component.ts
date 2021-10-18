import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  logString: string = '';

  constructor() {
    console.log('constructor ');
    this.logString += 'constructor ';
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.logString += 'ngOnInit ';
  }
}
