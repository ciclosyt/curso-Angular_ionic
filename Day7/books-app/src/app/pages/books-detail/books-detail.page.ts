import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { LoaderState } from 'src/app/models/loader-state.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.page.html',
  styleUrls: ['./books-detail.page.scss'],
})
export class BooksDetailPage implements OnInit {
  public book;
  public bookState: LoaderState = LoaderState.loading;
  public form: FormGroup;

  private bookId: number;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      language: ['', [Validators.required]],
      edition: ['', [Validators.required]],
    });

    this.bookId = this.route.snapshot.params.id;

    console.log(`this.bookId`, this.bookId);

    if (this.bookId) {
      this.loadBook();
    }
  }

  loadBook() {
    this.bookState = LoaderState.loading;
    this.booksService.getBookById(this.bookId).subscribe(
      (book) => {
        console.log(`book`, book);
        const { id, ...rest } = book;
        this.form.patchValue(rest);
        this.bookState = LoaderState.loaded;
      },
      (error) => {
        console.error(error);

        this.bookState = LoaderState.error;
      }
    );
  }

  updateOrCreateBook() {
    console.log('form', this.form);

    if (this.form.valid) {
      if (this.bookId) {
        const book: Book = { id: this.bookId, ...this.form.value };
        this.booksService.updateBook(book).subscribe();
      } else {
        // Create
      }
    }
  }
}
