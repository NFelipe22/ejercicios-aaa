'use strict'
//Dado un monto en pesos calcular el 15% menos y el 15% más.  Imprimir el monto inicial y con el descuento y con el aumento.
let valor;
let valorma15;
let valorme15;
let valorpor;
valorma15 = 0;
valorme15 = 0;
valorpor = 0;
function mas15(valor){
    valorma15 = valor + valorpor;
}
function calcularporcentaje(valor){
    valorpor = valor * 0.15;
}
function mas15(valor){
    valorma15 = valor - valorpor;
}
console.log(valorma15);
console.log(valorme15);