import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe();
  }
}
