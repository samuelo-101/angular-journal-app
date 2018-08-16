import { FormElementDirective } from './form-element.directive';
import { Input } from '@angular/core';

describe('FormElementDirective', () => {
  it('should create an instance', () => {
    const directive = new FormElementDirective(new Input());
    expect(directive).toBeTruthy();
  });
});
