import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength',
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: number): unknown {
    console.log(value, exponent);
    return Math.pow(value, exponent);
  }
}
