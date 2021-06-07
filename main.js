//alert("Cabaña SIMPLE x día $800 |" +  " Cabaña DOBLE x día $1300 |" + " Cabaña SUITE x día $2000")

let CabSimple = 800;
let CabDoble = 1300;
let CabSuite = 2000;

const iva = (x) => x * 0.21;

let sumaPorDia = (a, b) => a + b;

let SimpleIVA = sumaPorDia(CabSimple, iva(CabSimple));
let DobleIVA = sumaPorDia(CabDoble, iva(CabDoble));
let SuiteIVA = sumaPorDia(CabSuite, iva(CabSuite));

const simple = new Cabaña(1, 3, SimpleIVA);
const doble = new Cabaña(2, 5, DobleIVA);
const suite = new Cabaña(3, 8, SuiteIVA);
// console.table(simple);

let estadia = function (a, b) {
  return a * b;
};

function Cabaña(habitaciones, cantidadPersonas, precio) {
  this.habitaciones = habitaciones;
  this.cantidadPersonas = cantidadPersonas;
  this.precio = precio;
  this.calcularEstadia = function () {
    document.write(
      '<h4>' +
        'El total de tu estadía por ' +
        dias +
        ' dias, es de: $' +
        '<strong>' +
        estadia(this.precio, dias) +
        ' </strong></h4>'
    );
  };
}

/*if (choice == "SIMPLE") {
    simple.calcularEstadia();
    console.table(simple);
} 
else if ( choice == "DOBLE") {
    doble.calcularEstadia();
    console.table(doble);
} 
else if (choice == "SUITE") {
    suite.calcularEstadia();
    console.table(suite);
}*/

class Servicio {
  constructor(id, nombre, costo, tipo) {
    this.id = id;
    this.nombre = nombre;
    this.costo = costo;
    this.tipo = tipo;
  }
}

const servicios = [];
servicios.push(new Servicio(1, 'Cabalgata', 600, 'Recreacion'));
servicios.push(new Servicio(2, 'Tirolesa', 800, 'Recreacion'));
servicios.push(new Servicio(3, 'Trekking', 800, 'Recreacion'));
servicios.push(new Servicio(4, 'Cena gourmet', 1200, 'Gastronomia'));
servicios.push(new Servicio(5, 'Desayuno buffet', 700, 'Gastronomia'));
servicios.push(new Servicio(6, 'Tarde de spa', 1000, 'Relax'));

const actividadRecreativa = servicios.filter(
  (elemento) => elemento.tipo == 'recreacion'
);
const gastronomia = servicios.filter(
  (elemento) => elemento.tipo == 'gastronomia'
);
const relax = servicios.filter((elemento) => elemento.tipo == 'relax');

console.log(actividadRecreativa);
console.log(gastronomia);
console.log(relax);

/*let serv = document.getElementById("Servicios");
for (const servicioAdicional of servicios) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML= `<h3> Producto: <em> ${servicioAdicional.nombre}</em></h3>
                           <p>  Tipo: ${servicioAdicional.tipo} </p>
                           <strong> $ ${servicioAdicional.costo}</strong>`;
                    
    serv.appendChild(contenedor);
}
console.log(serv);*/

let pas = document.getElementById('pasajeros');
let cabanasimple = document.getElementById('simplePortada');
let cabanadoble = document.getElementById('doblePortada');
let cabanasuite = document.getElementById('suitePortada');

let fechaA = document.getElementById('checkIn');
let fechaB = document.getElementById('checkOut');
let formRes = document.getElementById('formularioReserva');
formRes.onsubmit = (evt) => {
  evt.preventDefault();
  localStorage.setItem('pasajeros', pas.value);
  localStorage.setItem('Check In', fechaA.value);
  localStorage.setItem('Check Out', fechaB.value);

  console.log('Cantidad de Pasajeros elegidos: ' + pas.value);
  if (pas.value > 3) {
    cabanasimple.style.visibility = 'hidden';
  } else if (pas.value <= 3) {
    cabanasimple.style.visibility = 'initial';
    cabanadoble.style.visibility = 'initial';
  }
  if (pas.value > 6) {
    cabanasimple.style.visibility = 'hidden';
    cabanadoble.style.visibility = 'hidden';
  }
};

const btnSimple = document.getElementById('btnSimple');
const btnDoble = document.getElementById('btnDoble');
const btnSuite = document.getElementById('btnSuite');

const aparecerSimple = document.getElementById('simple');
const aparecerDoble = document.getElementById('doble');
const aparecerSuite = document.getElementById('suite');

btnSimple.onfocus = () => {
  aparecerSimple.style.display = 'flex';
  aparecerDoble.style.display = 'none';
  aparecerSuite.style.display = 'none';
};

btnDoble.onfocus = () => {
  aparecerDoble.style.display = 'flex';
  aparecerSimple.style.display = 'none';
  aparecerSuite.style.display = 'none';
};

btnSuite.onfocus = () => {
  aparecerSuite.style.display = 'flex';
  aparecerDoble.style.display = 'none';
  aparecerSimple.style.display = 'none';
};

const cabalgata = document.getElementById('imgCabalgata');
const tirolesa = document.getElementById('imgTirolesa');
const trekking = document.getElementById('imgTrekking');
const cocina = document.getElementById('imgCocina');
const desayuno = document.getElementById('imgDesayuno');
const spa = document.getElementById('imgSpa');

let checkIn = moment(fechaA.value);
let checkOut = moment(fechaB.value);

let estadiaTotal = checkOut.diff(checkIn.value, 'days');

console.log(estadiaTotal);

const formContacto = document.getElementById('formContacto');
const nombreContacto = document.getElementById('fullName');
const telefonoContacto = document.getElementById('phone');
const emailContacto = document.getElementById('email');

formContacto.onsubmit = (e) => {
  e.preventDefault();
  localStorage.setItem('Nombre', nombreContacto);
  localStorage.setItem('Telefono', telefonoContacto);
  localStorage.setItem('Email', emailContacto);
  alert(
    'Hola,' +
      nombreContacto.value +
      '. Gracias por contactarte con nosotros. En breve nos comunicaremos para continuar con el proceso de Reserva.'
  );
};
