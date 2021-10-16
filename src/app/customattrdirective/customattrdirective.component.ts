import { Component } from '@angular/core';

@Component({
  selector: 'app-customattrdirective',
  templateUrl: './customattrdirective.component.html',
  styleUrls: ['./customattrdirective.component.css'],
})
export class CustomattrdirectiveComponent {
  color: string = '';
  onClickRadio(param: string): void {
    this.color = param;
  }
}
