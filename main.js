moment().format();

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

class Servicio {
  constructor(id, nombre, costo, tipo, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.costo = costo;
    this.tipo = tipo;
    this.descripcion = descripcion;
  }
}

const servicios = [];
servicios.push(
  new Servicio(
    1,
    'Cabalgata',
    600,
    'Recreacion',
    'Tour a caballo guiado por el bosque.'
  )
);
servicios.push(
  new Servicio(
    2,
    'Tirolesa',
    800,
    'Recreacion',
    'Deslizamiento por cable entre las copas de los arboles.'
  )
);
servicios.push(
  new Servicio(
    3,
    'Trekking',
    800,
    'Recreacion',
    'Caminata guiada por el bosque.'
  )
);
servicios.push(
  new Servicio(
    4,
    'Cena gourmet',
    1200,
    'Gastronomia',
    'Desgustación por pasos maridados con vino.'
  )
);
servicios.push(
  new Servicio(
    5,
    'Desayuno buffet',
    700,
    'Gastronomia',
    'Manjares artesanales acompañados de jugos naturales.'
  )
);
servicios.push(
  new Servicio(6, 'Tarde de spa', 1000, 'Relax', 'Sesión de Spa y masajes.')
);

const actividadRecreativa = servicios.filter(
  (elemento) => elemento.tipo == 'recreacion'
);
const gastronomia = servicios.filter(
  (elemento) => elemento.tipo == 'gastronomia'
);
const relax = servicios.filter((elemento) => elemento.tipo == 'relax');

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

let fa, fb;
const fechaA = document.getElementById('checkIn');
fechaA.addEventListener('change', (event) => (fa = event.target.value));
const fechaB = document.getElementById('checkOut');
fechaB.addEventListener('change', (event) => (fb = event.target.value));

let formRes = document.getElementById('formularioReserva');

formRes.onsubmit = (evt) => {
  evt.preventDefault();
  const checkIn = moment(fa, 'YYYY-MM-DD');
  const checkOut = moment(fb, 'YYYY-MM-DD');
  const estadiaTotal = checkOut.diff(checkIn, 'days');
  localStorage.setItem('pasajeros', pas.value);
  localStorage.setItem('Check In', fa);
  localStorage.setItem('Check Out', fb);
  localStorage.setItem('estadia', estadiaTotal);

  console.log('Cantidad de Pasajeros elegidos: ' + pas.value);
  console.log('Cantidad de días: ' + estadiaTotal);
  if (pas.value > 3) {
    cabanasimple.style.display = 'initial';
    cabanadoble.style.display = 'initial';
    cabanasuite.style.display = 'initial';
  } else if (pas.value <= 3) {
    cabanasimple.style.display = 'none';
    cabanadoble.style.display = 'initial';
    cabanasuite.style.display = 'initial';
  }
  if (pas.value > 6) {
    cabanasimple.style.display = 'none';
    cabanadoble.style.display = 'none';
    cabanasuite.style.display = 'initial';
  }

  $('.add').prepend(
    `<hr>
    <p> <strong>${estadiaTotal}</strong> días para <em>${pas.value} pasajeros</em></p>
    <button type="submit" class="btn btn-outline-success" id="addBtn">Agregar.</button>`
  );
};
// const cantidadDias = parseInt(localStorage.getItem('estadia'));
// console.log(cantidadDias);
// $('#addBtn').on('click', function () {
//   $('final').prepend(``);
// });
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

$('.contratar1').on('click', function (event) {
  event.preventDefault();
  $('#final').prepend(`<h4>Servicio contratado: ${servicios[0].nombre}</h4>
                      <h5>$ ${servicios[0].costo}`);
});
$('.contratar2').on('click', function (event) {
  event.preventDefault();
  $('#final').prepend(`<h4>Servicio contratado: ${servicios[1].nombre}</h4>
                      <h5>$ ${servicios[1].costo}`);
});
$('.contratar3').on('click', function (event) {
  event.preventDefault();
  $('#final').prepend(`<h4>Servicio contratado: ${servicios[2].nombre}</h4>
                      <h5>$ ${servicios[2].costo}`);
});
$('.contratar4').on('click', function (event) {
  event.preventDefault();
  $('#final').prepend(`<h4>Servicio contratado: ${servicios[3].nombre}</h4>
                      <h5>$ ${servicios[3].costo}`);
});
$('.contratar5').on('click', function (event) {
  event.preventDefault();
  $('#final').prepend(`<h4>Servicio contratado: ${servicios[4].nombre}</h4>
                      <h5>$ ${servicios[4].costo}`);
});
$('.contratar6').on('click', function (event) {
  event.preventDefault();
  $('#final').prepend(`<h4>Servicio contratado: ${servicios[5].nombre}</h4>
                      <h5>$ ${servicios[5].costo}`);
});
const formContacto = document.getElementById('formContacto');
const nombreContacto = document.getElementById('fullName');
const telefonoContacto = document.getElementById('phone');
const emailContacto = document.getElementById('email');

formContacto.onsubmit = (evt) => {
  evt.preventDefault();
  localStorage.setItem('Nombre', nombreContacto.value);
  localStorage.setItem('Telefono', telefonoContacto.value);
  localStorage.setItem('Email', emailContacto.value);
  alert(
    'Hola, ' +
      nombreContacto.value +
      '. Gracias por contactarte con nosotros. En breve nos comunicaremos para continuar con el proceso de Reserva.'
  );
};
