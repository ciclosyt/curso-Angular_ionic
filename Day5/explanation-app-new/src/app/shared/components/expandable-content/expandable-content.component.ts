import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.scss'],
})
export class ExpandableContentComponent implements OnInit {
  @Input() title: string;
  @Output() changed = new EventEmitter<boolean>();

  isExpanded = false;

  constructor() {}

  ngOnInit() {}

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
    this.changed.emit(this.isExpanded);
  }
}
