/* =========================================================
📍 Detectar la página actual
========================================================= */
const path = window.location.pathname;
const isApplePage = path.includes("apple.html");
const isSamsungPage = path.includes("samsung.html");
const isMotorolaPage = path.includes("motorola.html");
const isXiaomiPage = path.includes("xiaomi.html");


/* =========================================================
🛍️ Catálogo de productos
========================================================= */
const products = {
  apple: [
    { id: "apple-0", name: "iPhone 14", price: 20000, colors: ["blanco", "negro", "azul"], img: "images/14.jpg", description: 'Pantalla de 6.1", cámara dual avanzada, rendimiento A15 Bionic.' },
    { id: "apple-1", name: "iPhone 14 Pro", price: 25000, colors: ["blanco", "negro", "azul"], img: "images/14pro.jpg", description: 'Pantalla Super Retina XDR 6.1", cámara triple, Dynamic Island.' },
    { id: "apple-2", name: "iPhone 13", price: 17000, colors: ["negro", "azul", "blanco"], img: "images/13.jpg", description: 'Pantalla 6.1", cámara dual, chip A15 Bionic rápido y eficiente.' },
    { id: "apple-3", name: "iPhone 12", price: 15000, colors: ["blanco", "azul"], img: "images/12.jpg", description: 'Pantalla OLED 6.1", diseño ligero, cámara dual con modo nocturno.' },
    { id: "apple-4", name: "iPhone 15", price: 30000, colors: ["blanco", "negro"], img: "images/15.jpg", description: 'Compacto, potente A13 Bionic, cámara de 12MP y Touch ID.' },
    { id: "apple-5", name: "iPhone 16", price: 60000, colors: ["blanco", "negro", "rojo"], img: "images/16.jpg", description: 'Pantalla Liquid Retina 6.1", cámara dual y Face ID rápido.' }
  ],
  samsung: [
    { id: "samsung-0", name: "Galaxy S24", price: 23000, colors: ["negro", "azul", "blanco"], img: "images/s24.jpg", description: "Pantalla AMOLED, cámara triple, rendimiento premium." },
    { id: "samsung-1", name: "Galaxy S23", price: 20000, colors: ["blanco", "negro"], img: "images/s23.jpg", description: "Pantalla AMOLED 6.1\", cámara triple, potente procesador." },
    { id: "samsung-2", name: "Galaxy A55", price: 13000, colors: ["azul", "negro", "rosa"], img: "images/55.jpg", description: "Pantalla AMOLED, cámara dual, batería duradera." },
    { id: "samsung-3", name: "Galaxy Z Flip 5", price: 22000, colors: ["negro", "verde"], img: "images/flip.jpg", description: "Pantalla plegable, cámara dual, diseño compacto." },
    { id: "samsung-4", name: "Galaxy A35", price: 11000, colors: ["blanco", "azul"], img: "images/35.jpg", description: "Pantalla AMOLED, cámara dual, rendimiento equilibrado." }
  ],
  motorola: [
    { id: "motorola-0", name: "Moto Edge 50 Ultra", price: 21000, colors: ["negro", "beige", "verde"], img: "images/moto1.jpg", description: "Pantalla OLED 6.7\", cámara triple, gran batería." },
    { id: "motorola-1", name: "Moto G Stylus 5G", price: 12000, colors: ["negro", "azul"], img: "images/5gstylis.jpg", description: "Pantalla 6.8\", cámara triple, lápiz incorporado." },
    { id: "motorola-2", name: "Moto G Power 5G", price: 9500, colors: ["negro", "gris"], img: "images/moto5g.jpg", description: "Batería duradera, pantalla grande, rendimiento básico." },
    { id: "motorola-3", name: "Moto G84 5G", price: 10500, colors: ["rojo", "negro", "azul"], img: "images/84.jpg", description: "Pantalla AMOLED, cámara dual, buena batería." },
    { id: "motorola-4", name: "Moto Razr 40 Ultra", price: 22000, colors: ["negro", "rosa", "azul"], img: "images/40.jpg", description: "Pantalla plegable, diseño premium, cámara doble." }
  ],
  xiaomi: [
    { id: "xiaomi-0", name: "Xiaomi 14", price: 21000, colors: ["negro", "blanco", "verde"], img: "images/xpro.jpg", description: "Pantalla AMOLED, cámara triple, gran rendimiento." },
    { id: "xiaomi-1", name: "Redmi Note 13 Pro+", price: 13000, colors: ["morado", "negro", "azul"], img: "images/redmi13.jpg", description: "Pantalla AMOLED, cámara cuádruple, batería duradera." },
    { id: "xiaomi-2", name: "Xiaomi 13T", price: 16000, colors: ["azul", "negro"], img: "images/x13.jpg", description: "Pantalla AMOLED, cámara triple, buen rendimiento." },
    { id: "xiaomi-3", name: "Redmi Note 12", price: 10000, colors: ["verde", "blanco"], img: "images/x12.jpg", description: "Pantalla LCD, cámara dual, precio económico." },
    { id: "xiaomi-4", name: "Poco F6 Pro", price: 17000, colors: ["negro", "blanco"], img: "images/poco.jpg", description: "Pantalla AMOLED, cámara triple, rendimiento gaming." }
  ]
};

