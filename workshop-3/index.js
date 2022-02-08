const list = [
	{ name: 'Jon', text: 'Hola!' },
	{ name: 'Carmen', text: 'Ey!' },
	{ name: 'Paco', text: 'Adios!' },
	{ name: 'Maria', text: 'Meh' },
	{ name: 'Salva', text: 'Adios!' },
	{ name: 'Luisfe', text: 'Meh' },
];

list.forEach(function(element){
	// const nombre = `<h1>${element.name}</h1>`;
	// const texto = `<p>${element.text}</p>`;

	const userSays = 
		`<h1>${element.name}</h1>
		<p>${element.text}</p>`;

	const lista = document.querySelector('.list');
	lista.innerHTML += userSays;
});