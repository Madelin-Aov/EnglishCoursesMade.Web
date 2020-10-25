let string = "abc"
switch (String) {
    case "cba":
        console.log("Está desordenado");        
        break;
        case "bca":
        console.log("Está desordenado");        
        break;
        case "abc":
        console.log("Está ordenado");        
        break;

    default:
        break;
}






//ejemplo IF
let respuesteUsuario =  confirm (" ¿5 es más grande que 3") 
let respuestaCorrecta = 5>3;
if(respuesteUsuario == respuestaCorrecta){
    console.log("Respuesta correcta")
}else{
    console.log("Respuesta incorrecta")
}
//Repaso clase anterior
let numero1=5;
let numero2=3;
let comparison=numero1 < numero2;
// //ejemplo IF
// let respuesteUsuario =  confirm (" ¿5 es más grande que 3") 
// let respuestaCorrecta = 5>3;
// if(respuesteUsuario == respuestaCorrecta){
//     console.log("Respuesta correcta")
// }else{
//     console.log("Respuesta incorrecta2")
// }
// //Repaso clase anterior
// let numero1=5;
// let numero2=3;
// let comparison=numero1 < numero2;
const numeroRandom = Math.ceil(Math.random()*100);
let userNumber= parseInt(prompt("ingrese un numero"))
while(numeroRandom!= userNumber){
    if (userNumber>numeroRandom){
        alert("ingresa un numero mas pequeño")
    }else{
        alert("ingresa un numero mas grande")
    }
    userNumber=parseInt(prompt("Ingrese un numero"))
}
console.log("You won!")