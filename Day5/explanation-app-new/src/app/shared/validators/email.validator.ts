import { AbstractControl } from '@angular/forms';

const bannedDomains = [
  '@temporal.com',
  '@temporal.net',
  '@temporal.org',
  '@yopmail.com',
];

export const isNotTemporalDomain = (control: AbstractControl) => {
  const currentEmail: string | undefined = control.value;
  const isBanned =
    !currentEmail ||
    bannedDomains.some((bannedDomain) => currentEmail.endsWith(bannedDomain));

  return isBanned ? { isNotTemporalDomain: true } : null;
};
