import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input('appHighlight') highlightColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'pink';
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
