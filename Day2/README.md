# JavaScript

## Conceptos

- Introducción a la tecnología web

- Desarrollo JavaScript en el lado del servidor (Node.js y npm)

- Repaso a la sintaxis de ES6

- Promesas y _async_/_await_ de ES8

- Funciones de iteración

## Introducción a la tecnología web

- Comunicación cliente - servidor a través de HTTP.

- MPA (Multi Page Applications) vs SPA (Single Page Applications).

## Desarrollo JavaScript en el lado del servidor (Node.js y npm)

### Conceptos

- [V8](https://v8.dev/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Instalación de Node.js

- [Instalador de Node.js](https://nodejs.org/en/download/):
  instala una única versión de Node.js en el sistema.

- [nvm](https://github.com/nvm-sh/nvm)
  ([nvm-windows](https://github.com/coreybutler/nvm-windows)):
  permite disponer en el sistema de varias versiones de Node.js instaladas.

### Creación un paquete de Node.js _hello-world_ ([explanation-1](explanation-1/index.js))

- `npm init`

- Explicación del archivo _package.json_.

- Creamos un archivo _index.js_ añadimos `console.log('Hello world')`.

- Diferentes formas de ejecutarlo:
  - `node index.js`
  - `node .` (porque en _package.json_ `"main": "index.js"`).
  - `npm start` (si configuramos en _package.json_ el script `"start": "node ."`).

- Creemos una función `formatDateVanilla` que formatee un objeto `Date` de
  JavaScript. Usémosla para formatear la fecha y hora actual.

- Hagamos lo mismo usando la librería [date-fns](https://date-fns.org/):
  `npm install date-fns`.

- La importamos con `require`, que es como se importan los módulos en Node.js
  (en el standard de JavaScript se hace con la palabra clave `import`).

- Explicación del nuevo nodo `dependencies` en _package.json_ y la creación de
  _node_modules/_ y _package-lock.json_.

- _node_modules/_ no debe formar parte del código del repositorio (debe
  ignorarse desde _.gitignore_).

- Simular que recién se descarga el código (no existe _node_modules/_),
  comprobamos que así no funciona la ejecución de `npm start`: antes hay que
  hacer `npm install` (o `npm i`) para volver a disponer de _node_modules/_.

- También se puede usar npm para instalar un paquete de manera global en el
  sistema:
  ```
  npm i -g http-server
  ```

- Típicamente, el _README.md_ del proyecto debe contener instrucciones de
  instalación y uso del proyecto. Creemos uno con
  [sintaxis markdown](https://www.markdownguide.org/basic-syntax/).

- Vistazo a un módulo de Node.js _real_: _node_modules/date-fns_.

- Con los [scripts de npm](https://docs.npmjs.com/misc/scripts/) podemos
  escribir comandos que resultan útiles en el proyecto en que se está trabajando
  (ejecución del servidor local de desarrollo, del servidor de mocks, ejecutar
  las pruebas, etc.).

- Los scripts se ejecutan con `npm run <script>`. Los scripts `start` y `test`
  son especiales porque también se pueden ejecutar con `npm start` y `npm test`
  respectivamente.

- También existen scripts especiales que se ejecutan en determinadas fases del
  ciclo de vida del paquete. Por ejemplo, el script `postinstall` se ejecuta
  después de que haya finalizado satisfactoriamente la instalación (`npm i`).

- Si en el proyecto disponemos de un paquete ejecutable entre las dependencias
  instaladas, podemos invocarlo en los comandos de script como si estuviese
  instalado globalmente. Por ejemplo, si tenemos `http-server` como dependencia
  local, podemos disponer del siguiente script que lanza su ejecución:
  ```
  "launch-server": "http-server dist/"
  ```

- Creemos un módulo _date-formatter.js_ que contendrá ambas funciones de
  formateo de fechas. Incluyamos un `console.log` para trazar si lo importamos
  correctamente en nuestra aplicación.
  
- Lo importamos con:
  ```js
  const dateFormatter = require('./date-formatter');
  ```
  (observa que la ruta es `./date-formatter`, ¡porque si fuese `date-formatter`,
  buscaría el módulo en _node_modules/_!)
  
- Observamos que el módulo se importa (porque se muestra el `console.log`
  contenido en él). Pero ¿cómo usamos las funciones contenidas en él? (porque en
  la constante `dateFormatter` _no hay nada_).

- El módulo exportará el contenido de `module.exports`. Probemos a exportar una
  constante, y luego un objeto con las propiedades que queramos exportar. El
  resto de cosas no expuestas contenidas en el módulos serían _privadas_.

- Node.js copia el código del módulo dentro de esta función y la ejecuta:
  ```js
  (function(exports, require, module, __filename, __dirname) {
    // Module code actually lives in here
  });
  ```
  Referencia: [the module wrapper](https://nodejs.org/api/modules.html#modules_the_module_wrapper).
  Los parámetros de la función están disponibles para ser usados:
  - `exports`: es una referencia a `module.exports`
  - `require`: función para importar otros módulos
  - `module`: representa el módulo
  - `__filename`: ruta del archivo del módulo
  - `__dirname`: ruta de la carpeta del módulo

- Para ejecutar un script de Node.js no hace falta hacer todo un paquete (con
  su _package.json_, etc.) como acabamos de hacer. De hecho, de aquí en
  adelante, por comodidad, ejecutaremos ficheros de manera aislada con
  `node <file>`.

## Repaso a la sintaxis de ES6 ([explanation-2](explanation-2/index.js))

Trabajaremos sobre [explanation-2-base](explanation-2-base/index.js). Contiene
código ES5 que debemos codificar su equivalente en ES6, atendiendo a los
siguientes conceptos:

- `const` y `let`. Es buena práctica: declarar siempre con `const` y si vemos
  que debe ser variable, se cambia a `let`.

- Clases. _Azúcar sintáctico_ para la OOP en JavaScript, que se basa en la
  herencia con la cadena de prototipos.

- Plantillas de cadenas.

- Funciones flecha.

- Propiedades de objetos mejoradas.

- Operador de extensión (spread operator: `...`). La encontraremos también para
  conseguir la _inmutabilidad_ de objetos, paso de número de parámetros
  desconocidos, recuperación de número de parámetros desconocidos...

- Desestructuración. La encontraremos también en las importaciones.

- Valores por defecto en parámetros de funciones.

## Promesas y _async_/_await_ de ES8 ([explanation-3](explanation-3/index.js))

- Implementaremos una función `logFileContent(filePath)` que muestre por consola
  el contenido del fichero cuya ruta se le pase como parámetro. En caso de
  error, mostraría la información de este.

- Usaremos el módulo de filesystem con Promesas que proporciona Node:
  ```js
  const fs = require('fs/promises');

  fs.readFile(filePath, 'utf8');
  ...
  ```

- En primer lugar, veremos cómo dar solución a este problema con la manera en
  que se manejaban las promesas con ES5: usando las funciones `then` y `catch`.
  
- Probamos que gestiona correctamente la lectura del fichero en caso de éxito o,
  en caso contrario, muestra el error (poniendo una ruta errónea, por ejemplo).
  
- Ahora demos solución al mismo problema usando las palabras claves `async`
  y `await`. Encerramos el código en un bloque `try/catch` para manejar los
  errores.

- La idea es: cuando se consume una Promesa, la expresión debe estar precedida
  por `await`, y una función que contiene `await`, debe ser `async`.

- _El código se detiene en await_, simulando sincronía, hasta que la Promesa
  se resuelve o rechaza.

- En nuestro código principal, da error si ponemos `await` sin estar dentro
  de una función que sea `async`. Podemos resolve este problema consumiendo la
  promesa dentro de un closure de función `async`:
  ```js
  (async function() {
    ...
  })();
  ```

- Por ahora hemos usado (consumido) Promesas, pero ¿cómo podríamos crear
  nuestras propias Promesas? Por ejemplo, una función `getPromise(n)` que
  devuelve una Promesa que se resuelve en 1 segundo de manera exitosa
  respondiendo `n` si `n` es distinto de 0; o lanzando un error, si `n` es 0.

## Funciones de iteración ([explanation-4](explanation-4/index.js))

Trabajaremos sobre [explanation-4-base](explanation-4-base/index.js) resolviendo
los ejercicios propuestos en los comentarios del código, haciendo uso de las
funciones de iteración que incluye JavaScript:

### Documentación de algunas funciones de iteración

- [find](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find):
  devuelve el primer elemento que cumple el predicado; `undefined` en caso contrario

- [findIndex](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex):
  devuelve el índice del primer elemento que cumple el predicado; `-1` en caso contrario.

- [filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter):
  devuelve un **nuevo** array con los elementos que cumplen el predicado (`[]` si no lo cumple ninguno).

- [some](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some):
  devuelve `true` si algún elemento del array cumple el predicado; `false` en caso contrario.

- [every](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every):
  devuelve `true` si todos los elementos del array cumple el predicado; `false` en caso contrario.

- [map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map):
  devuelve un **nuevo** array con el resultado de aplicar la función a cada uno de los elementos del array.

- [reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce):
  itera el array aplicando una función y devolviendo como resultado un único valor.

- [forEach](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):
  ejecuta la función indicada por cada elemento del array.

### Notas y consejos

- En la función de callback que se usa para iterar, después del parámetro que
  contiene el valor sobre el que se está iterando, viene el índice de la
  iteración actual, y luego el propio array que se está iterando.

- En algunos problemas, resulta de gran utilidad combinar estas funciones.

- Se debe evitar en la medida de lo posible la iteracción manual de los arrays
  con bucles `for`, a favor del uso de cualquiera de las anteriores o
  combinación de las mismas.
  
- Si se necesita iterar un array para hacer un procesamiento que no genera
  ningún resultado (por ejemplo, imprimir por consola los valores del array),
  se debe usar `forEach` (en vez de usar un bucle `for`).

- No tiene sentido combinar varios `filter` seguidos: se podría hacer con uno
  solo con un predicado que abarque los casos de ambos. De manera análoga ocurre
  con `map`.

- Si tienes un array de N elementos y necesitas obtener otro array con algunos
  de estos elementos, probablemente estés ante un caso de uso de `filter`.

- Si tienes un array de N elementos y necesitas obtener otro array del mismo
  número de elementos, basados en ellos, probablemente estés ante un caso
  de uso de `map`.

- Si necesitas procesar los datos de un array, no te basta con `filter` y `map`
  y/o te ves en la obligación de iterar el array de manera manual, probablemente
  estés ante un caso de uso de `reduce`.

## Ejercicio 1 ([solution-1](solution-1/index.js))

Da solución a los pequeños ejercicios de ES6 (y ES8 para Promesas) propuestos en
[solution-1-base](solution-1-base/index.js).

## Ejercicio 2 ([solution-2](solution-2/index.js))

Da solución a los pequeños ejercicios de funciones de iteración propuestos en
[solution-2-base](solution-2-base/index.js).
