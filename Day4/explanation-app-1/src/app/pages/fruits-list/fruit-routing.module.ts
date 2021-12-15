import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FruitsListPage } from './fruits-list.page';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FruitsListPage
      }
    ])
  ],
  exports: [RouterModule]
})
export class FruitRoutingModule {}
