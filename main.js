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
  return a + b;
};

class Servicio {
  constructor(
    id,
    nombre,
    costo,
    tipo,
    descripcion,
    selected,
    cantidadPersonas
  ) {
    this.id = id;
    this.nombre = nombre;
    this.costo = costo;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.selected = selected;
    this.cantidadPersonas = cantidadPersonas;
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
    false,
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
    false,
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
    false,
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
    false,
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
    false,
    0
  )
);
servicios.push(
  new Servicio(
    6,
    'Tarde de spa',
    1000,
    'Relax',
    'Sesión de Spa y masajes.',
    false,
    0
  )
);

let pas = document.getElementById('pasajeros');
let cabanasimple = document.getElementById('simplePortada');
let cabanadoble = document.getElementById('doblePortada');
let cabanasuite = document.getElementById('suitePortada');

let fa, fb;
let estadiaTotal;
let pax;
pas.addEventListener('change', () => {
  pax = pas.value;
  sessionStorage.setItem('pax', pas.value);
  localStorage.setItem('pasajeros', pas.value);
});

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
  estadiaTotal = checkOut.diff(checkIn, 'days');

  localStorage.setItem('Check In', fa);
  localStorage.setItem('Check Out', fb);
  sessionStorage.setItem('dias', estadiaTotal);
  localStorage.setItem('estadia', estadiaTotal);

  $('#ingreso').append(`${fa}`);
  $('#egreso').append(`${fb}`);
  $('#guests').append(`${pax}`);
  $('#dias').append(`${estadiaTotal}`);

  if (pas.value <= 3) {
    cabanasimple.style.display = 'initial';
    cabanadoble.style.display = 'initial';
    cabanasuite.style.display = 'initial';
  } else if (pas.value >= 3 && pas.value <= 6) {
    cabanasimple.style.display = 'none';
    cabanadoble.style.display = 'initial';
    cabanasuite.style.display = 'initial';
    aparecerSimple.style.display = 'none';
  }
  if (pas.value > 6) {
    cabanasimple.style.display = 'none';
    cabanadoble.style.display = 'none';
    cabanasuite.style.display = 'initial';
    aparecerDoble.style.display = 'none';
    aparecerSimple.style.display = 'none';
  }
};

function Cabaña(id, nombre, precio, selected) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.selected = selected;
}

const cabins = [];

cabins.push(new Cabaña(1, 'Cabaña simple', simpleIVA, false));
cabins.push(new Cabaña(2, 'Cabaña doble', dobleIVA, false));
cabins.push(new Cabaña(3, 'Cabaña suite', suiteIVA, false));

let cabElegida;
$('.addBtn').on('click', function (e) {
  e.preventDefault();
  const cabanaId = e.target.getAttribute('data-cabaña-id');
  cabins.forEach((cabin) => {
    if (cabin.id.toString() === cabanaId) {
      if (!cabin.selected) {
        $('#quecabana').append(`<h3>${cabin.nombre}</h3>`);
        cabin.selected = true;
        cabElegida = cabin.precio;
        swal({
          title: `Hecho!`,
          text: `¡Cabaña reservada!`,
          icon: 'success'
        });
      } else {
        swal({
          title: 'Ya elegiste esta cabaña',
          icon: 'warning'
        });
      }
    }
  });
});

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
};

btnDoble.onclick = () => {
  $('#doble').toggle(1000);
  aparecerDoble.style.display = 'flex';
  aparecerSimple.style.display = 'none';
  aparecerSuite.style.display = 'none';
};

