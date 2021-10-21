import {
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css'],
})
export class OnChangesComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy
{
  @Input() name!: string;
  oldName!: string;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log('onChanges method', this.name);
    if (this.name === 'ITP') {
      alert('Its ITP Student');
    }
  }

  ngDoCheck() {
    if (this.name !== this.oldName) {
      console.log('ngDoCheck method', this.name, this.oldName);
      ///code
      this.oldName = this.name;
    }
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngOnDestroy() {
    console.log('ngAfterContentInit');
  }
}
