const users = require('../solution-2-base/users.json');

//
// TODO 1
// Obtener el usuario cuyo teléfono es "024-648-3804"
//

console.log('=== 1 ===');

const userZipcode = users.find(u => u.phone === '024-648-3804');

//
// TODO 2
// Crear una función que devuelva true si existe un usuario cuyo email
// sea el que se pasa como parámetro
//

console.log('=== 2 ===');

const existsUser = email => users.some(u => u.email === email);

console.log(existsUser('Nathan@yesenia.net')); // true
console.log(existsUser('japostigo@atsistemas.com')); // false

//
// TODO 3
// Obtener el número de usuarios que tienen website
//

console.log('=== 3 ===');

const numUsersWithWebsite = users.filter(u => u.website).length;

//
// TODO 4
// Obtener el índice de la posición que toma en el array el primer usuario
// cuyo número de la calle de su dirección es menor que 300
//

console.log('=== 4 ===');

const userIndex = users.findIndex(u =>
  u.address && u.address.number && +u.address.number < 300);

console.log('userIndex', userIndex);

//
// TODO 5
// Obtener un array que sólo contenga las cadenas de los emails de los usuarios
//

console.log('=== 5 ===');

const usersEmails = users.map(u => u.email);

//
// TODO 6
// Obtener un array que contengan objetos {id: "id", username: "username"},
// que contienen los ids y los nombres de usuarios de los usuarios
//

console.log('=== 6 ===');

const usersIdUsername = users.map(u => ({
  id: u.id,
  username: u.username
}));

//
// TODO 7
// Obtener el array de usuarios pero con los números de sus direcciones en
// formato de número (y no de cadena que es como está ahora mismo)
//

console.log('=== 7 ===');

const usersAddressNumber = users.map(u => {

  if (u.address && u.address.number) {
    u.address.number = +u.address.number;
  }

  return u;
});

//
// TODO 8
// Obtener el array de usuarios cuya dirección está ubicada entre la
// latitud -50 y 50, y la longitud -100 y 100
//

console.log('=== 8 ===');

const usersLatLng = users.filter(u => u.address &&
  -50  < +u.address.geo.lat && +u.address.geo.lat < 50  &&
  -100 < +u.address.geo.lng && +u.address.geo.lng < 100);

//
// TODO 9
// Obtener un array con los teléfonos de los usuarios cuyo website
// pertenezca a un dominio biz
//

console.log('=== 9 ===');

const phonesWebsiteBiz = users
  .filter(u => u.website && u.website.endsWith('.biz'))
  .map(u => u.phone);

console.log(phonesWebsiteBiz);

//
// TODO 10
// Escriba una función processArray que, dado un array de números
// enteros, devuelva un nuevo array en que aquellos elementos que
// sean pares se multipliquen por 2.
//

console.log('=== 10 ===');

const testArray = [2, 3, 5, 6, 5, 9, 10, 12, 13];

const processArray = a => a.filter(x => x % 2 === 0).map(x => x * 2);

console.log(processArray(testArray)); // [4, 12, 20, 24]

//
// TODO 11
// Dado un array de cadenas, obtenga un objeto que tenga como claves cada
// una de las cadenas y cada uno de los valores de esas claves sea false
//

console.log('=== 11 ===');

const keys = ['key1', 'key2', 'key3'];

const obj = keys.reduce((r, k) => ({ ...r, [k]: false }), {});

console.log(obj); // { key1: false, key2: false, key3: false }

//
// TODO 12 (DIFÍCIL)
// Obtenga un objeto de la agrupación de los nombres de usuarios por nombre de
// empresa.
// Las claves del objeto serán los nombres de empresa y los valores de cada
// clave un array con los nombres de pila de los usuarios que pertenecen a esa
// empresa.
//

console.log('=== 12 ===');

const groupedUsers = users.reduce((r, u) => ({
  ...r,
  [u.company.name]: [ ...(r[u.company.name] || []), u.name]
}), {});

console.log(groupedUsers);
