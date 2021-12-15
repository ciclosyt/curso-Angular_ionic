import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksDetailPageRoutingModule } from './books-detail-routing.module';

import { BooksDetailPage } from './books-detail.page';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoaderModule,
    BooksDetailPageRoutingModule
  ],
  declarations: [BooksDetailPage]
})
export class BooksDetailPageModule {}
