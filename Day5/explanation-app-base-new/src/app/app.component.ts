import { Component, OnInit } from '@angular/core';
import { LabelsService } from './shared/services/labels.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Inbox', url: '/inbox', icon: 'mail' },
    { title: 'User Data', url: '/user-data', icon: 'person-circle' },
  ];

  labels: string[];

  constructor(private labelsService: LabelsService) {}

  ngOnInit() {
    this.labels = this.labelsService.getLabels();
  }
}
