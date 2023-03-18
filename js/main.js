//MENU DESPLEGABLE DE GESTION

alert("Hola bienvenido al gestor de pedidos de LA VERDU");

let nombre = prompt("Ingrese su Nombre:");
let apellido = prompt("Ingrese su Apellido:");
let dni = prompt("Ingrese su DNI:");
let mail = prompt("Ingrese la provincia donde reside:");

alert(
  "Perfecto usted a ingresado los datos correctamente.\nDigame señor: " +
    nombre +
    " " +
    apellido +
    "\n\nA continuacion se muestra el menu de opciones para realizar su pedido..."
);

let opcion;
let aux;
let CantManzRoj = 0;
let CantManzVer = 0;
let CantNaran = 0;

let TotalManzRoj = 0;
let TotalManzVer = 0;
let TotalNaran = 0;

do {
  opcion = parseInt(
    prompt(
      "Escriba la opcion que desea acceder:\n1-Pedir frutas\n2-Carrito\n3-Monto total\n4-Salir"
    )
  );
} while (opcion < 1 || opcion > 6);

console.log(opcion);

const frutas = {
  manzanaRoja: 100,
  manzanaVerde: 150,
  naranja: 122,
};

const verduras = {
  lechuga: 70,
  tomate: 105,
  berenjena: 170,
};

switch (opcion) {
  case 1:
    do {
      aux = prompt(
        "1_ Pedir Fruta\n\nEste es nuestro catalogo de frutas:\n1-Manzana Roja\n2-Manzana Verde\n3-Naranja\n4-Salir"
      );
    } while (aux < 1 || aux > 4);
    if (aux == 4) {
      break;
    } else {
      switch (aux) {
        case 1:
          let cant = parseInt(
            prompt("Cuantas Manzanas Rojas quiere llevar?= ($100 c/u)")
          );
          CantManzRoj += cant;
          TotalManzRoj += cant * frutas.manzanaRoja;
          break;
        case 2:
          break;
        case 3:
          break;

        default:
          break;
      }
    }

    break;
  case 2:
    if (condition) {
    }
    break;
  case 3:
    break;
  case 4:
    break;
  default:
    break;
}
