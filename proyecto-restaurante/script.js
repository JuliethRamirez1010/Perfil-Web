```javascript
const products = [
    {id:1,category:"burger",name:"Hamburguesa Clásica",price:25000,icon:"🍔",description:"Carne, queso, lechuga, tomate y salsa especial."},
    {id:2,category:"burger",name:"Hamburguesa BBQ",price:29000,icon:"🍔",description:"Carne, queso cheddar, tocineta y salsa BBQ."},
    {id:3,category:"burger",name:"Hamburguesa Especial",price:33000,icon:"🍔",description:"Carne doble, queso, tocineta y vegetales."},
    {id:4,category:"pizza",name:"Pizza Pepperoni",price:30000,icon:"🍕",description:"Salsa de tomate, queso mozzarella y pepperoni."},
    {id:5,category:"pizza",name:"Pizza Hawaiana",price:32000,icon:"🍕",description:"Jamón, piña y queso mozzarella."},
    {id:6,category:"pizza",name:"Pizza Especial",price:38000,icon:"🍕",description:"Jamón, pepperoni, champiñones y queso."},
    {id:7,category:"plato",name:"Pollo a la Plancha",price:28000,icon:"🍗",description:"Pechuga de pollo con arroz, ensalada y papas."},
    {id:8,category:"plato",name:"Lasagna",price:28000,icon:"🍝",description:"Lasagna de carne con salsa de tomate y queso."},
    {id:9,category:"plato",name:"Carne Especial",price:35000,icon:"🥩",description:"Carne a la plancha con papas y ensalada."},
    {id:10,category:"bebida",name:"Gaseosa",price:5000,icon:"🥤",description:"Gaseosa fría de diferentes sabores."},
    {id:11,category:"bebida",name:"Limonada",price:7000,icon:"🍋",description:"Limonada natural preparada al momento."},
    {id:12,category:"bebida",name:"Jugo Natural",price:8000,icon:"🧃",description:"Jugo natural de fruta."},
    {id:13,category:"postre",name:"Brownie",price:9000,icon:"🍫",description:"Brownie de chocolate con salsa especial."},
    {id:14,category:"postre",name:"Cheesecake",price:11000,icon:"🍰",description:"Cheesecake cremoso con frutos rojos."},
    {id:15,category:"postre",name:"Helado",price:8000,icon:"🍨",description:"Helado cremoso de diferentes sabores."}
];

let cart = [];
let currentCategory = "all";
let currentUser = null;

const $ = id => document.getElementById(id);

const money = number => "$" + Number(number).toLocaleString("es-CO");

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem("users")) || [];
    } catch {
        return [];
    }
}

function getOrders() {
    try {
        return JSON.parse(localStorage.getItem("orders")) || [];
    } catch {
        return [];
    }
}

function showLogin() {
    $("loginBox").classList.remove("hidden");
    $("registerBox").classList.add("hidden");
}

function showRegister() {
    $("loginBox").classList.add("hidden");
    $("registerBox").classList.remove("hidden");
}

$("showRegister").onclick = function() {
    showRegister();
};

$("showLogin").onclick = function() {
    showLogin();
};

$("registerBtn").onclick = function() {

    const name = $("regName").value.trim();
    const user = $("regUser").value.trim();
    const email = $("regEmail").value.trim();
    const pass = $("regPass").value;
    const pass2 = $("regPass2").value;

    if (name === "" || user === "" || email === "" || pass === "" || pass2 === "") {
        alert("Completa todos los campos.");
        return;
    }

    if (pass.length < 4) {
        alert("La contraseña debe tener mínimo 4 caracteres.");
        return;
    }

    if (pass !== pass2) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    const users = getUsers();

    const exists = users.some(function(item) {
        return item.user.toLowerCase() === user.toLowerCase();
    });

    if (exists) {
        alert("Ese usuario ya existe.");
        return;
    }

    const account = {
        id: Date.now(),
        name: name,
        user: user,
        email: email,
        pass: pass
    };

    users.push(account);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Cuenta creada correctamente.");

    $("loginUser").value = user;
    $("loginPass").value = "";

    $("regName").value = "";
    $("regUser").value = "";
    $("regEmail").value = "";
    $("regPass").value = "";
    $("regPass2").value = "";

    showLogin();
};

$("loginBtn").onclick = function() {

    const user = $("loginUser").value.trim();
    const pass = $("loginPass").value;

    if (user === "" || pass === "") {
        alert("Ingresa usuario y contraseña.");
        return;
    }

    const users = getUsers();

    const account = users.find(function(item) {
        return item.user === user && item.pass === pass;
    });

    if (!account) {
        alert("Usuario o contraseña incorrectos.");
        return;
    }

    currentUser = account;

    localStorage.setItem(
        "currentUser",
        JSON.stringify(account)
    );

    openApp(account);
};

$("loginPass").onkeydown = function(e) {
    if (e.key === "Enter") {
        $("loginBtn").click();
    }
};

function openApp(user) {

    $("authSection").classList.add("hidden");
    $("appSection").classList.remove("hidden");

    $("navUser").textContent = user.name.split(" ")[0];

    $("profileName").textContent = user.name;
    $("profileUser").textContent = "Usuario: " + user.user;
    $("profileEmail").textContent = "Correo: " + user.email;

    showPage("homePage");

    renderPopular();
    renderMenu();
    renderOrders();
    renderCart();
}

$("logoutBtn").onclick = function() {

    localStorage.removeItem("currentUser");

    currentUser = null;
    cart = [];

    $("appSection").classList.add("hidden");
    $("authSection").classList.remove("hidden");

    $("loginUser").value = "";
    $("loginPass").value = "";

    showLogin();
};

$("userButton").onclick = function() {
    $("userDropdown").classList.toggle("hidden");
};

$("profileButton").onclick = function() {

    $("userDropdown").classList.add("hidden");

    showPage("profilePage");
};

document.addEventListener("click", function(e) {

    if (!e.target.closest(".user-menu")) {
        $("userDropdown").classList.add("hidden");
    }
});

document.querySelectorAll("[data-page]").forEach(function(button) {

    button.onclick = function() {
        showPage(button.dataset.page);
    };

});

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.add("hidden");
    });

    $(pageId).classList.remove("hidden");

    if (pageId === "ordersPage") {
        renderOrders();
    }

    window.scrollTo(0,0);
}

function renderPopular() {

    $("popularProducts").innerHTML = products
        .slice(0,4)
        .map(productCard)
        .join("");

    addProductEvents($("popularProducts"));
}

function renderMenu() {

    const search = $("searchInput").value.toLowerCase();

    const filtered = products.filter(function(product) {

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;

        const searchMatch =
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search);

        return categoryMatch && searchMatch;
    });

    if (filtered.length === 0) {

        $("menuProducts").innerHTML =
            '<div class="no-orders">No encontramos productos.</div>';

        return;
    }

    $("menuProducts").innerHTML =
        filtered.map(productCard).join("");

    addProductEvents($("menuProducts"));
}

function productCard(product) {

    return `
        <div class="product-card">
            <div class="product-icon">${product.icon}</div>

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <div class="product-bottom">
                <span class="price">${money(product.price)}</span>

                <button class="add-btn" data-id="${product.id}">
                    +
                </button>
            </div>
        </div>
    `;
}

function addProductEvents(container) {

    container.querySelectorAll(".add-btn").forEach(function(button) {

        button.onclick = function() {
            addToCart(Number(button.dataset.id));
        };

    });
}

document.querySelectorAll(".category").forEach(function(button) {

    button.onclick = function() {

        document.querySelectorAll(".category").forEach(function(item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        currentCategory = button.dataset.category;

        renderMenu();
    };

});

$("searchInput").oninput = function() {
    renderMenu();
};

function addToCart(id) {

    const product = products.find(function(item) {
        return item.id === id;
    });

    const existing = cart.find(function(item) {
        return item.id === id;
    });

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    renderCart();
    openCart();
}

function changeQuantity(id, change) {

    const item = cart.find(function(product) {
        return product.id === id;
    });

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(function(product) {
            return product.id !== id;
        });
    }

    renderCart();
}

function renderCart() {

    if (cart.length === 0) {

        $("cartItems").innerHTML = `
            <div class="empty-cart">
                <div style="font-size:55px">🛒</div>
                <h3>Tu carrito está vacío</h3>
                <p>Agrega productos del menú.</p>
            </div>
        `;

    } else {

        $("cartItems").innerHTML = cart.map(function(item) {

            return `
                <div class="cart-item">

                    <div class="cart-item-icon">
                        ${item.icon}
                    </div>

                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>${money(item.price)}</p>
                    </div>

                    <div class="quantity">
                        <button data-minus="${item.id}">−</button>
                        <strong>${item.quantity}</strong>
                        <button data-plus="${item.id}">+</button>
                    </div>

                </div>
            `;

        }).join("");

        $("cartItems").querySelectorAll("[data-minus]").forEach(function(button) {

            button.onclick = function() {
                changeQuantity(Number(button.dataset.minus), -1);
            };

        });

        $("cartItems").querySelectorAll("[data-plus]").forEach(function(button) {

            button.onclick = function() {
                changeQuantity(Number(button.dataset.plus), 1);
            };

        });
    }

    const subtotal = cart.reduce(function(total,item) {
        return total + item.price * item.quantity;
    },0);

    const service = subtotal * 0.05;
    const total = subtotal + service;

    const count = cart.reduce(function(total,item) {
        return total + item.quantity;
    },0);

    $("cartSubtotal").textContent = money(subtotal);
    $("cartService").textContent = money(service);
    $("cartTotal").textContent = money(total);
    $("cartCount").textContent = count;
    $("floatingCount").textContent = count;
}

function openCart() {

    $("cartPanel").classList.add("open");
    $("overlay").classList.remove("hidden");
}

function closeCart() {

    $("cartPanel").classList.remove("open");
    $("overlay").classList.add("hidden");
}

$("cartHeader").onclick = openCart;
$("floatingCart").onclick = openCart;
$("closeCart").onclick = closeCart;

$("overlay").onclick = function() {

    closeCart();

    $("checkoutModal").classList.add("hidden");
    $("receiptModal").classList.add("hidden");
};

$("clearCart").onclick = function() {

    if (cart.length === 0) {
        return;
    }

    if (confirm("¿Quieres vaciar el carrito?")) {
        cart = [];
        renderCart();
    }
};

$("checkoutBtn").onclick = function() {

    if (cart.length === 0) {
        alert("Agrega productos al carrito.");
        return;
    }

    $("customerName").value = currentUser.name;

    $("customerPhone").value = "";
    $("customerAddress").value = "";
    $("orderType").value = "";
    $("paymentMethod").value = "";

    $("checkoutModal").classList.remove("hidden");
    $("overlay").classList.remove("hidden");
};

$("closeCheckout").onclick = function() {

    $("checkoutModal").classList.add("hidden");
    $("overlay").classList.add("hidden");
};

$("confirmOrder").onclick = function() {

    const name = $("customerName").value.trim();
    const phone = $("customerPhone").value.trim();
    const type = $("orderType").value;
    const address = $("customerAddress").value.trim();
    const payment = $("paymentMethod").value;

    if (name === "" || phone === "" || type === "" || payment === "") {
        alert("Completa todos los campos obligatorios.");
        return;
    }

    if (type === "Domicilio" && address === "") {
        alert("Ingresa la dirección de entrega.");
        return;
    }

    const subtotal = cart.reduce(function(total,item) {
        return total + item.price * item.quantity;
    },0);

    const service = subtotal * 0.05;
    const total = subtotal + service;

    const order = {
        id: "SB-" + Math.floor(100000 + Math.random() * 900000),
        userId: currentUser.id,
        date: new Date().toLocaleString("es-CO"),
        products: cart.map(function(item) {
            return {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                icon: item.icon
            };
        }),
        subtotal: subtotal,
        service: service,
        total: total,
        type: type,
        address: address,
        payment: payment,
        status: "Preparando"
    };

    const orders = getOrders();

    orders.unshift(order);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    $("receiptId").textContent = order.id;
    $("receiptName").textContent = name;
    $("receiptType").textContent = type;
    $("receiptPayment").textContent = payment;
    $("receiptTotal").textContent = money(total);

    cart = [];

    $("checkoutModal").classList.add("hidden");
    $("receiptModal").classList.remove("hidden");

    renderCart();
    renderOrders();
};

$("closeReceipt").onclick = function() {

    $("receiptModal").classList.add("hidden");
    $("overlay").classList.add("hidden");

    showPage("ordersPage");
};

function renderOrders() {

    const orders = getOrders().filter(function(order) {
        return currentUser && order.userId === currentUser.id;
    });

    if (orders.length === 0) {

        $("ordersContainer").innerHTML = `
            <div class="no-orders">
                <div style="font-size:55px">📋</div>
                <h2>Aún no tienes pedidos</h2>
                <p>Cuando realices un pedido aparecerá aquí.</p>
            </div>
        `;

        return;
    }

    $("ordersContainer").innerHTML = orders.map(function(order) {

        return `
            <div class="order-card">

                <div class="order-top">

                    <div>
                        <div class="order-id">${order.id}</div>
                        <small>${order.date}</small>
                    </div>

                    <span class="status">
                        ${order.status}
                    </span>

                </div>

                <div class="order-products">

                    ${order.products.map(function(product) {

                        return `
                            <div class="order-product">
                                <span>
                                    ${product.icon}
                                    ${product.name}
                                    x${product.quantity}
                                </span>

                                <strong>
                                    ${money(product.price * product.quantity)}
                                </strong>
                            </div>
                        `;

                    }).join("")}

                </div>

                <div class="order-bottom">
                    <span>
                        ${order.type} · ${order.payment}
                    </span>

                    <span class="order-total">
                        ${money(order.total)}
                    </span>
                </div>

            </div>
        `;

    }).join("");
}

const savedUser = JSON.parse(
    localStorage.getItem("currentUser")
);

if (savedUser) {

    const users = getUsers();

    const account = users.find(function(user) {
        return user.id === savedUser.id;
    });

    if (account) {
        currentUser = account;
        openApp(account);
    }
}
```
