let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let userDetails = {
        email: email.value,
        password: password.value,
    }
    let savedDetals = JSON.parse(localStorage.getItem('userDetails')) || {};

    if (userDetails.email === savedDetals.email && userDetails.password === savedDetals.password) {
        localStorage.setItem("isAuth", "Authenticated");
        alert('Login success!');
        window.location.href = "product.html";
    } else {
        alert('Wrong Credentials!');
    }
});