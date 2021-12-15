import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksListPageRoutingModule } from './books-list-routing.module';

import { BooksListPage } from './books-list.page';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaderModule,
    BooksListPageRoutingModule
  ],
  declarations: [BooksListPage]
})
export class BooksListPageModule {}
