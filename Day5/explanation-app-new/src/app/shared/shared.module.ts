import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExpandableContentComponent } from './components/expandable-content/expandable-content.component';
import { LoadingFeedbackComponent } from './components/loading-feedback/loading-feedback.component';

@NgModule({
  declarations: [ExpandableContentComponent, LoadingFeedbackComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpandableContentComponent,
    LoadingFeedbackComponent,
  ],
})
export class SharedModule {}
