'use strict';
const myArray2=[];
for(let i=0; i<25; i++){
    myArray2[i] = i + 2;
}
//console.log(myArray2);
//Spread operator...
//console.log(...myArray2);
//Agregar elementos a un arreglo 
myArray2.push(3,78,900,12000);
//console.log(...myArray2);
let myArray3 =[...myArray2,34,88,3450];
//console.log(...myArray2);
let resultado = myArray2.concat(myArray3);
//console.log(...resultado);
let arrayfinal = [...myArray2,...myArray3, ...resultado];
console.log(...arrayfinal);

//Propagacion en funciones

let leguajes =['PHP','JAVA','JS','RUBY','C#']
const printLenguajes = (lent1, lent2, lent3 = "Assember", ...lent4)=>{
console.long(`***los leguajes top***
            ${lent1} - ${lent2} - ${lent3} -${lent4}
            ***************************`);
}
printLenguajes(...leguajes, 'Cobol' , 'F#');