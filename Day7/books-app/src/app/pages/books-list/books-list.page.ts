import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Book } from 'src/app/models/book.model';
import { LoaderState } from 'src/app/models/loader-state.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.page.html',
  styleUrls: ['./books-list.page.scss'],
})
export class BooksListPage {
  public books: Book[] = [];
  public booksState: LoaderState = LoaderState.loading;

  public complete$ = new Subject();

  constructor(
    private booksService: BooksService,
    private navCtrl: NavController
  ) {}

  ionViewDidEnter() {
    // this.loadBooks();

    this.booksService.books$
      .pipe(takeUntil(this.complete$))
      .subscribe((books) => {
        this.booksState = LoaderState.loaded;
        this.books = books;
      });
  }

  ionViewWillLeave() {
    this.complete$.next();
    this.complete$.complete();
  }

  loadBooks() {
    this.booksState = LoaderState.loading;

    this.booksService.getBooks().subscribe(
      (books) => {
        this.books = books;
        this.booksState = LoaderState.loaded;
      },
      (error) => {
        console.error(error);
        this.booksState = LoaderState.error;
      }
    );
  }
}
