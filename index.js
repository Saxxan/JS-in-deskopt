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



// JUEGO TRES EN RAYA CON JS
let celdas = document.querySelectorAll('.gameCell');
let result = document.querySelector('.gameResult');
const buttonRestart = document.querySelector('.gameOver');
let turno = 0;

function evaluarTablero() {
    if(celdas[0].textContent==celdas[1].textContent && celdas[0].textContent==celdas[2].textContent && celdas[0].textContent) {
        return true;
    } else if(celdas[3].textContent==celdas[4].textContent && celdas[3].textContent==celdas[5].textContent && celdas[3].textContent) {
        return true;
    } else if(celdas[6].textContent==celdas[7].textContent && celdas[6].textContent==celdas[8].textContent && celdas[6].textContent) {
        return true;
    } else if(celdas[0].textContent==celdas[3].textContent && celdas[0].textContent==celdas[6].textContent && celdas[0].textContent) {
        return true;
    } else if(celdas[1].textContent==celdas[4].textContent && celdas[1].textContent==celdas[7].textContent && celdas[1].textContent) {
        return true;
    } else if(celdas[2].textContent==celdas[5].textContent && celdas[2].textContent==celdas[8].textContent && celdas[2].textContent) {
        return true;
    } else if(celdas[0].textContent==celdas[4].textContent && celdas[0].textContent==celdas[8].textContent && celdas[0].textContent) {
        return true;
    } else if(celdas[2].textContent==celdas[4].textContent && celdas[2].textContent==celdas[6].textContent && celdas[2].textContent) {
        return true;
    } else {
        return false;
    }
}

function celdaPulsada(e) {
    turno++;
    const celda = e.target;
    if(turno % 2 === 0) {
        celda.textContent = 'X';
        celda.style.color = '#B32D45';
    } else {
        celda.textContent = 'O';
        celda.style.color = '#BF8830';
    }
    
    if(evaluarTablero()) {
        result.textContent = 'Han ganado los ' + celda.textContent;
    }
}

celdas.forEach(function(celda){
    celda.addEventListener('click', celdaPulsada);
});

buttonRestart.addEventListener('click', function(){
    celdas.forEach(function(celda) {
        celda.textContent = '';
    });
    result.textContent = '';
});