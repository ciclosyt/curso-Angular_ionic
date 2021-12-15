import { NgModule } from '@angular/core';
import { SandboxPageRoutingModule } from './sandbox-routing.module';

import { SandboxPage } from './sandbox.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SandboxPageRoutingModule
  ],
  declarations: [SandboxPage]
})
export class SandboxPageModule {}
