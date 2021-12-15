import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { UserDataPageRoutingModule } from './user-data-routing.module';
import { UserDataPage } from './user-data.page';

@NgModule({
  imports: [SharedModule, UserDataPageRoutingModule],
  declarations: [UserDataPage],
})
export class UserDataPageModule {}
