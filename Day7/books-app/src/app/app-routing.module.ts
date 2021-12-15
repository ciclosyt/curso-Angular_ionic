import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books-list',
    loadChildren: () => import('./pages/books-list/books-list.module').then( m => m.BooksListPageModule)
  },
  {
    path: 'books-detail',
    loadChildren: () => import('./pages/books-detail/books-detail.module').then( m => m.BooksDetailPageModule)
  },
  {
    path: 'books-detail/:id',
    loadChildren: () => import('./pages/books-detail/books-detail.module').then( m => m.BooksDetailPageModule)
  },
  {
    path: '',
    redirectTo: 'books-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
