'use strict'

var numero1 = prompt("Ingrese numero 1: ");
var numero2 = prompt("Ingrese numero 2: ");
var numero3 = prompt("Ingrese numero 3: ");



numero1=parseInt(numero1);
numero2=parseInt(numero2);
numero3=parseInt(numero3);


   if (numero1 == numero2 && numero1 == numero3){
   document.write("Numero 1, Numero 2 y Numero 3 son iguales! y valen: "+numero1+".");
   } else {
      if (numero1 > numero2){
         if (numero1 > numero3){
            document.write("Numero 1 es Mayor y vale: "+numero1+".");
         }else{
               document.write("Numero 3 es Mayor y vale: "+numero3+".");
         }
      } else {
         document.write("Numero 2 es Mayor y vale: "+numero2+".");
      }
    } 
      document.write("<br /><br />Numero 1 = "+numero1+"<br />"+"Numero 2 = "+numero2+"<br />"+"Numero 3 = "+numero3);