let divBebidas = document.getElementById("divBebidas");

function solicitarEdad() {
  let edad = parseInt(prompt("Ingresa tu edad"));
  if (edad < 18) {
    while (true) {
      alert("Vuelve cuando seas mayor");
    }
  } else {
    alert("Bienvenido a la plataforma");
  }
}

solicitarEdad();

function solicitarNombre() {
  let nombreUsuario = prompt("Ingrese su Nombre");
  if (nombreUsuario != "") {
    alert("Hola " + nombreUsuario);
  } else {
    alert("No ingresaste un Nombre");
  }
  let direccion = prompt("Ingrese direccion de envio");
  if (direccion != "") {
    alert("la direccion ingresada es " + direccion);
  } else {
    alert("No ingresaste ninguna direccion");
  }
}

solicitarNombre();

//function agregarProducto() {
//var productos = [
//"Fernet",
//"Absolut",
//"Jonnie",
//"Bombay",
//"Coca",
//"Tia Maria",
//"Capitan Morgan",
//"Smirnoff",
//"Sprite",
//];
//for (let i = 0; i < productos.length; i++) {
//console.log(productos[i]);
//}
//}
//agregarProducto();

/* function solicitarProducto() {
  let producto = prompt(
    "selecciona un producto \n Fernet \n Absolut \n Jonnie \n Bombay \n Coca \n Tia Maria \n Caputan Morgan \n Smirnoff \n Sprite "
  );
  switch (producto) {
    case "Fernet":
      alert("1500 Pesos");
      break;
    case "Absolut":
      alert("1500 Pesos");
      break;
    case "Jonnie":
      alert("2000 Pesos");
      break;
    case "Bombay":
      alert("1300 Pesos");
      break;
    case "Coca":
      alert("350 Pesos");
      break;
    case "Tia Maria":
      alert("500 Pesos");
      break;
    case "Capitan Morgan":
      alert("800 Pesos");
      break;
    case "Smirnoff":
      alert("1000 Pesos");
      break;
    case "Sprite":
      alert("300 Pesos");
      break;
    default:
      alert("Sin stock");
      break;
  }
}

solicitarProducto(); */

////
//

//let contrasena = prompt("Ingrese Contraseña");

//if (correo === "juan@mail.com" && contrasena === "123456") {
//alert("Bienvenido a la plataforma");
//} else {
//alert("Correo o contraseña no coinciden");
//}//
function capturar() {
  //console.log("capturado");
  function Bebida(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  var nombreCapturar = document.getElementById("nombre").value;
  //console.log(nombreCapturar);
  var precioCapturar = document.getElementById("precio").value;
  //console.log(nombreCapturar);

  nuevoProducto = new Bebida(nombreCapturar, precioCapturar);
  console.log(nuevoProducto);
  agregar();
}

var baseDatos = [];
function agregar() {
  baseDatos.push(nuevoProducto);
  console.log(baseDatos);
  document.getElementById("tabla").innerHTML +=
    "<tbody><td>" +
    nuevoProducto.nombre +
    "</td><td>" +
    nuevoProducto.precio +
    "</td></tbody>";
}

//Class
class Bebida {
  constructor(nombre, clase) {
    this.nombre = nombre;
    this.clase = clase;
  }
}

function buscadorBebidas() {
  const tiamaria = new Bebida("Tia maria", "Con Alcohol");
  const sprite = new Bebida("Sprite", "Sin Alcohol");
  const coca = new Bebida("Coca", "Sin Alcohol");
  return [tiamaria, sprite, coca];
}

buscadorBebidas();

function buscarConAlcohol() {
  //array buscador bebidas
  let Bebidas = buscadorBebidas();

  //Buscar con alcohol
  const conAlcohol = Bebidas.find((m) => m.clase === "Con Alcohol");
  alert("Las Bebidas con Alcohol son: " + conAlcohol.nombre);
}

buscarConAlcohol();

function buscarSinAlcohol() {
  let Bebidas = buscadorBebidas();
  const sinAlcohol = Bebidas.filter((m) => m.clase === "Sin Alcohol");

  alert("Las Bebidas sin Alcohol son:");
  sinAlcohol.forEach(function (item) {
    alert(item.nombre);
  });
}

buscarSinAlcohol();
