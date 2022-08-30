'use strict'
//1.Cadena a arreglo
let cadenaDias ="lunes_martes_miercoles_jueves_viernes_sabado_domingo";
let myArray = cadenaDias.split("_");
console.log(myArray);
//cosole.long(miArray)
//2.Buscar
// Funcion anonima ()>={} clasica funtion(){}

const result = myArray.find((e)=> e === "viernes");
const index = myArray.findIndex((e)=> e === "viernes");
console.log(index);

//3.comprueba si existe un elemento dentro de un array true o false 
console.log(myArray.includes("viernes9"));
//4 Filtrar elementos 
 let myArray2=[];
for(let i=0; i<25; i++){
    myArray2[i] = i + 3;
}
const response = myArray2.filter((e) => e % 2 ===0);
console.log(response);

//map, some, every, reduce

