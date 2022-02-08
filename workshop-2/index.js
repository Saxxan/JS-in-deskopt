const sentences = [
	{ phrase: 'La ceramica de Talavera no es cosa menor, dicho de otra forma es cosa mayor.', author: 'Mariano Rajoy' },
	{ phrase: 'Viva el vino!', author: 'Mariano Rajoy' },
	{ phrase: 'Somos sentimientos y tenemos seres humanos.', author: 'Mariano Rajoy' },
	{ phrase: 'Es el vecino el que elige el alcalde y es el alcalde el que quiere que los vecinos sean el alcalde.', author: 'Mariano Rajoy' },
];

const button = document.querySelector('.show-phrase');

button.addEventListener('click', function() {
	let i = Math.floor(Math.random()*sentences.length);
	let phrase = document.querySelector('.phrase');
	
	phrase.innerHTML = `
		<h1>${sentences[i].phrase}</h1>
		<p>${sentences[i].author}</p>
	`;
});


