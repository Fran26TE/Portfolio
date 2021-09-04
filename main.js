const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Añadir los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});
});

// Reiniciar formulario
const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
	event.preventDefault();
	const form = new FormData(this);
	const response = await fetch(this.action, {
		method: this.method,
		body: form,
		headers: {
			'Accept': 'application/json'
		}
	})
	if (response.ok) {
		this.reset();
		alert('Gracias por contactar!!')
	}
}


// Modo nocturno
const bligth = document.querySelector('#bligth');
const fondo = document.querySelector('#fondo');
const menu = document.querySelector('#menu');
const bienvenido = document.querySelector('#bienvenido');
const habilidades = document.querySelector('#competencias');
const proyectos = document.querySelector('#proyectos');
const contacto = document.querySelector('#contacto');
const pie = document.querySelector('#pie');

load();

bligth.addEventListener('click', e => {
	body.classList.toggle('tema');
	fondo.classList.toggle('tema');
	menu.classList.toggle('tema');
	bienvenido.classList.toggle('tema');
	habilidades.classList.toggle('tema');
	proyectos.classList.toggle('tema');
	contacto.classList.toggle('tema');
	pie.classList.toggle('tema');


	store(body.classList.contains('tema'));

});

function load() {
	const tema = localStorage.getItem('tema');

	if (!tema) {
		store('false');
	} else if (tema == 'true') {
		body.classList.add('tema');
		fondo.classList.add('tema');
		menu.classList.add('tema');
		bienvenido.classList.add('tema');
		habilidades.classList.toggle('tema');
		proyectos.classList.add('tema');
		contacto.classList.add('tema');
		pie.classList.add('tema');
	}
}

function store(value) {
	localStorage.setItem('tema', value);
}


