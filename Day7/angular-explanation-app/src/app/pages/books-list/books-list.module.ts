import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksListComponent } from './books-list.component';

@NgModule({
  declarations: [
    BooksListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BooksListComponent
      }
    ])

  ]
})
export class BooksListModule { }
