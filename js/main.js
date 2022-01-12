let Cart = [];

window.addEventListener('load',function() {
    if (localStorage.getItem("Cart")) {
        let cart=JSON.parse(localStorage.getItem("Cart"));
        cart.forEach(element => {
            document.querySelector(`#${element.name}`).textContent="Remove from Cart";
        });
        document.querySelector("#lblCartCount").textContent=cart.length;
    }
});

function onCart(button) {
    if (localStorage.getItem("Cart")) {
        Cart = JSON.parse(localStorage.getItem("Cart"));
        if (button.textContent === "Add to Cart") {
            let product = {
                name: button.dataset.product,
                price: button.dataset.price
            }
            Cart.push(product);
            localStorage.setItem("Cart", JSON.stringify(Cart));
            button.textContent = "Remove from Cart";
            document.querySelector("#lblCartCount").textContent=Cart.length;
        } else {
            let temp = [];
            Cart.map(element => {
                if (element["name"] !== button.dataset.product) {
                    temp.push(element);
                }
            });
            localStorage.setItem("Cart", JSON.stringify(temp));
            button.textContent = "Add to Cart";
            document.querySelector("#lblCartCount").textContent=temp.length;
        }
    }
    else {
        let product = {
            name: button.dataset.product,
            price: button.dataset.price
        }
        Cart.push(product)
        localStorage.setItem("Cart", JSON.stringify(Cart));
        button.textContent = "Remove from Cart";
        document.querySelector("#lblCartCount").textContent=Cart.length;
    }
}