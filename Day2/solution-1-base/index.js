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




//
// TODO 2
//
// Refactoriza el siguiente código usando la sintaxis de ES6
// y la función iteradora correcta
//

var PI = 3.14;

function getCircleArea(r) {
  return PI * r * r;
}

var radius = [2, 3, 5];

for(var i = 0; i < radius.length; i++) {
  console.log('r = ' + radius[i]  + ', area = ' + getCircleArea(radius[i]));
}


//
// TODO 3
//
// Refactoriza el siguiente código usando la sintaxis de ES6
//

var prop2 = 'value2';

var obj = {

  prop1: 'value1',

  prop2: prop2,

  function1: function(param) {

    if(param === undefined) {
      param = 1;
    }

    console.log(param);
  }
};


//
// TODO 4
//
// Refactoriza el siguiente código usando la sintaxis de ES6
//

var object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

var a = object.a;
var b = object.b;
var c = object.c;
var d = object.d;
var e = object.e;


var array = [0, 1, 2, 3, 4, 5];

var a1 = array[1];
var a3 = array[3];
var a4 = array[4];
var a5 = array[5];


//
// TODO 5
//
// Refactoriza el siguiente código usando la sintaxis de ES6
//

var array1 = [0, 1, 2, 3];
var array2 = [4, 5, 7, 8];

var res = [];

for (i = 0; i < array1.length; i++) {
  res.push(array1[i]);
}

for (i = 0; i < array2.length; i++) {
  res.push(array2[i]);
}

res.push(9);
res.push(10);


//
// TODO 6
//
// Crea un nuevo objeto `discountedFridge`, basado en el objeto `fridge` que se
// provee, conservando las mismas propiedades, pero que tenga una nueva propiedad
// `isDiscounted` a `true` y un 20% de descuento aplicado a su precio `price`
//

var fridge = {
  id: 1,
  name: 'Fridge',
  description: 'Amazing fridge',
  price: 500
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
