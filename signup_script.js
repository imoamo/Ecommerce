// let btn = document.getElementById('btn');
let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let userDetails = {
        email: email.value,
        password: password.value,
    }
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    window.location.href = "login.html";
})