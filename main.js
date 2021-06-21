moment().format();

let CabSimple = 800;
let CabDoble = 1300;
let CabSuite = 2000;

const iva = (x) => x * 0.21;

let sumaPorDia = (a, b) => a + b;

let simpleIVA = sumaPorDia(CabSimple, iva(CabSimple));
let dobleIVA = sumaPorDia(CabDoble, iva(CabDoble));
let suiteIVA = sumaPorDia(CabSuite, iva(CabSuite));

let estadia = function (a, b) {
  return a * b;
};

class Servicio {
  constructor(id, nombre, costo, tipo, descripcion, cantidadDeReservas) {
    this.id = id;
    this.nombre = nombre;
    this.costo = costo;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.cantidadDeReservas = cantidadDeReservas;
  }
}

const servicios = [];
servicios.push(
  new Servicio(
    1,
    'Cabalgata',
    600,
    'Recreacion',
    'Tour a caballo guiado por el bosque.',
    0
  )
);
servicios.push(
  new Servicio(
    2,
    'Tirolesa',
    800,
    'Recreacion',
    'Deslizamiento por cable entre las copas de los arboles.',
    0
  )
);
servicios.push(
  new Servicio(
    3,
    'Trekking',
    800,
    'Recreacion',
    'Caminata guiada por el bosque.',
    0
  )
);
servicios.push(
  new Servicio(
    4,
    'Cena gourmet',
    1200,
    'Gastronomia',
    'Desgustación por pasos maridados con vino.',
    0
  )
);
servicios.push(
  new Servicio(
    5,
    'Desayuno buffet',
    700,
    'Gastronomia',
    'Manjares artesanales acompañados de jugos naturales.',
    0
  )
);
servicios.push(
  new Servicio(6, 'Tarde de spa', 1000, 'Relax', 'Sesión de Spa y masajes.', 0)
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

pas.addEventListener('change', () => {
  sessionStorage.setItem('pax', pas.value);
  localStorage.setItem('pasajeros', pas.value);
});
let fa, fb;
const fechaA = document.getElementById('checkIn');
fechaA.addEventListener('change', (event) => {
  fa = event.target.value;
  sessionStorage.setItem('ingreso', fa);
});
const fechaB = document.getElementById('checkOut');
fechaB.addEventListener('change', (event) => {
  fb = event.target.value;
  sessionStorage.setItem('egreso', fb);
});

let formRes = document.getElementById('formularioReserva');

formRes.onsubmit = (evt) => {
  evt.preventDefault();
  const checkIn = moment(fa, 'YYYY-MM-DD');
  const checkOut = moment(fb, 'YYYY-MM-DD');
  const estadiaTotal = checkOut.diff(checkIn, 'days');

  localStorage.setItem('Check In', fa);
  localStorage.setItem('Check Out', fb);
  sessionStorage.setItem('dias', estadiaTotal);
  localStorage.setItem('estadia', estadiaTotal);

  if (pas.value <= 3) {
    cabanasimple.style.display = 'initial';
    cabanadoble.style.display = 'initial';
    cabanasuite.style.display = 'initial';
  } else if (pas.value > 3 || pas.value < 6) {
    cabanasimple.style.display = 'none';
    cabanadoble.style.display = 'initial';
    cabanasuite.style.display = 'initial';
  }
  if (pas.value > 6) {
    cabanasimple.style.display = 'none';
    cabanadoble.style.display = 'none';
    cabanasuite.style.display = 'initial';
  }
};

//VER PROBLEMA CON SESSION STORAGE!!
const ingreso = sessionStorage.getItem('ingreso');
const egreso = sessionStorage.getItem('egreso');
const cantidadDias = parseInt(sessionStorage.getItem('dias'));
const guests = parseInt(sessionStorage.getItem('pax'));

function Cabaña(id, nombre, precio) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
}

const cabins = [];

cabins.push(new Cabaña(1, 'Cabaña simple', simpleIVA));
cabins.push(new Cabaña(2, 'Cabaña doble', dobleIVA));
cabins.push(new Cabaña(3, 'Cabaña suite', suiteIVA));

