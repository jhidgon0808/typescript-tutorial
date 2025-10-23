// /**
//  * 
//  * string
//  * boolean
//  * number
//  * 
//  */

// // Declaracion de variables
// let x="juan";
// var y;
// const z=1;

// // if para cambiar el valor de z
// if (true){
//     x="Maria";
// }

// // cambiar de nuevo x y mostrar el valor actual
// x="Pedro";
// console.log(x);

// //TIPOS DE DATOS 

// /**
//  * String
//  * Boolean
//  * Number
//  */

// let nombre:string="Ezus";
// let edad:number=21;
// let mayor_edad:boolean=true;

// //tipos de datos especiales
// /**
//  * 
//  * ANY
//  * UNKNOWN
//  * VOID
//  * 
//  */

// let cualquierCosa:any="Hola";
// cualquierCosa=1;
// cualquierCosa=true;
// cualquierCosa="HOLA";

// console.log(cualquierCosa);

// //Uso de unknown
// let variableDesconocida:unknown="Hola";
// variableDesconocida="Nombre";

// if (typeof variableDesconocida==="string"){
//     console.log(variableDesconocida.toUpperCase());
// }

// console.log("Tu nombre es:"+nombre);
// console.log(`Tu edad es: ${edad}`);
// //console.log(variableDesconocida.toUpperCase());

// /**
//  * ARRAYS
//  */

// let numeros:number[]=[1,2,3,4,5];
// let numeros2:number[]=[5,6,7,8,9];

// let mixto: (number|string)[]=[1,"Hola",2,"Adios"];

// let array2d: number[][]=[[1,2,3],[4,5,6],[7,8,9]];

// console.log(`La posicion 0 del array numeros es: ${numeros[0]}`);

// console.log(`La posicion 0 del array 2d es: ${array2d[0]!=undefined ? array2d[0][0]:0}`);

// let numeros3 = [...numeros,...numeros2];
// console.log(`La concatenacion de los arrays numeros  numeros2 es: ${numeros3}`);

// /**
//  * 
//  * METODOS PARA TRABAJAR CON ARRAYS
//  * 
//  * 
//  */

// let anumeros= [1,2,3,4,5];

// //push
// anumeros.push(6); //1,2,3,4,5,6
// console.log
// //pop
// anumeros.pop();
// console.log(anumeros); //1,2,3,4,5

// anumeros.push(6,7,8,9,10);
// console.log(anumeros); //1,2,3,4,5,6,7,8,9,10

// //shift
// anumeros.shift();
// console.log(anumeros); //2,3,4,5,6,7,8,9,10

// //unshift
// anumeros.unshift(0);
// console.log(anumeros); //0,2,3,4,5,6,7,8,9,10

// //acceso, remplazo
// console.log(anumeros[0]); //0

// console.log(anumeros.length); //10

// //busqueda de elementos
// let frutas = ["manzana","platano","pera","naranja","uva","fresa","kiwi"];

// //indexOf
// console.log(frutas.indexOf("pera")); //2

// //includes
// console.log(frutas.includes("pera"));

// //find
// console.log(frutas.find((value)=>{return value.length>4})); //naranja
// console.log(frutas.findIndex((value)=>{return value.length>4})); //naranja

// //for each
// console.log(frutas.forEach((valor:string)=>(console.log(valor))));

// for(let i=0;i<frutas.length;i++){
//     console.log(frutas[i]);
// }

// //Map: devolver un array modificado
// frutas.map((valor:string)=>(valor.toUpperCase()));
// console.log(frutas);

// //filter: devolver un array filtrado
// let frutasFiltradas=frutas.filter((valor:string)=>(valor.length>4));
// console.log(frutasFiltradas);

// //reduce: reducir el array a un unico valor
// let numerosEnteros=[1,2,3,4,5];

// numerosEnteros.reduce((acc:number,elementoActual:number)=>{return acc=acc+elementoActual});

// let miNombre=["E","Z","U","S"];

// let nombreConcatenado = miNombre.reduce((elementoAnterior,elementoActual)=>{return elementoAnterior+=" "+elementoActual});

// console.log(nombreConcatenado);

// console.log(numerosEnteros.sort((a,b)=>b-a)); //10,9,8,7,6,5,4,3,2,1
// console.log(miNombre.slice(0,2)); //E,Z

// console.log(numeros.join("-")); //0-2-3-4-5-6-7-8-9-10

// /**
//  * TUPLAS
//  */

// let nombreEdad:  [string,number];

// nombreEdad=["Ezus",21];

// console.log(`Mi nombre es ${nombreEdad[0]}`);
// console.log(`Mi edad es ${nombreEdad[1]}`);

// //DICCIONARIOS

// let diccionario = {1:"Ezus",2:"Juan",3:"Pedro"};

// console.log(diccionario[1]);

// // FUNCIONES DECLARAS

// /**
//  * Funcion para sumar dos numeros
//  * 
//  * @param a  primero numero a sumar
//  * @param b  segundo numero a sumar
//  * @returns  numero sumado
//  */

// function sumar(a:number,b:number):number{
//     return a+b;
// }

// let suma2numeros = sumar(2,3);

