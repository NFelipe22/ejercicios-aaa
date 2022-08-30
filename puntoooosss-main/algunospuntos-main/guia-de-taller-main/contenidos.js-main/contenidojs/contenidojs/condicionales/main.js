
let num1;
let num2;
num1 = 9;
num2 = '9';

if(num1 < 0){

}else if(num1 > 0){
    if((num1 % 3 === 0)&&(parseInt(num2)>0)){
        console.log('es multiplo de 3 y num2 > 0');

    }else{
        if(num1 % 2 == 0) console.log("num1 es multipo de 2");
    }
}
//swi
let opcion;
opcion= prompt("intoduzca una opcion 1-4");

switch(opcion){

    case '1':
    alert("seleciono la opcion 1")
    case '2':
    alert("seleciono la opcion 2")
    case '3':
    alert("seleciono la opcion 3")
    case '4':
    alert("seleciono la opcion 4")
}