$('.addBtn').on('click', function (e) {
  e.preventDefault();
  const cabanaId = e.target.getAttribute('data-cabaña-id');
  cabins.forEach((cabin) => {
    if (cabin.id.toString() === cabanaId) {
      $('#quecabana').append(`${cabin.nombre}`);
    }
  });
  swal({
    title: `Hecho!`,
    text: `¡Cabaña reservada!`,
    icon: 'success'
  });
}); //VER ESTOOOOOOOOOOOOOOOO

$('#ingreso').append(`${ingreso}`);
$('#egreso').append(`${egreso}`);
$('#guests').append(`${guests}`);
$('#dias').append(`${cantidadDias}`);

const btnSimple = document.getElementById('btnSimple');
const btnDoble = document.getElementById('btnDoble');
const btnSuite = document.getElementById('btnSuite');

const aparecerSimple = document.getElementById('simple');
const aparecerDoble = document.getElementById('doble');
const aparecerSuite = document.getElementById('suite');

btnSimple.onclick = () => {
  $('#simple').toggle(1000);
  aparecerSimple.style.display = 'flex';
  aparecerDoble.style.display = 'none';
  aparecerSuite.style.display = 'none';
  $('.add').prepend(
    `<hr>
    <p> <strong>${cantidadDias}</strong> días para <em>${guests} pasajeros</em></p>`
  );
};

btnDoble.onclick = () => {
  $('#doble').toggle(1000);
  aparecerDoble.style.display = 'flex';
  aparecerSimple.style.display = 'none';
  aparecerSuite.style.display = 'none';
  $('.add').prepend(
    `<hr>
    <p> <strong>${cantidadDias}</strong> días para <em>${guests} pasajeros</em></p>`
  );
};

btnSuite.onclick = () => {
  $('#suite').toggle(1000);
  aparecerSuite.style.display = 'flex';
  aparecerDoble.style.display = 'none';
  aparecerSimple.style.display = 'none';
  $('.add').prepend(
    `<hr>
    <p> <strong>${cantidadDias}</strong> días para <em>${guests} pasajeros</em></p>`
  );
};

const cabalgata = document.getElementById('imgCabalgata');
const tirolesa = document.getElementById('imgTirolesa');
const trekking = document.getElementById('imgTrekking');
const cocina = document.getElementById('imgCocina');
const desayuno = document.getElementById('imgDesayuno');
const spa = document.getElementById('imgSpa');

$('.services').on('click', function (event) {
  event.preventDefault();
  const serviceId = event.target.getAttribute('data-service-id');
  servicios.forEach((service) => {
    if (service.id.toString() === serviceId) {
      service.cantidadDeReservas = service.cantidadDeReservas + 1;
    }
  });
  swal({
    title: 'Servicio agregado!',
    icon: 'success'
  });
});

$('.btnfinal').on('click', function () {
  servicios.forEach((service) => {
    if (service.cantidadDeReservas > 0) {
      $('#serviciosfinales').append(
        `${service.nombre} x ${service.cantidadDeReservas} `
      );
    }
  });
});
const formContacto = document.getElementById('formContacto');
const nombreContacto = document.getElementById('fullName');
const telefonoContacto = document.getElementById('phone');
const emailContacto = document.getElementById('email');

$('#showForm').on('click', function (event) {
  event.preventDefault();
  $('#reservaFinal').fadeIn('slow');
  $('#staticBackdrop').fadeOut();
  swal({
    title: 'Agrega tus datos y finaliza la reserva.'
  });
});

const lastForm = document.getElementById('ready');
lastForm.onsubmit = (event) => {
  event.preventDefault();
  swal({
    title: '¡Tu reserva fue hecha con éxito!',
    text: 'Gracias por elegirnos',
    icon: 'success'
  });
};

formContacto.onsubmit = (evt) => {
  evt.preventDefault();
  localStorage.setItem('Nombre', nombreContacto.value);
  localStorage.setItem('Telefono', telefonoContacto.value);
  localStorage.setItem('Email', emailContacto.value);
  swal({
    title: `¡Hola!  ${nombreContacto.value}`,
    text: 'Gracias por contactarte con nosotros. En breve nos comunicaremos para continuar con el proceso de Reserva.'
  });
};
