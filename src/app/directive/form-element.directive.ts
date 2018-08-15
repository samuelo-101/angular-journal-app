import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormElement]'
})
export class FormElementDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.width = '100%';
  }

}
