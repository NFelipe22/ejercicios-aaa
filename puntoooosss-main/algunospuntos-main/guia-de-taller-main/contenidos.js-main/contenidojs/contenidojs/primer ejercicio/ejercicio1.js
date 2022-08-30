'use strict';
//directiva que indica que estamos trabajando en modo eastricto
/**
 * comentarios de bloque
 

//declaracionde variables o contenedores 

var variable1 = 10; //cartel global
let variable2 = 23;//de ambito local 
const constantel = 3.14;//declarar constantes

if (true) {
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable1);
}
console.log(variable1); 

*/
let num1;
let num2;
num1 = prompt ("introdusca un numero");
num2 = prompt ("introdusca otto numero");
let suma = 0;
suma= parserfloat(num1) + parserfloat(num2) ;
console.log("el resultado de la suma es:"+suma);
alert("la suma es:"+suma);