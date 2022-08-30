'use strict'
//Dado 4 notas de un estudiante, calcular el promedio del estudiante, imprimir las notas y el promedio.
let nota1, nota2, nota3, nota4,resultado;
nota1 = prompt('Ingrese 1ra. nota:');
nota2 = prompt('Ingrese 2da. nota:');
nota3 = prompt('Ingrese 3ra. nota:');
nota4 = prompt('Ingrese 4ra. nota:');

nota1 = parseInt(nota1);
nota2 = parseInt(nota2);
nota3 = parseInt(nota3);
nota4 = parseInt(nota4);

resultado = (nota1 + nota2 + nota3 + nota4) / 4;

document.write("su promedio es" +resultado);
    
