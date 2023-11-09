import { Directive } from '@angular/core';

import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCoordinateValidator]',
  standalone:true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CoordinateValidatorDirective,
      multi: true
    }
  ]
})
export class CoordinateValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null; // Boş değer kabul edilir
    }

    if (!isCoordinateValid(value)) {
      control.setErrors({ 'invalidCoordinate': true });
      return { invalidCoordinate: true }; // Geçersiz koordinat
    }
    control.setErrors(null);
    return null; // Geçerli bir koordinat
  }
}

function isCoordinateValid(value: string): boolean {
  // 8 haneli MGRS kontrolü
  const eightDigitPattern = /^[0-9]{8}$/;
  if (eightDigitPattern.test(value)) {
    return true;
  }

  // 10 haneli MGRS kontrolü
  const mgrsPattern = /^[0-9]{2}\s*[A-Z]{1,3}\s*\d{1,5}\s*\d{1,5}$/;
  if (mgrsPattern.test(value)) {
    return true;
  }

  // Enlem/boylam kontrolü
  const latLngPattern = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
  if (latLngPattern.test(value)) {
    return true;
  }

  // Geçersiz koordinat
  return false;
}
