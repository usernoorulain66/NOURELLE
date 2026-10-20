let search = document.getElementById("search");
let products = document.querySelectorAll(".product-card");
search.addEventListener("input", function () {
let text = search.value.toLowerCase();
products.forEach(function (product) {
    let name = product.innerText.toLowerCase();
    let category = product.getAttribute("data-category").toLowerCase();
        if (name.includes(text) || category.includes(text)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
});
let categoryButtons = document.querySelectorAll(".category-btn");
categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let category = button.getAttribute("data-category");
        products.forEach(function (product) {
            let productCategory = product.getAttribute("data-category");
            if (category === "All" || category === productCategory) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
        search.value = "";
    });
});
let cartCount = document.getElementById("cart-count");
let totalItems = 0;
let cartButtons = document.querySelectorAll(".add-to-cart");
cartButtons.forEach(function (button) {
button.addEventListener("click", function () {
totalItems = totalItems + 1;
     cartCount.innerText = totalItems;
     alert("Product added to your bag!");
    });
});
let viewButtons = document.querySelectorAll(".view-product");
viewButtons.forEach(function (button) {
button.addEventListener("click", function () {
    let product = button.parentElement;
    let productName = product.querySelector("h3").innerText;
    let productPrice = product.querySelector("p").innerText;
    alert(
        "Product: " + productName +
        "\nPrice: " + productPrice
        );
    });
});
let contactForm = document.getElementById("contact-form");
let formMessage = document.getElementById("form-message");
contactForm.addEventListener("submit", function (event) {
event.preventDefault();
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
    if (
        name.trim() === "" ||
        email.trim() === "" ||
        message.trim() === ""
        )   {
             formMessage.innerText = "Please fill in all fields.";
              } else {
               formMessage.innerText =
                     "Thank you, " + name + "! Your message has been received.";
                    contactForm.reset();
    }
});