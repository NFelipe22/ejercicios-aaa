'use strict'
let calificacion;
calificacion = 3.0;
let mensaje;
mensaje ="";
switch (true){
    case calificacion >=0 && calificacion <= 2.9:
        //template strick
    mensaje = `ìnsuficiente la calificacion: ${calificacion}`;
    break;
    case calificacion >=0 && calificacion <= 3.5:
        //template strick
    mensaje = `regular la caificacion: ${calificacion}`;
    break;
    case calificacion >=0 && calificacion <= 4:
        //template strick
    mensaje = `bien la calificacion: ${calificacion}`;
    break;
    case calificacion >=0 && calificacion <= 4.5:
        //template strick
    mensaje = `muy bien la clasificacion: ${calificacion}`;
    break;
    case calificacion >=0 && calificacion <= 5:
        //template strick
    mensaje = `excele calificacion: ${calificacion}`;
    break;
    default:
        mensaje = `la calificacion no puede ser procesada ${calificacion}`;
        break;
 
}
console.log(mensaje);