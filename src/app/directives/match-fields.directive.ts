import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { createMatchFieldsValidator } from '../validators/match-fields.validator';

@Directive({
  selector: '[appMatchFields]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MatchPasswordDirective,
    multi: true
  }]
})
export class MatchPasswordDirective implements Validator {
  @Input('appMatchFields') matchPassword: [string, string] | undefined; 

  validate(control: AbstractControl): ValidationErrors | null {
      if (this.matchPassword) {
        return createMatchFieldsValidator(...this.matchPassword)(control);
      } else {
        return null;
      }
  }

}
