import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailListPage } from './mail-list.page';

const routes: Routes = [
  {
    path: '',
    component: MailListPage,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../mail-detail/mail-detail.module').then(
        (m) => m.MailDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailListPageRoutingModule {}
