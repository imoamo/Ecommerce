let isAuth = localStorage.getItem('isAuth') || "Not Authenticated";

if (isAuth !== 'Authenticated') {
    // user is not authenticated;
    window.location.href = "./login.html";
}else{
    let navbar = document.querySelector('.navbar');
    let div = document.createElement('div');
    let button = document.createElement("button");
    button.innerText = 'Logout';
    button.onclick = function () {
        localStorage.setItem('isAuth',"Not Authenticated");
        location.reload();
    }
    div.append(button);
    navbar.append(div);
};

let productsDiv = document.getElementById('products');
let mainData = JSON.parse(localStorage.getItem('cartDetails')) || [];
let cartTotal = document.getElementById('cart-total');

calculateCartTotal(mainData);

function calculateCartTotal(data) {
    let total = data.reduce(function (acc, el) {
        return acc + el.price;
    }, 0)
    cartTotal.innerText = `$${total}`;
};

displayProducts(mainData);

function displayProducts(data) {
    data.forEach((ele) => {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let price = document.createElement('p');
        let rating = document.createElement('p');
        let removeToCart = document.createElement('button');
        img.src = ele.image;
        img.style.height = '100px';
        h3.innerText = ele.title;
        price.innerText = `$${ele.price}`;
        rating.innerText = `${ele.rating.rate} stars`;
        removeToCart.innerText = 'Remove from Cart';
        removeToCart.onclick = function () {
            removeToCartFunc(ele);
        }
        div.append(h3, img, price, rating, removeToCart);
        productsDiv.append(div);
    });
}

function removeToCartFunc(obj) {
    let itemToRemove = obj;
    let updatedCartDetails = mainData.filter(item => item !== itemToRemove);
    localStorage.setItem('cartDetails', JSON.stringify(updatedCartDetails));
    productsDiv.innerHTML = null;
    displayProducts(mainData);
    location.reload();
};


