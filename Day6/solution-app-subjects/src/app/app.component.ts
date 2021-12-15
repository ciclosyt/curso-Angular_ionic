import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { UsersService } from './services/users.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  public userName: string;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'User details',
      url: '/user-details',
      icon: 'clipboard'
    }
  ];

  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              private userService: UsersService) {

  }

  public ngOnInit(): void {

    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    this.userName = '';
    this.userService.getUser().subscribe((user: User) => {
      this.userName = user.name;
    });

    this.userService.userChanges.subscribe((user: User) => {
      this.userName = user.name;
    });
  }
}
