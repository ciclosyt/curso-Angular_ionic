import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module')
        .then(m => m.HomePageModule)
  },
  {
    path: 'restorable-fruits-list',
    loadChildren: () =>
      import('./pages/restorable-fruits-list/restorable-fruits-list.module')
        .then(m => m.RestorableFruitsListPageModule)
  },
  {
    path: 'sandbox',
    loadChildren: () =>
      import('./pages/sandbox/sandbox.module')
        .then(m => m.SandboxPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
