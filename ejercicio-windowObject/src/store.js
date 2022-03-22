export const storeUser = function(user) {
    let userList = JSON.parse(window.localStorage.getItem('users'));

    if (userList === null) {
        userList = [];
    }

    userList.push(user);
    // console.log(userList);

    window.localStorage.setItem('users', JSON.stringify(user));

    return userList.length - 1;
}