let cart = [];

/* =========================================================
📱 Mostrar productos
========================================================= */
function showBrand(brand) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";

  products[brand].forEach((p, index) => {
  const html = `
    <div class="product-card card">
      <div class="img-wrapper">
        <img src="${p.img}" alt="${p.name}" class="product-image">
        <div class="overlay">${p.description}</div>
      </div>
      <div class="card-body">
        <h5 class="card-title">${p.name}</h5>
        <p class="price">$${p.price.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</p>
        <label>Color:</label>
        <select id="color-${brand}-${index}">
          ${p.colors.map(c => `<option value="${c}">${c}</option>`).join("")}
        </select>
        <label>Cantidad:</label>
        <input type="number" class="form-control form-control-sm text-center" id="qty-${brand}-${index}" min="1">
       <button class="add-to-cart btn btn-danger" onclick="addToCart('${brand}', ${index})">
        <i class="bi bi-cart-plus-fill"></i> Agregar al carrito
       </button>

      </div>
    </div>
  `;
  container.innerHTML += html;
});


  // Sincroniza inputs si hay productos guardados
  updateProductInputs();
}

/* =========================================================
🛒 Funcionalidad de carrito
========================================================= */
function addToCart(brand, index) {
  const colorSelect = document.getElementById(`color-${brand}-${index}`);
  const qtyInput = document.getElementById(`qty-${brand}-${index}`);
  const color = colorSelect.value;

  const product = products[brand][index];
  const existing = cart.find(item => item.id === product.id && item.color === color && item.brand === brand);

  if (existing) {
    // 🔢 Si el producto ya está, aumenta en 1
    existing.qty += 1;
    existing.total = existing.price * existing.qty;
    qtyInput.value = existing.qty; // reflejar la cantidad actual
  } else {
    // 🆕 Si es nuevo, empieza en 1
    cart.push({ ...product, brand, color, qty: 1, total: product.price });
    qtyInput.value = 1;
  }

  updateCartCount();
  renderCart();
  saveCart();
}


/* =========================================================
🧾 Render y control del carrito
========================================================= */
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cart-count").textContent = totalItems;
}
function renderCart() {
  const itemsList = document.getElementById("cart-items");
  if (!itemsList) return;
  itemsList.innerHTML = "";
  let totalPrice = 0;

  if (cart.length === 0) {
    itemsList.innerHTML = `<li class="text-center text-muted">Tu carrito está vacío</li>`;
    document.getElementById("total-price").textContent = "Total: $0.00";
    return;
  }

 cart.forEach((item, index) => {
  const li = document.createElement("li");
  li.className = "cart-item";
  li.innerHTML = `
    <span class="item-info">${item.brand.toUpperCase()} - ${item.name} (${item.color})</span>
    <div class="item-controls">
      <button class="decrement btn btn-outline-secondary btn-sm rounded-circle" onclick="changeQty(${index}, -1)">
        <i class="bi bi-dash-lg"></i>
      </button>
      <span class="badge bg-secondary">${item.qty}</span>
      <button class="increment btn btn-outline-secondary btn-sm rounded-circle" onclick="changeQty(${index}, 1)">
        <i class="bi bi-plus-lg"></i>
      </button>
      <button class="remove btn btn-outline-danger btn-sm rounded-circle" onclick="removeFromCart(${index})">
        <i class="bi bi-trash3"></i>
      </button>
    </div>
  `;
  itemsList.appendChild(li);
  totalPrice += item.total;
});


  document.getElementById("total-price").textContent = `Total: $${totalPrice.toLocaleString()}.00`;
}

function changeQty(index, delta) {
  const item = cart[index];
  item.qty += delta;

  if (item.qty <= 0) {
    cart.splice(index, 1);
  } else {
    item.total = item.price * item.qty;
  }

  updateCartCount();
  renderCart();
  saveCart();
  updateProductInputs(); // 🔄 sincronizar con las tarjetas
}

