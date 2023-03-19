//MENU DESPLEGABLE DE GESTION

alert("Hola bienvenido al gestor de pedidos de LA VERDU");

let nombre = prompt("Ingrese su Nombre:");
console.log(nombre);

alert(
  "Perfecto usted a ingresado los datos correctamente.\nDigame señor: " +
    nombre +
    "\n\nA continuacion se muestra el menu de opciones para realizar su pedido..."
);

let opcion;
let aux;
let cant;
let CantManzRoj = 0;
let CantManzVer = 0;
let CantNaran = 0;

let TotalManzRoj = 0;
let TotalManzVer = 0;
let TotalNaran = 0;

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

do {
  opcion = parseInt(
    prompt(
      "MENU PRINCIPAL\nEscriba la opcion que desea acceder:\n1-Pedir frutas\n2-Carrito\n3-Monto total\n4-Salir"
    )
  );
  console.log(opcion);
} while (opcion < 1 || opcion > 6);

do {
  switch (opcion) {
    case 1:
      do {
        aux = parseInt(prompt(
          "Usted eligio la opion 1\nEste es nuestro catalogo de frutas:\n\n1-Manzana Roja\n2-Manzana Verde\n3-Naranja\n4-Salir"
        ));
      } while (aux < 1 || aux > 4);

      switch (aux) {
        case 1:
            cant = parseInt(
            prompt("Cuantas Manzanas Rojas quiere llevar? ($100 c/u)")
          );
            CantManzRoj += cant;
            TotalManzRoj += cant * frutas.manzanaRoja;
            console.log(TotalManzRoj);
          break;
        case 2:
          cant = parseInt(
            prompt("Cuantas Manzanas Verdes quiere llevar? ($150 c/u)")
          );
          CantManzVer += cant;
          TotalManzVer += cant * frutas.manzanaVerde;
          console.log(TotalManzVer);
          break;
        case 3:
          cant = parseInt(
            prompt("Cuantas Naranjas quiere llevar? ($122 c/u)")
          );
          CantNaran += cant;
          TotalNaran += cant * frutas.naranja;
          console.log(TotalNaran);
          break;
        default:
          opcion = -1;
          break;
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

  while (aux < 1 || aux > 4 ){
    opcion = parseInt(
      prompt(
        "MENU PRINCIPAL\nEscriba la opcion que desea acceder:\n1-Pedir frutas\n2-Carrito\n3-Monto total\n4-Salir"
      )
    );
    console.log(opcion);
      }

} while (opcion == -1);