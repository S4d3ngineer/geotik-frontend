import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createMatchFieldsValidator(controlName: string, matchControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const controlField = control.get(controlName);
    const matchControlField = control.get(matchControlName);

    if (matchControlField?.errors && !matchControlField.errors['matching']) {
      return null;
    }

    if (controlField?.value !== matchControlField?.value) {
      matchControlField?.setErrors({ matching: true });
      return { matching: true };
    } else {
      matchControlField?.setErrors(null);
      return null;
    }
  }
}
