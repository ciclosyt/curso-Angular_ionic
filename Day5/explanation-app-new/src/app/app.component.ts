import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user.model';
import { LabelsService } from './shared/services/labels.service';
import { UserDataService } from './shared/services/user-data.service';

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
  user: User | null = null;
  state: 'loading' | 'loaded' | 'error' = 'loading';

  constructor(
    private labelsService: LabelsService,
    private userDataService: UserDataService
  ) {}

  ngOnInit() {
    this.labels = this.labelsService.getLabels();

    this.getUser();
  }

  getUser(): void {
    this.state = 'loading';
    this.userDataService.getUser().subscribe(
      (user: User) => {
        this.user = user;
        this.state = 'loaded';
      },
      (error) => {
        this.state = 'error';
      }
    );
  }
}