// const fResta = function(a:number,b:number):number{return a-b;};

// let resta2numeros = fResta(2,3);

// let arrayNombres=["Ezus","Juan","Pedro"];
// const printElementos = function(nombres:string){console.log(nombres);};

// arrayNombres.forEach(printElementos);

// function saludar(nombre:string, apellido?:string){
//     console.log(`Hola ${nombre} ${apellido}`);
// }

// //operador ternario
// //apellido!=undefined ? console.log(`Hola ${nombre} ${apellido}`) : console.log(`Hola ${nombre}`);

// function buscar (frutas:string[]):string|undefined{
//     for (let i=0;i<frutas.length;i++){
//         const valorX=frutas[i];

//         if (valorX!=undefined && valorX.length>5){
//             return valorX;
//             break;
//         }
//     }
// }

// //NOT NULL ASSERTION
// //valor[x]!.length
// //valor[x]?.length

// //findindex
// console.log(frutas.findIndex((valor)=>valor.length>5));

// //Operador ternario

// const apellido3:string|undefined=undefined; 

// apellido3!=undefined ? console.log(`Hola ${nombre} ${apellido3}`) : console.log(`Hola ${nombre}`);
// console.log(`Hola ${nombre} ${apellido3 ?? ""}`);

// function potencia (base:number,exponente:number=2):number{
//     return base**exponente;
// }

// console.log(potencia(2,3));
// console.log(potencia(2));

// //FUNCIONES FELCHAS (parametros)=>{operaciones}

// const fflecha = (a:number) => {return a;};

// function math (a:number, b:number,operaciones:(a:number,b:number)=>number){
//     return operaciones(a,b);
// }

// const farrowsumar = (a:number,b:number) => {return a+b;};
// const farrowresta = (a:number,b:number) => {return a-b;};

// math(1,5,farrowsumar);
// math(1,5,farrowresta);

// function multipleParams(...valores:number[]){
//     let suma = valores.reduce((previousValue:number,currentValue:number)=>previousValue+=currentValue);
//     console.log(suma);
// }

// multipleParams(1,2,3,4,5,6,7,8,9,10);

// //FUNCIONES ASYNC

// async function getApiData(url:string):Promise<JSON>{
//     const respuesta = await fetch(url);
//     const datos= respuesta.json() as Promise<JSON>;
//     return datos;

// }

// console.log("hola")

// getApiData("https://pokeapi.co/api/v2/pokemon/ditto")
// .then((value: JSON) => {console.log(value)})
// .catch((error) => {console.log(error)});

// console.log("adios")


let PERSONA = {
    id:1,
    nombre: "Ren",
    apellido: "Amamiya",
    edad: 17,
    direccion: {
        calle: "Calle Morgana",
        casa:{
            numero: 13,
            piso: 2
        },
        ciudad: "Tokyo",
        pais: "Japon"
    },
    esMayorEdad: function():boolean{return this.edad>=18?true:false;}
}

console.log (PERSONA.id);
console.log (PERSONA.esMayorEdad());

PERSONA.edad=18;

let PERSONA2= {
    id:2,
    nombre: "Makoto",
    apellido:"Yuki",
    edad: 16,
    esMayorEdad: function():boolean{return this.edad>=18?true:false;}

}
const config = {
    version: "1.0.0",
    appName: "MiAplicacion",
    developer: "Ezus"
}

const alertConfiguration={
    type:"danger",
    position:"center"
}

//const fRestar = function (a:number,b:number):number{return a-b;};

//TYPE
//Es una plantilla que me va a permitir reutilizar codigo

type Usuario{
    id:number;
    username:string;
    email:string;
    estaActivo:boolean;
    profileURL?:string;
}

type PuestoTrabajo = {
    puesto:string;
    oficina:string;
}
type Empleado = Usuario & PuestoTrabajo;

let ep1:Empleado={
    username: "empleado1",
    email: "",
    estaActivo: true,
    id: 1,
    puesto: "Desarrollador",
    oficina: "Remoto"
}

let user1:Usuario={
    id:1,
    username:"Ezus",
    email:"",
    estaActivo:true
}

console.log(user1.profileURL?.toUpperCase());

user1.username="user1"

user1.email="emailuser1@gmail.com"
user1.id=10;

type Saludo = `Hola ${string}`;

let Saludo:Saludo="Hola Ezus";

let e1:Empleado = {
    id: 1,
    username: "Ezus",
    email: "",
    estaActivo: true,
    puesto: "Dev",
    oficina: "Remoto"
}

//UNIONES |

type Role= 'ADMIN' | 'USER'| 'MODERATOR';

type Entidad='USER'|'PRODUCT';
type Accion= 'CREATE' | 'READ' | 'DELETE' | 'CRUD';

type Permiso= `${Entidad}_${Accion}`;
let permiso1:Permiso='USER_CREATE';

console.log(permiso1);

let miRol:Role='ADMIN';

type UserID= IdTemplate | number;

type Usuario2= {
    profileURL?:string
    readonly id:UserID,
    userName:string,
    readonly email:string,
    estaActivo:boolean,
    rol:Role
}

