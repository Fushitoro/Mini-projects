// LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});


// =====================
// 🛒 CART SYSTEM
// =====================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// ADD TO CART
document.querySelectorAll(".card").forEach((card) => {
  const btn = card.querySelector(".add-btn");

  btn.addEventListener("click", () => {
    const name = card.querySelector("h3").innerText;
    const price = parseInt(
      card.querySelector("span").innerText.replace("₹", "")
    );

    cart.push({ name, price });
    updateCart();
  });
});

// UPDATE CART
function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));

  if (cartCount) cartCount.innerText = cart.length;

  if (cartItems) cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    if (cartItems) {
      const div = document.createElement("div");
      div.innerHTML = `
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">x</button>
      `;
      cartItems.appendChild(div);
    }
  });

  if (cartTotal) cartTotal.innerText = total;
}

// REMOVE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// INIT
updateCart();


// =====================
// 🪟 CART MODAL
// =====================
const cartModal = document.getElementById("cartModal");

const cartBtn = document.querySelector(".cart");
const closeCartBtn = document.querySelector(".close-cart");

if (cartBtn && cartModal) {
  cartBtn.addEventListener("click", () => {
    cartModal.classList.add("active");
  });
}

if (closeCartBtn && cartModal) {
  closeCartBtn.addEventListener("click", () => {
    cartModal.classList.remove("active");
  });
}


// =====================
// 📱 MOBILE MENU
// =====================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// =====================
// 🌗 THEME TOGGLE (FIXED)
// =====================
const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  if (toggleBtn) toggleBtn.textContent = "☀️";
}

// Toggle click
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "🌙";
    }
  });
}