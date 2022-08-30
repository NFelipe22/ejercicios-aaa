'use strict'
let miArreglo =  [2,4,2,5,45,true,'78',"Hola mundo"];
let miArreglo2 = new Array(1,2,3,4)
miArreglo.push(56,78,true);
console.log(miArreglo);
console.log(miArreglo.length);
for(let i=0;i<miArreglo.length;i++){
    //console.log(miArreglo[i]);
}
//variaciones del for
let j;
for(let j of miArreglo2 ){
   // console.log(j)
}
for(let j in miArreglo2 ){
   //console.log(j)
}
miArreglo2.forEach((e)=>{
    //console.log(e);
});

miArreglo2.forEach(function(e){
    console.log(e);
});