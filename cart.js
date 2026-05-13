const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".card .cta");

let count = 0;

addButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;
    });
});