let isAuth = localStorage.getItem('isAuth') || "Not Authenticated";

if (isAuth !== 'Authenticated') {
    // user is not authenticated;
    window.location.href = "./login.html";
} else {
    let navbar = document.querySelector('.navbar');
    let div = document.createElement('div');
    let button = document.createElement("button");
    button.innerText = 'Logout';
    button.onclick = function () {
        localStorage.setItem('isAuth', 'Not Authenticated');
        location.reload();
    }
    div.append(button);
    navbar.append(div);
}

let productsDiv = document.getElementById('products');
let mainData = [];

function addToCartFunc(obj) {
    console.log(obj);
    let cartDetails = JSON.parse(localStorage.getItem("cartDetails")) || [];
    cartDetails.push(obj);
    localStorage.setItem('cartDetails', JSON.stringify(cartDetails));
};

function displayProducts(data) {
    data.forEach((ele) => {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');
        let price = document.createElement('p');
        let rating = document.createElement('p');
        let addToCart = document.createElement('button');
        img.src = ele.image;
        img.style.height = '100px';
        h3.innerText = ele.title;
        price.innerText = `$${ele.price}`;
        rating.innerText = `${ele.rating.rate} stars`;
        addToCart.innerText = 'Add to Cart';
        addToCart.onclick = function () {
            addToCartFunc(ele);
        }
        div.append(h3, img, price, rating, addToCart);
        productsDiv.append(div);
    });
}

function sortRateHighToLow() {
    // sorted this data w.r.t rating
    mainData.sort(function (a, b) {
        return b.rating.rate - a.rating.rate;
    })
    // previous data will get erase
    productsDiv.innerHTML = null;
    displayProducts(mainData);
}

function sortPriceLowToHigh() {
    // sorted this data w.r.t rating
    mainData.sort(function (a, b) {
        return a.price - b.price;
    })
    // previous data will get erase
    productsDiv.innerHTML = null;
    displayProducts(mainData);
}

function sortPriceHighToLow() {
    // sorted this data w.r.t rating
    mainData.sort(function (a, b) {
        return b.price - a.price;
    })
    // previous data will get erase
    productsDiv.innerHTML = null;
    displayProducts(mainData);
}

function filterData() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let filterType = document.getElementById('filterType').value;
    let filteredData;
    filterData.innerHTML = '<strong>Product not found for the given criteria.</strong>';

    if (filterType === 'below') {
        filteredData = mainData.filter(item => item.price < inputValue);

    } else if (filterType === 'above') {
        filteredData = mainData.filter(item => item.price > inputValue);

    }
    productsDiv.innerHTML = null;
    if (filteredData.length > 0) {

        displayProducts(filteredData);
    } else {
        productsDiv.innerHTML = null;
        productsDiv.innerHTML = '<strong>Product not found for the given criteria.</strong>';
    }

}

fetch('./db.json')
    .then((res) => res.json())
    .then((data) => {
        mainData = data;
        displayProducts(mainData);
    })
    .catch((err) => console.log(err));