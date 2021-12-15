//
// TODO 1
//
// Crea un modulo `car.js` que contenga una clase `Car` con dos atributos:
// `brand` y `km`.
//
// El constructor sólo aceptaría el parámetro `brand`, porque `km` se inicia a 0.
//
// Dispondría de dos métodos:
//  - `move(km)`: incrementa `km` según la cantidad
//  - `toString()`: que devuelve un string con `brand` y `km`
//
// Importa el módulo en este archivo para instanciar un coche `wv` de la marca
// 'Volkswagen', regístrale un movimiento de 100 km y luego mostrar por consola
// la salida de su método `toString()`

const { Car } = require('./car');

const wv = new Car('Volkswagen');

wv.move(100);

// console.log(wv.toString());


//
// TODO 2
//
// Refactoriza el siguiente código usando la sintaxis de ES6
// y la función iteradora correcta
//

const PI = 3.14;

const getCircleArea = r => PI * r * r;

const radius = [2, 3, 5];

radius.forEach(r =>
  console.log(`r = ${r}, area = ${getCircleArea(r)}`)
)


//
// TODO 3
//
// Refactoriza el siguiente código usando la sintaxis de ES6
//

const prop2 = 'value2';

const obj = {

  prop1: 'value1',

  prop2,

  function1(param = 1) {
    console.log(param);
  }
};


//
// TODO 4
//
// Refactoriza el siguiente código usando la sintaxis de ES6
//

const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

const { a, b, c, d, e } = object;


const array = [0, 1, 2, 3, 4, 5];

const [ , a1, , a3, a4, a5 ] = array;


//
// TODO 5
//
// Refactoriza el siguiente código usando la sintaxis de ES6
//

const array1 = [0, 1, 2, 3];
const array2 = [4, 5, 7, 8];

const res = [
  ...array1,
  ...array2,
  9,
  10
];


//
// TODO 6
//
// Crea un nuevo objeto `discountedFridge`, basado en el objeto `fridge` que se
// provee, conservando las mismas propiedades, pero que tenga una nueva propiedad
// `isDiscounted` a `true` y un 20% de descuento aplicado a su precio `price`
//

const fridge = {
  id: 1,
  name: 'Fridge',
  description: 'Amazing fridge',
  price: 500
};

const discountedFridge = {
  ...fridge,
  isDiscounted: true,
  price: fridge.price * 0.2
};

//
// TODO 7
//
// Implementa una función `mergeFiles(pathSrc1, pathSrc2, pathFileOut)` que lea
// el contenido de los ficheros cuyas rutas son `pathSrc1` y `pathSrc1` y
// escriba en el fichero con ruta `pathFileOut` el resultado de concatenar
// ambos contenidos. Que muestre por consola 'Output file wrote!' **solo si ha
// ido bien**. En caso de error, que muestre la información del error por consola.
//
// Invócala con los ficheros de entrada `./input1.txt` y './input2.txt' y
// y escribe el resultado en `./output.txt`.
//
// fs.writeFile(filePath, fileContents)
//

const fs = require('fs/promises');

async function mergeFiles(pathSrc1, pathSrc2, pathFileOut) {

  try {

    const src1 = await fs.readFile(pathSrc1, 'utf8');
    const src2 = await fs.readFile(pathSrc2, 'utf8');

    // It's important to await the writing although we don't care about the returned
    // value because, if not, in case of error, the console.log will execute anyway!
    await fs.writeFile(pathFileOut, src1 + src2);

    console.log('Output file wrote!');

  } catch(error) {

    console.error(error);
  }
}

(async function() {

  await mergeFiles(
    '../solution-1-base/input1.txt',
    '../solution-1-base/input2.txt',
    '../solution-1-base/output.txt',
  );

}());
