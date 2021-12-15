import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksDetailPage } from './books-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BooksDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksDetailPageRoutingModule {}
