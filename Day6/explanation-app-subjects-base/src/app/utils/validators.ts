import {AbstractControl} from '@angular/forms';

export const isNotTemporalEmailValidator = (control: AbstractControl) => {

  const temporalDomains = [
    '10minutesmail.com',
    'temporalmail.com',
    'preventspam.com'
  ];

  for (const domain of temporalDomains) {
    if (control.value.endsWith('@' + domain)) {
      return { isNotTemporalEmail: true };
    }
  }
};
