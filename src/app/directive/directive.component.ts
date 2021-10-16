import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent {
  status: string = 'pending';
  isSave: boolean = false;
  isEdit: boolean = true;
  isError: boolean = true;
  isSuccess: boolean = false;
  currClass: Record<string, boolean> = {};
  currStyles: Record<string, string> = {};
  onResolved() {
    this.status = 'resolved';
    this.currClass = {
      error: this.isError,
      success: this.isSuccess,
      savable: this.isSave,
      editable: this.isEdit,
    };
    this.currStyles = {
      color: this.isError ? 'red' : '',
      'font-weight': this.isSave ? 'bold' : 'normal',
    };
  }
}
