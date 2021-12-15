import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'inbox',
    loadChildren: () =>
      import('./pages/mail/mail-list/mail-list.module').then(
        (m) => m.MailListPageModule
      ),
  },
  {
    path: 'user-data',
    loadChildren: () =>
      import('./pages/user-data/user-data.module').then(
        (m) => m.UserDataPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
