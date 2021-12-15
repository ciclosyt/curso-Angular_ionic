import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fruit } from '../../models/fruit.model';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.scss']
})
export class FruitCardComponent implements OnInit {
  @Input() fruit: Fruit | null;
  @Output() deletePressed = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onDeletePressed() {
    this.deletePressed.emit();
  }
}
