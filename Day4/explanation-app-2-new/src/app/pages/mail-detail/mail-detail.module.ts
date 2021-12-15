import { NgModule } from '@angular/core';

import { MailDetailPageRoutingModule } from './mail-detail-routing.module';

import { MailDetailPage } from './mail-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, MailDetailPageRoutingModule],
  declarations: [MailDetailPage],
})
export class MailDetailPageModule {}