btnSuite.onclick = () => {
  $('#suite').toggle(1000);
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

$('.services').on('click', function (event) {
  event.preventDefault();
  const serviceId = event.target.getAttribute('data-service-id');
  servicios.forEach((service) => {
    if (service.id.toString() === serviceId) {
      if (!service.selected) {
        swal('Cantidad de personas: ', {
          content: 'input'
        }).then((value) => {
          swal(`Servicio agregado para ${value} personas`);
          service.cantidadPersonas = value;
          $('#serviciosfinales').append(
            `<p>${service.nombre} para ${value} personas = $${
              service.costo * value
            } </p>`
          );
        });
        service.selected = true;
      } else {
        swal({
          title: 'Ya contrataste este servicio',
          text: '¡Conoce los otros que tenemos!',
          icon: 'warning'
        });
      }
    }
  });
});

const formContacto = document.getElementById('formContacto');
const nombreContacto = document.getElementById('fullName');
const telefonoContacto = document.getElementById('phone');
const emailContacto = document.getElementById('email');

$('#showForm').on('click', function (event) {
  event.preventDefault();
  $('#staticBackdrop').fadeOut();
  if ((pax, fa, fb !== undefined)) {
    $('#reservaFinal').fadeIn('3000');
    swal({
      title: '¡Perfecto!',
      text: 'Agrega tus datos y finaliza la reserva.'
    });
  } else {
    swal({
      title: 'Elige la fecha y cantidad de pasajeros para continuar',
      icon: 'error'
    });
  }
});

const precio = (a, b) => {
  return a * b;
};
let cabFinal;
let costoService;
$('.btnfinal').on('click', () => {
  costoService = 0;
  servicios.forEach((service) => {
    if (service.selected && service.cantidadPersonas > 0) {
      costoService += precio(service.costo, service.cantidadPersonas);
    }
  });
  cabFinal = precio(cabElegida, estadiaTotal);
  let costoTotal = estadia(cabFinal, costoService);
  $('#costoTotal').html('');
  $('#costoTotal').append(`Precio final: <strong>${costoTotal}</strong>`);
});

const lastForm = document.getElementById('reservaFinal');
lastForm.onsubmit = (event) => {
  event.preventDefault();
  swal({
    title: '¡Tu reserva fue hecha con éxito!',
    text: 'Gracias por elegirnos.',
    icon: 'success'
  });
};

let HTMLCard = '';
let HTMLError = '';
let contenidoJSON = '';

//AJAX

function Testimonios() {
  $.ajax({
    url: 'https://randomuser.me/api/?results=4&nat=us,fr,br',
    dataType: 'json',
    success: function (data) {
      contenidoJSON = data.results;
      for (let i in contenidoJSON) {
        HTMLCard += `  <div class="card m-4 rounded-3">
                                <img class="card-img-top img-testimonial" src="${contenidoJSON[i].picture.large}">
                                <div class="card-body text-center">
                                    <p class="card-text-testimonial">"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</p>
                                    <h5 class="card-title-testimonial fw-bolder">${contenidoJSON[i].name.first} ${contenidoJSON[i].name.last}</h5>
                                    <h6 class="card-city-testimonial">${contenidoJSON[i].location.city}, ${contenidoJSON[i].location.country}</h6>
                                </div>
                            </div>`;
        $('#testimonios').html(HTMLCard);
      }
    },
    error: function () {
      HTMLError =
        "<div class='center-text'>" +
        '<h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4>' +
        '</div>';
      $('#testimonial-item').html(HTMLError);
    }
  });
}
Testimonios();
$('document').ready(function () {
  testFadeIn.hide();
});
const testimoniosClientes = $('#testimoniosClientes');
const testFadeIn = $('#testimonios');

testimoniosClientes.mouseover(function () {
  testFadeIn.fadeIn(3000);
});

formContacto.onsubmit = (evt) => {
  evt.preventDefault();
  localStorage.setItem('Nombre', nombreContacto.value);
  localStorage.setItem('Telefono', telefonoContacto.value);
  localStorage.setItem('Email', emailContacto.value);
  swal({
    title: `Gracias por contactarte con nosotros.`,
    text: 'En breve nos comunicaremos para despejar tus dudas y continuar con el proceso de Reserva.'
  });
};
