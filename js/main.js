//MENU DESPLEGABLE DE GESTION

alert("Hola bienvenido al CALCULADOR:COM");

let nombre = prompt("Ingrese su nombre:");
console.log(nombre);

let num1 = parseFloat(prompt("Ingrese el primer numero:"));
let num2 = parseFloat(prompt("Ingrese el segundo numero:"));
console.log("Numero 1: " + num1);
console.log("Numero 2: " + num2);

let opcion;
let aux;

function suma(n1,n2) {
  this.primero = n1;
  this.segundo = n2;
  let resu = n1 + n2;
  console.log("RESULTADO DE LA SUMA ES= " + resu);
  alert("SUMA REALIZADA EXITOSAMENTE\n\n En la consola aparecen los resultados, gracias.");
}

function resta(n1,n2) {
  this.primero = n1;
  this.segundo = n2;
  let resu = n1 - n2;
  console.log("RESULTADO DE LA RESTA ES= " + resu);
  alert("RESTA REALIZADA EXITOSAMENTE\n\n En la consola aparecen los resultados, gracias.");
}

function mult(n1,n2) {
  this.primero = n1;
  this.segundo = n2;
  let resu = n1 * n2;
  console.log("RESULTADO DE LA MULTIPLICACION ES= " + resu);
  alert("MULTIPLICACION REALIZADA EXITOSAMENTE\n\n En la consola aparecen los resultados, gracias.");
}

function divi(n1,n2) {
  this.primero = n1;
  this.segundo = n2;
  let resu = n1 / n2;
  console.log("RESULTADO DE LA DIVISION ES= " + resu);
  alert("DIVISION REALIZADA EXITOSAMENTE\n\n En la consola aparecen los resultados, gracias.");
}

do{
opcion = parseInt(prompt("MENU DE CALCULADORA\n\n1-Sumar\n2-Restar\n3-Multiplicar\n4-Dividir\n5-Cambiar numero\n6-Salir\nEliga la opcion que desee:"));

}while(opcion <1 || opcion >6);

while (opcion != 6) {
  
  switch (opcion) {
    case 1:
        suma(num1,num2);
      break;
    case 2:
        resta(num1,num2);
      break;
    case 3:
        mult(num1,num2);
      break;
    case 4:
        divi(num1,num2);
      break;
    case 5:
      num1 = parseFloat(prompt("Ingrese el primer numero:"));
      num2 = parseFloat(prompt("Ingrese el segundo numero:"));
      console.log("Numero 1: " + num1);
      console.log("Numero 2: " + num2);
      break;
    default:
      alert("ERROR");
      break;
  }

  do{
    opcion = parseInt(prompt("MENU DE CALCULADORA\n\n1-Sumar\n2-Restar\n3-Multiplicar\n4-Dividir\n5-Cambiar numero\n6-Salir\nEliga la opcion que desee:"));
    }while(opcion <1 || opcion >6);

}

mensaje