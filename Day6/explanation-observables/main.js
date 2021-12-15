const data = require('./data.json');

const { of, zip } = require('rxjs');
const { map, flatMap } = require('rxjs/operators');

//
// Funciones que simulan obtener los datos del servidor
// devolviendo un Observable que contiene el array de datos
//

const getBooksFromServer = () => {

  return of(data.books);
};

const getAuthorsFromServer = () => {

  return of(data.authors);
};

//
// La función getBooks es la que iría en el servicio,
// la function loadBooks es la que iría en el controlador
//

const getBooks = () => {

  return getBooksFromServer();
};

const loadBooks = () => {

  getBooks().subscribe((books) => {
    console.log(books);
  })
};

// loadBooks();

//
// Cargar los libros que contengan la palabra JavaScript
// en el titulo
//

const getBooksJavascriptInTitle = () => {

  return getBooksFromServer()
    .pipe(map((books) => {
      return books.filter(b => b.title.includes('JavaScript'));
    }));
};

const loadBooksJavascriptInTitle = () => {

  getBooksJavascriptInTitle().subscribe((books) => {
    console.log(books);
  })
};

// loadBooksJavascriptInTitle();

//
// Cargar un autor dado su id
//

const getAuthorById = (id) => {

  return getAuthorsFromServer()
    .pipe(map((authors) => {
      return authors.find(a => a.id === id);
    }))
};

const loadAuthorById = (id) => {

  getAuthorById(id).subscribe((author) => {
    console.log(author);
  })
};

// loadAuthorById(1);

//
// Cargar los libros, pero que en lugar del atributo published,
// aparezca un atributo year que contiene el número del año de publicación
//

const getBooksWithYear = () => {

  return getBooksFromServer()
    .pipe(map((books) => {
      return books.map((book) => {
        book.year = +book.published.split('-', 1)[0];
        delete book.published;
        return book;
      });
    }));
};

const loadBooksWithYear = () => {

  getBooksWithYear().subscribe((books) => {
    console.log(books);
  })
};

// loadBooksWithYear();

//
// Cargar los títulos de los libros que tengan más de minPages páginas
//

const getBookNames = (minPages) => {

  return getBooksFromServer()
    .pipe(map((books) => {
      return books.filter(b => b.pages > minPages)
        .map(b => b.title);
    }));
};

const loadBooksNames = (minPages) => {

  getBookNames(minPages).subscribe((books) => {
    console.log(books);
  })
};

// loadBooksNames(300);

//
// Cargar el autor de un libro cuyo titulo se pasa como parametro
//

const getAuthorOfBook = (bookTitle) => {

  return getBooksFromServer()
    .pipe(map((books) => {
      return books.find(b => b.title === bookTitle);
    }), flatMap((book) => {
      return getAuthorById(book.authorId)
    }));
};

const loadAuthorOfBook = (bookTitle) => {

  getAuthorOfBook(bookTitle).subscribe((author) => {
    console.log(author);
  })
};

loadAuthorOfBook('Speaking JavaScript');

//
// Cargar todos los libros y todos los autores
//

const getBooksAndAuthors = () => {

  return zip(getBooksFromServer(), getAuthorsFromServer());
};

const loadBooksAndAuthors = () => {

  getBooksAndAuthors().subscribe((booksAndAuthors) => {
    console.log('Books:', booksAndAuthors[0]);
    console.log('Authors:', booksAndAuthors[1]);
  })
};

// loadBooksAndAuthors();

//
// Cargar un libro dado su id, pero que no contenga la propiedad authorId,
// si no una propiedad author que contenga el objeto author que le corresponde
//

const getBookByIdWithAuthor = (bookId) => {

  return getBooksFromServer()
    .pipe(map((books) => {
      return books.find(b => b.id === bookId)
    }), flatMap((book) => {
      return getAuthorById(book.authorId)
        .pipe(map((author) => {
          delete book.authorId;
          book.author = author;
          return book;
        }))
    }));
};

const loadBookByIdWithAuthor = (bookId) => {

  getBookByIdWithAuthor(bookId).subscribe((book) => {
    console.log(book);
  })
};

// loadBookByIdWithAuthor(1);
