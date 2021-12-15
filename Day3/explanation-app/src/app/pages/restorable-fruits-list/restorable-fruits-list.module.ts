import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestorableFruitsListPageRoutingModule } from './restorable-fruits-list-routing.module';

import { RestorableFruitsListPage } from './restorable-fruits-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestorableFruitsListPageRoutingModule
  ],
  declarations: [RestorableFruitsListPage]
})
export class RestorableFruitsListPageModule {}
