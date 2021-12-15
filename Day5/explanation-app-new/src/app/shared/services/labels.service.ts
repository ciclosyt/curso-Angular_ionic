import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LabelsService {
  private labels = [
    'Family',
    'Friends',
    'Notes',
    'Work',
    'Travel',
    'Reminders',
  ];

  constructor() {}

  getLabels(): string[] {
    return this.labels;
  }
}
