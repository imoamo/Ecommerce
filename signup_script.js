let btn = document.getElementById('btn');
let email = document.getElementById('email');
let password = document.getElementById('password');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    let userDetails = {
        email: email.value,
        password: password.value,
    }
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    window.location.href = "login.html";
})