import {
  Directive,
  HostListener,
  Input,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {
  @Input()
  private date: Date;
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }

  @HostListener('mouseenter')
  mouseEnter(eventDate: Event) {
    this.paragraph.innerHTML = this.date.toLocaleString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }
  @HostListener('mouseleave')
  mouseLeave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}
