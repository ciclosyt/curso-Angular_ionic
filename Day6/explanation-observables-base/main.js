const data = require('./data.json');

const { of, zip, from, forkJoin } = require('rxjs');
const { map, mergeMap, take, tap } = require('rxjs/operators');

// console.log(`data`, data);

// Funciones que simulan obtener los datos del servidor devolviendo
// un Observable que contiene el array pertinente

const getBooksFromServer = () => {
  return of(data.books);
};

const getAuthorsFromServer = () => {
  return of(data.authors);
};

// Funciones que estarían en el servicio

const getBooks = () => {
  return getBooksFromServer();
};

// Funcion que iría en el controlador del componente

const loadBooks = () => {
  getBooks().subscribe(
    (books) => {
      console.log('books', books);
    },
    () => {
      // Error
    },
    () => {
      // Completado
    }
  );
};

// loadBooks();

// Cargar los libros que contengan la palabra JavaScript en
// el título

const getBooksJavascriptInTitle = () => {
  return getBooksFromServer().pipe(
    map((books) => books.filter((book) => book.title.includes('JavaScript')))
  );
};

const loadBooksJavascriptInTitle = () => {
  getBooksJavascriptInTitle().subscribe((books) => {
    console.log('books', books);
  });
};

// loadBooksJavascriptInTitle();

// Cargar un autor dado su id

const getAuthorById = (id) => {
  return getAuthorsFromServer().pipe(
    map((authors) => authors.find((author) => author.id === id))
  );
};

const loadAuthorById = (id) => {
  getAuthorById(id).subscribe((author) => {
    console.log('author', author);
  });
};

// loadAuthorById(5);

// Cargar los libros, pero que en lugar del atributo published,
// aparezca un atributo year que contiene el número del año de publicación
//

const getBooksWithYear = () => {
  return getBooksFromServer().pipe(
    map((books) => {
      return books.map((book) => {
        const { published } = book;
        book.year = +published.substr(0, 4);
        delete book.published;

        return book;
      });
    })
  );
};

const loadBooksWithYear = () => {
  getBooksWithYear().subscribe((books) => {
    console.log('books', books);
  });
};

// loadBooksWithYear();

//
// Cargar los títulos de los libros que tengan más de minPages páginas
//

const getBookTitles = (minPages) => {
  return getBooksFromServer().pipe(
    map((books) => {
      return books
        .filter((book) => book.pages >= minPages)
        .map((book) => book.title);
    })
  );
};

const loadBookTitles = (minPages) => {
  getBookTitles(minPages).subscribe((books) => {
    console.log('books', books);
  });
};

// loadBookTitles(400);

//
// Cargar el autor de un libro cuyo titulo se pasa como parametro
//

const getAuthorOfBook = (bookTitle) => {
  return getBooksFromServer().pipe(
    map((books) => {
      return books.find((_book) => _book.title === bookTitle);
    }),
    mergeMap((book) => {
      return getAuthorsFromServer().pipe(
        map((authors) => {
          return authors.find((author) => author.id === book.authorId);
        })
      );
    })
  );
};

const loadAuthorOfBook = (bookTitle) => {
  getAuthorOfBook(bookTitle).subscribe((author) => {
    console.log('author', author);
  });
};

// loadAuthorOfBook('Understanding ECMAScript 6');

//
// Cargar todos los libros y todos los autores
//

const getBooksAndAuthors = () =>
  forkJoin({
    books: getBooksFromServer(),
    authors: getAuthorsFromServer(),
  });

const loadBooksAndAuthors = () =>
  getBooksAndAuthors().subscribe(({ books, authors }) => {
    console.log('books', books);
    console.log('authors', authors);
  });

// loadBooksAndAuthors();

//
// Cargar un libro dado su id, pero que no contenga la propiedad authorId,
// si no una propiedad author que contenga el objeto author que le corresponde
//

const getBookByIdWithAuthor = (bookId) => {
  return getBooksFromServer().pipe(
    map((books) => {
      return books.find((book) => book.id === bookId);
    }),
    mergeMap((book) => {
      return getAuthorById(book.authorId).pipe(
        map((author) => {
          delete book.authorId;
          books.author = author;
          return book;
        })
      );
    })
  );
};

const loadBookByIdWithAuthor = (bookId) => {
  getBookByIdWithAuthor(bookId).subscribe((book) => {
    console.log('book', book);
  });
};

loadBookByIdWithAuthor();
