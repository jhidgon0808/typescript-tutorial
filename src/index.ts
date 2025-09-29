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
