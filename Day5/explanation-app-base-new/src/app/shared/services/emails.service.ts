import { Injectable } from '@angular/core';
import { Email } from '../models/email.model';

@Injectable({
  providedIn: 'root',
})
export class EmailsService {
  private emails: Email[] = [
    {
      id: 1,
      title: 'title1',
      body: 'body1',
    },
    {
      id: 2,
      title: 'title2',
      body: 'body2',
    },
    {
      id: 3,
      title: 'title3',
      body: 'body3',
    },
  ];

  constructor() {}

  getEmails(): Email[] {
    return this.emails;
  }

  getEmail(id: number): Email {
    return this.emails.find((email) => email.id === id);
  }
}
