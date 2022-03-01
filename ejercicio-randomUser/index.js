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
            contacts.forEach(function (contact, number) {
                list.innerHTML += `
                <li class="user">
                    <img src="${contact.picture.medium}">
                    <div class="text">
                        <h1>${contact.name.first}</h1>
                        <a href="mailto:${contact.email}">${contact.email}</a>
                        <button class="more">Saber más</button>
                    </div>
                </li>
            `;
            });
        })
        .catch(function (error) {
            alert('La petición ha fallado');
        });
}


const users = document.querySelectorAll('.user');
users.forEach(function(user) {
    const buttonMore = user.querySelector('.more');
    buttonMore.addEventListener('click', function(){
        debugger;
        alert('boton pulsado');
        // let text = user.querySelector('.text').innerHTML = '';
        // text.innerHTML += `
        //     <h1>${contact.name.first}</h1>
        //     <h2>${contact.name.last}</h2>
        //     <a href="mailto:${contact.email}">${contact.email}</a>
        //     `
    });
})