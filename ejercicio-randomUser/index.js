import { getTemplate } from './templates.js';

let number = 10;
let url = `https://randomuser.me/api/?results=${number}`;

requestContacts();

const btnRequest = document.querySelector('.request');
btnRequest.addEventListener('click', function(){
    number += 10;
    url = `https://randomuser.me/api/?results=${number}`;
    requestContacts();
});

function requestContacts() {
    axios.get(url)
        .then(function (response) {
            const contacts = response.data.results;
            const list = document.querySelector('.list');
            list.innerHTML = '';
            contacts.forEach(function (contact) {
                list.innerHTML += `
                    <li class="user">
                        <img src="${contact.picture.medium}">
                        <div class="text">
                            <h1>${contact.name.first}</h1>
                            <a href="mailto:${contact.email}">${contact.email}</a>
                        </div>
                    </li>
                `
            });
        })
        .catch(function (error) {
            alert('La petición ha fallado');
        });
}