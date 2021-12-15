import { Component, OnDestroy, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsersService } from './services/users.service';

import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  public userName$: Observable<string>;

  private complete$ = new Subject();

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'User details',
      url: '/user-details',
      icon: 'clipboard',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private usersService: UsersService,
    private translate: TranslateService
  ) {}

  public ngOnInit(): void {
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    this.translate.use('en');

    this.userName$ = this.usersService.user$.pipe(
      takeUntil(this.complete$),
      map((user) => user.name)
    );
  }

  ngOnDestroy(): void {
    this.complete$.next();
    this.complete$.complete();
  }
}
