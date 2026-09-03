//================================
// ESTRUCTURAS DE DATOS 1
//================================

/* 
1. ¿Qué es un array?

Un array es una estructura de datos que permite almacenar una colección de elementos, o múltiples valores en 'una sola variable', organizados o  accesibles a través de un índice que indica su posición y que comienza en 0.

*/

// Variables que almacena un solo valor
let nombre = "Paula";
let edad = 39;
let activoEnCampus = true;

// Antes usabamos variables para almacenar un solo valor, pero ahora podemos almacenar múltiples valores en una sola variable usando un array.
let nombres = ["Paula", "Juan", "Pedro", "Ana"];
let edades = [39, 36, 50, 31];

// Lo normal es que los Arrays contengan datos del mismo tipo. Pero no es obligatorio, ya que un array puede contener datos de diferentes tipos, como números, strings, booleanos, objetos, etc.

let mezclado =["texto", 39, true, null];
console.log(mezclado);

let datosUsuario = [
    { id: 1, 
      nombre: "Paula", 
      edad: 39 },
    { email: "pauladejuansegura@outlook.es", 
      password: "123456@"},
    { localidad: "Alcalá de Henares", 
      provincia: "Madrid", 
      pais: "España"}
    ];
console.log(datosUsuario);

// Crear Array con Corchetes [ ]

// Se puede crear un Array vacío:
const frutas = [];
console.log(frutas);

// Se puede crear un Array con valores iniciales
const colores = ["rojo", "verde", "azul"];
const numeros = [ 10, 20, 30, 40, 50];
console.log(colores);
console.log(numeros);

// Accederemos a un valor por el ÍNDICE del Array
const animales = ["perro", "gato", "pez"];
console.log(animales);
console.log(animales[0]);
console.log(animales[1]);
console.log(animales[2]);

animales[2] = "pájaro";
console.log(animales);

// Otro ejemplo para ver la LONGITUD 
// La propiedad .length del Objeto Array []
const planetas = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno", "Plutón"];
console.log(planetas.length);
console.log(planetas);


// Crear un Array con un constructor usando la palabra reservada new Array
let letras = new Array("A", "B", "C", "D", "E", "F", "G");
let notasMusicales = new Array("Do", "Re", "Mi", "Fa", "Sol", "La", "Si");

// Un Array es un OBJETO y tiene Métodos y Propiedades
// Objeto Global de JavaScript Array = []

// La propiedad más común es .length
console.log(notasMusicales);
console.log(notasMusicales.length);

console.log(letras);
console.log(letras.length);

/* La propiedad .length es útil para acceder al último elemento de un Array sin saber cuantos elementos tiene */
console.log(notasMusicales[notasMusicales.length - 1]);
console.log(notasMusicales[notasMusicales.length - 2]);
console.log(notasMusicales[notasMusicales.length - 3]);

console.log(letras[letras.length - 1]);
console.log(letras[letras.length - 2]);
console.log(letras[letras.length - 3]);

/*==============================
MÉTODOS FUNDAMENTALES DE LOS ARRAYS
================================*/

// push() -> Añade uno o más elementos al final del Array
const tareas = ["Comprar", "Limpiar", "Estudiar"];
console.log(tareas);
tareas.push("Trabajar", "Comer", "Dormir");
console.log(tareas);

tareas.push("Leer", "Programar", "Escribir")
console.log(tareas)

// pop() -> Elimina el último elmento y lo retorna, lo devuelve.
const tareaEliminada = tareas.pop();
console.log(tareas);
console.log(tareaEliminada);

const tareaEliminada2 = tareas.pop();
console.log(tareas);
console.log(tareaEliminada2);

// shift() -> Elimina el primer elemento del Array y lo puede retornar o devolver.
const tareaEliminada3 = tareas.shift()
console.log(tareas);
console.log(tareaEliminada3);
const tareaEliminada4 = tareas.shift()
console.log(tareas);
console.log(tareaEliminada4);

// unshift() -> Añade uno o más elementos al principio del Array
tareas.unshift("Programar con JavaScript", "Aprender Lenguaje de Marcas y Estilos");
console.log(tareas);

// Otro ejemplo:
const fila = ["Primero", "Segundo", "Tercero"]

const atendido = fila.shift()
console.log(fila);
console.log(atendido);

fila.unshift("Nuevo Primero")
console.log(fila)

// indexOf() -> Devuelve el índice de la primera aparición de un elemento. 
// Si no encuentra el elemento no te puede dar el índice y devuelve -1.
// Esto es útil para saber el índice de un determinado elemento.
const idiomas = ["Inglés", "Español", "Francés", "Alemán"];

console.log(idiomas.indexOf("Inglés")); // 0
console.log(idiomas.indexOf("Francés")); // 2
console.log(idiomas.indexOf("Chino")); // -1

// includes() -> Devuelve true (booleano) si el elemento existe en el Array,
// y devuelve false (booleano) si el elemento no existe.
// Esto es útil para saber si está o no un elemento en el array.

console.log(idiomas.includes("Chino")); // false
console.log(idiomas.includes("Español")); // true


// splice() -> Modifica el Array en su lugar o posición según si queremos:
// Elimiar, Reemplazar, o Insertar elementos en cualquier posición.
// Su sintaxis es: 
// array.splice(inicio del rango, cuántos eliminar, elementos a insertar).
// Si no le pasamos el parámetro o argumento de cuantos insertar, 
// pues solo elimina.

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses);
const mesesVerano = meses.splice(5, 3);
console.log(meses);
console.log(mesesVerano);

meses.splice(5, 0, "Junio", "Julio", "Agosto");
console.log(meses); 

// slice -> Devuelve una copia de una porción del Array sin modificar el original.
// Su sintaxis es: array.slice(inicio del rango, fin del rango)
// Si no le dices el final del rango llega hasta el final del Array.

const mesesInvierno = meses.slice(0, 2);
console.log(mesesInvierno);
const ultimoMes = meses.pop()
console.log(ultimoMes)
mesesInvierno.unshift("Diciembre");
console.log(mesesInvierno);



