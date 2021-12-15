import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoaderState } from 'src/app/models/loader-state.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() state: LoaderState = LoaderState.loading;
  @Output() retry = new EventEmitter();

  public loaderState = LoaderState;

  onRetry() {
    this.retry.emit();
  }
}
