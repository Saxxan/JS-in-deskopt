export const renderContact = function(name, surname, email, tel) {
    return `
        <div class="contact">
            <p>${name} ${surname}</p>
            <a href="mailto:${email}">${email}</a>
            <a href="tel:${tel}">${tel}</a>
        </div>`
}

export const renderContacts = function(userList) {
    userList.forEach(function(user){
        const newContact = renderContact(user.name, user.surname, user.email, user.tel);
        document.querySelector(".contact-list").innerHTML += newContact;
    });
}