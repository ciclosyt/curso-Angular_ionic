import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  public books$ = new ReplaySubject<Book[]>();

  private privateBooks: Book[] = [];

  constructor(private http: HttpClient) {}

  get books() {
    return this.privateBooks;
  }

  set books(books: Book[]) {
    this.privateBooks = books;
    this.books$.next(books);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiUrl}/books`).pipe(
      tap((books) => {
        this.books = books;
        console.log('books', books);
      })
    );
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${environment.apiUrl}/books/${id}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http
      .put<Book>(`${environment.apiUrl}/books/${book.id}`, book)
      .pipe(
        tap(() => {
          this.books = this.books.map((bk) => {
            if (+bk.id === +book.id) {
              return book;
            }

            return bk;
          });
        })
      );
  }
}
