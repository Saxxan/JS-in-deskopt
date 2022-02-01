// document -> documento html
// querySelector() -> busca en el documento HTML un elemento con input
// tag del elemento, clase o id

let subtitle = document.querySelector('h2');
subtitle.style.color = 'blue';

// querySelector busca el primer elemento con ese nombre
let title = document.querySelector('.title');
title.style.color = 'red';
title.addEventListener('click', function() {
    if (title.style.color === 'red'){
        title.style.color = 'blue';
    } else {
        title.style.color = 'red';
    }
});


// querySelectorAll hace un array de los elementos con ese nombre, clase o id
let titles = document.querySelectorAll('.title');

titles.forEach(function(element){
    element.style.background = 'grey';
    element.style.color = 'white';
});

// Ejercicio 1 JS 
let elementoH1 = document.querySelector('.element');
elementoH1.addEventListener('click', function() {
    if (elementoH1.style.background === 'white'){
        elementoH1.style.background = 'black';
    } else {
        elementoH1.style.background = 'white';
    }
});

let elements = document.querySelectorAll('.e');
for(var i = 0; i<elements.length; i++){
    if(i === (elements.length - 1)){
        elements[i].style.color = 'green';
    }
}


// Ejercicio 2 JS bola movimiento aleatorio
const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  setInterval(() => {
    const positionX = randomNumber(1, 100);
    const positionY = randomNumber(1, 100);
    const floating = document.querySelector('.floating');
    
    floating.style.left = `${positionX}%`;
    floating.style.top = `${positionY}%`;
  }, 5000);


//   Ejercicio 3 JS añadir clase a elemento
let elementoSoso = document.querySelector('.soso');
elementoSoso.addEventListener('click', function() {
    elementoSoso.classList.add('bonito');
    elementoSoso.textContent = 'Ya tiene estilo';
});


// innerHTML modifica el contenido html de un elemento
const users = [
    { name: 'Paco'},
    { name: 'Cris'},
    { name: 'Jesus'},
    { name: 'salva'}
];

users.forEach(function(user){
    document.querySelector('.container').innerHTML = `
        <div class="tweet">
            <h1>${user.name}</h1>
            <button>Saludar</button>
        </div>
    `;
});


// Ejercicio 4 JS modificar elementos con funciones

function oneActive() {
    let elemento = document.querySelector('.elemento');
    elemento.classList.add('active');
};

function cleanClasses() {
    let elementos = document.querySelectorAll('.elemento');
    elementos.forEach(function(elemento){
        elemento.classList.remove('active');
    });
};

function multipleActives() {
    let elementos = document.querySelectorAll('.elemento');
    elementos.forEach(function(elemento){
        elemento.classList.add('active');
    });
};


// Ejercicio 5 JS Eventos
let button = document.querySelector('.boton');
button.addEventListener('click', function(event){
    // event.target es el que emite el evento
    event.target.style.boxShadow = '5px 5px 5px black';
});