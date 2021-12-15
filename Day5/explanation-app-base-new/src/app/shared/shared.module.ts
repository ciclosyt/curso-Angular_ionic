import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExpandableContentComponent } from './components/expandable-content/expandable-content.component';

@NgModule({
  declarations: [ExpandableContentComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [CommonModule, FormsModule, IonicModule, ExpandableContentComponent],
})
export class SharedModule {}
