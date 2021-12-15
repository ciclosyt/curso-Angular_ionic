import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  // {
  //   path: 'books/:id',
  //   loadChildren: () => import('./pages/book-details/book-details.module').then(m => m.BookDetailsModule)
  // },
  {
    path: 'books',
    loadChildren: () => import('./pages/books-list/books-list.module').then(m => m.BooksListModule)
  },
  {
    path: '**',
    redirectTo: 'home' // It would be better having a 404 not found page
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
