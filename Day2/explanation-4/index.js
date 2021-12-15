const books = require('../explanation-4-base/books.json');

//
// 1
// Obtener el primer libro del catálogo que tenga de `edition` el valor `first`
//

const firstEdition = books.find(b => b.edition === 'first');


//
// 2
// Obtener el índice en que se encuentra el primer libro del catálogo cuyo
// `publisher` sea `Sun Microsystems`
//

const indexFirstPublisher = books.findIndex(b => b.publisher === 'Sun Microsystems');


//
// 3
// Obtener el conjunto de libros cuyo `language` sea `JavaScript`
// `publisher` sea `Sun Microsystems`
//

const javaScriptBooks = books.filter(b => b.language === 'JavaScript');


//
// 4
// Saber si existe algún libro que contenga el su título la cadena "Java"
//

const javaExists = books.some(b => b.title.includes('Java'));


//
// 5
// Saber si todos los libros del catálogo tienen un `id` mayor que 0
//

const positiveId = books.every(b => b.id > 0);


//
// 6
// Obtener los títulos de todos los libros
//

const booksTitles = books.map(b => b.title);


//
// 7
// Obtener los títulos de aquellos libros cuyo `language` sea `JavaScript`
//

const javascriptBooksTitles = books
  .filter(b => b.language === 'JavaScript')
  .map(b => b.title);


//
// 8
// Obtener un array de las distintas ediciones disponibles
//

const editions1 = books.reduce((res, b) => (
  res.includes(b.edition) ? res : [...res, b.edition]
), []);

// Se podría haber hecho solo con map y filter, con una solución algo más ingeniosa:

const editions2 = books
  .map(b => b.edition)
  .filter((e, i, a) => i === a.findIndex(x => x === e));


//
// 9
// Obtener un objeto con el recuento de libros por edición
// (a priori se desconocen las posibles ediciones)
// Para el caso, el resultado sería: { third: 8, second: 2, first: 1 }
//

const editionsCount = books.reduce((res, b) => ({
  ...res,
  [b.edition]: (res[b.edition] || 0) + 1
}), {});