function removeFromCart(index) {
  const removedItem = cart[index];
  cart.splice(index, 1);
  updateCartCount();
  renderCart();
  saveCart();
  clearProductInput(removedItem); // 🧹 limpiar input correspondiente
}

function clearCart() {
  cart = [];
  updateCartCount();
  renderCart();
  saveCart();
  updateProductInputs();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* =========================================================
🔄 Sincronización inputs ↔ carrito
========================================================= */
function updateProductInputs() {
  // Limpia todos los inputs primero
  document.querySelectorAll('input[id^="qty-"]').forEach(input => (input.value = ""));

  cart.forEach(item => {
    const brand = item.brand;
    const productIndex = products[brand].findIndex(p => p.id === item.id);
    if (productIndex !== -1) {
      const colorSelect = document.getElementById(`color-${brand}-${productIndex}`);
      const qtyInput = document.getElementById(`qty-${brand}-${productIndex}`);
      if (colorSelect && qtyInput && colorSelect.value === item.color) {
        qtyInput.value = item.qty;
      }
    }
  });
}

function clearProductInput(item) {
  if (!item) return;
  const brand = item.brand;
  const productIndex = products[brand].findIndex(p => p.id === item.id);
  if (productIndex !== -1) {
    const colorSelect = document.getElementById(`color-${brand}-${productIndex}`);
    const qtyInput = document.getElementById(`qty-${brand}-${productIndex}`);
    if (colorSelect && qtyInput && colorSelect.value === item.color) {
      qtyInput.value = ""; // limpia al eliminar
    }
  }
}

/* =========================================================
🚀 Inicialización
========================================================= */
window.addEventListener("load", () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) cart = JSON.parse(savedCart);
  updateCartCount();
  renderCart();

  if (isApplePage) showBrand("apple");
  else if (isSamsungPage) showBrand("samsung");
  else if (isMotorolaPage) showBrand("motorola");
  else if (isXiaomiPage) showBrand("xiaomi");
});

/* =========================================================
💳 Finalizar compra
========================================================= */
function checkout() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío 😕");
    return;
  }
  localStorage.setItem("checkoutData", JSON.stringify(cart));
  clearCart();
  window.location.href = "checkout.html";
}

const nameInput = document.getElementById('name');
const numberInput = document.getElementById('cardNumber');
const expiryInput = document.getElementById('expiry');
const form = document.getElementById('paymentForm');

const displayName = document.getElementById('displayName');
const displayNumber = document.getElementById('displayNumber');
const displayExpiry = document.getElementById('displayExpiry');

const overlay = document.getElementById('overlay');
const loader = document.getElementById('loader');
const checkmark = document.getElementById('checkmark');
const success = document.getElementById('success');
const volverBtn = document.getElementById('volverBtn');
const cancelBtn = document.getElementById('cancelBtn');

// === Actualizar datos en la tarjeta ===
nameInput.addEventListener('input', () => {
  displayName.textContent = nameInput.value.toUpperCase() || 'NOMBRE DEL TITULAR';
});

numberInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '').substring(0, 16);
  value = value.replace(/(.{4})/g, '$1 ').trim();
  displayNumber.textContent = value || '#### #### #### ####';
  e.target.value = value;
});

expiryInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '').substring(0, 4);
  if (value.length >= 3) value = value.substring(0, 2) + '/' + value.substring(2);
  displayExpiry.textContent = value || 'MM/AA';
  e.target.value = value;
});

// === Simulación de pago ===
form.addEventListener('submit', (e) => {
  e.preventDefault();
  overlay.style.display = 'flex';
  loader.style.display = 'block';
  checkmark.style.display = 'none';
  success.style.display = 'none';
  volverBtn.style.display = 'none';

  setTimeout(() => {
    loader.style.display = 'none';
    checkmark.style.display = 'block';
    success.style.display = 'block';
    volverBtn.style.display = 'block';
  }, 3000);
});

// === Botón "Volver a inicio" ===
volverBtn.addEventListener('click', () => {
  window.location.href = "index.html";
});

// === Botón "Cancelar compra" (sin alert ni confirm) ===
cancelBtn.addEventListener('click', () => {
  form.reset();
  displayName.textContent = 'NOMBRE DEL TITULAR';
  displayNumber.textContent = '#### #### #### ####';
  displayExpiry.textContent = 'MM/AA';
  window.location.href = "index.html"; // Redirige directamente
});
