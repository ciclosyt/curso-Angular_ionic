import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FruitCardComponent } from './components/fruit-card/fruit-card.component';

@NgModule({
  declarations: [FruitCardComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [CommonModule, IonicModule, FormsModule, FruitCardComponent]
})
export class SharedModule {}
