import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inbox',
    pathMatch: 'full',
  },
  {
    path: 'inbox',
    loadChildren: () =>
      import('./pages/mail-list/mail-list.module').then(
        (m) => m.MailListPageModule
      ),
  },
  {
    path: 'sandbox',
    loadChildren: () => import('./pages/sandbox/sandbox.module').then( m => m.SandboxPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
