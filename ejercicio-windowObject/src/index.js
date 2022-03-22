import { renderContact, renderContacts } from "./contacts";
import { storeUser } from "./store";

const usersInText = window.localStorage.getItem('users');
const usersParsed = JSON.parse(usersInText);

function paintAndReset(name, surname, email, tel) {
    const html = renderContact(name, surname, email, tel);
    document.querySelector('form').reset();
    document.querySelector('.contact-list').innerHTML += html;
}

document.getElementById('add').addEventListener('click', function() {
    const name = document.querySelector('#name').value;    
    const surname = document.querySelector('#surname').value;
    const email = document.querySelector('#email').value;
    const tel = document.querySelector('#tel').value;

    paintAndReset(name, surname, email, tel);
    const userIndex = storeUser({
        name:name,
        surname:surname,
        email:email,
        tel:tel 
    });

    window.location.href = `/detail.html?user=${userIndex}`;
});

renderContacts(usersParsed);

