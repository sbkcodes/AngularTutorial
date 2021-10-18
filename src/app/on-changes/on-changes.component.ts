import { Component, SimpleChanges, OnChanges, Input } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css'],
})
export class OnChangesComponent implements OnChanges {
  @Input() fullname!: User;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.fullname = { ...this.fullname, lname: 'H' };
    console.log(this.fullname);
  }
}
