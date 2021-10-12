import { Component } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css'],
})
export class DemopipeComponent {
  str: string = 'Abc';
  amount = 21000;
  birthday = new Date(1987, 3, 15);
  pervalue = 0.56589;
  decimalvalue = 12.63585858866; // 012.63589
}
