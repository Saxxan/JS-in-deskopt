export const getTemplate = function(user){
    return `
        <li class="user">
            <img src="${user.picture.medium}">
            <div class="text">
                <h1>${user.name.first}</h1>
                <a href="mailto:${user.email}">${user.email}</a>
            </div>
        </li>
    `
}