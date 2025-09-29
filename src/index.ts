/**
 * 
 * string
 * boolean
 * number
 * 
 */

// Declaracion de variables
let x="juan";
var y;
const z=1;

// if para cambiar el valor de z
if (true){
    x="Maria";
}

// cambiar de nuevo x y mostrar el valor actual
x="Pedro";
console.log(x);

//TIPOS DE DATOS 

/**
 * String
 * Boolean
 * Number
 */

let nombre:string="Ezus";
let edad:number=21;
let mayor_edad:boolean=true;

//tipos de datos especiales
/**
 * 
 * ANY
 * UNKNOWN
 * VOID
 * 
 */

let cualquierCosa:any="Hola";
cualquierCosa=1;
cualquierCosa=true;
cualquierCosa="HOLA";

console.log(cualquierCosa);

//Uso de unknown
let variableDesconocida:unknown="Hola";
variableDesconocida="Nombre";

if (typeof variableDesconocida==="string"){
    console.log(variableDesconocida.toUpperCase());
}

console.log("Tu nombre es:"+nombre);
console.log(`Tu edad es: ${edad}`);
//console.log(variableDesconocida.toUpperCase());

/**
 * ARRAYS
 */

let numeros:number[]=[1,2,3,4,5];
let numeros2:number[]=[5,6,7,8,9];

let mixto: (number|string)[]=[1,"Hola",2,"Adios"];

let array2d: number[][]=[[1,2,3],[4,5,6],[7,8,9]];

console.log(`La posicion 0 del array numeros es: ${numeros[0]}`);

console.log(`La posicion 0 del array 2d es: ${array2d[0]!=undefined ? array2d[0][0]:0}`);

let numeros3 = [...numeros,...numeros2];
console.log(`La concatenacion de los arrays numeros  numeros2 es: ${numeros3}`);
