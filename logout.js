let isAuth = localStorage.getItem('isAuth');
if (isAuth === 'Authenticated') {
    let navbar = document.querySelector('.navbar');
    let div = document.createElement('div');
    let button = document.createElement("button");
    button.innerText = 'Logout';
    button.onclick = function () {
        localStorage.setItem('isAuth', "Not Authenticated");
        location.reload();
    }
    div.append(button);
    navbar.append(div);
}