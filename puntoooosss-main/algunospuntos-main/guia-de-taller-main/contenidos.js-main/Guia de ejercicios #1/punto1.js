'use strict'
let num1;
let num2;
num1 = prompt ("introdusca un numero");
num2 = prompt ("introdusca otro numero");
let suma = 0;
let resta = 0;
let multiplicacion = 0;
let divicion = 0;
suma= parserfloat(num1) + parserfloat(num2) ;

resta= parserfloat(num1) - parserfloat(num2) ;

multiplicacion= parserfloat(num1) * parserfloat(num2) ;

divicion= parserfloat(num1) / parserfloat(num2) ;


alert("la suma es:"+suma+"la resta es:"+resta+"la multiplicacion es:"+multiplicacion+"la divicion es:"+divicion);