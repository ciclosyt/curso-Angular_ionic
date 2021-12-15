import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { MailListPageRoutingModule } from './mail-list-routing.module';
import { MailListPage } from './mail-list.page';

@NgModule({
  imports: [SharedModule, MailListPageRoutingModule],
  declarations: [MailListPage],
})
export class MailListPageModule {}
