import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RestorableFruitsListPage } from './restorable-fruits-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RestorableFruitsListPage
      }
    ])
  ],
  declarations: [RestorableFruitsListPage]
})
export class RestorableFruitsListPageModule {}
