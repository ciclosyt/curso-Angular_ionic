import { NgModule } from '@angular/core';

import { FruitRoutingModule } from './fruit-routing.module';
import { FruitsListPage } from './fruits-list.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule, FruitRoutingModule],
  declarations: [FruitsListPage]
})
export class FruitsListPageModule {}
