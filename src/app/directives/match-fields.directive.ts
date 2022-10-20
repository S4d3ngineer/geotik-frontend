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
  @Input('appMatchFields') matchPassword: string[] = []; 

  validate(control: AbstractControl): ValidationErrors | null {
      return createMatchFieldsValidator(this.matchPassword[0], this.matchPassword[1])(control);
  }

}
