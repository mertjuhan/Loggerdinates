import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;

    // En az bir büyük harf kontrolü
    const upperCaseRegex = /[A-Z]/;
    if (!upperCaseRegex.test(value)) {
      return { uppercase: true };
    }

    // En az bir sayı kontrolü
    const numberRegex = /\d/;
    if (!numberRegex.test(value)) {
      return { number: true };
    }

    // En az bir simge kontrolü
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!symbolRegex.test(value)) {
      return { symbol: true };
    }

    // Geçerli durum
    return null;
  };
}
