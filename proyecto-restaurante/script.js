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

function money(value) {
    return "$" + Number(value).toLocaleString("es-CO");
}

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

function showPage(page) {
    document.querySelectorAll(".page").forEach(item => {
        item.classList.add("hidden");
    });

    $(page).classList.remove("hidden");

    if (page === "ordersPage") {
        renderOrders();
    }

    window.scrollTo(0,0);
}

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

function logout() {
    localStorage.removeItem("currentUser");

    currentUser = null;
    cart = [];

    $("appSection").classList.add("hidden");
    $("authSection").classList.remove("hidden");

    $("loginUser").value = "";
    $("loginPass").value = "";

    showLogin();
}

function productCard(product) {
    return `
        <div class="product-card">
            <div class="product-icon">${product.icon}</div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>

            <div class="product-bottom">
                <span class="price">${money(product.price)}</span>
                <button type="button" class="add-btn" data-id="${product.id}">+</button>
            </div>
        </div>
    `;
}

function renderPopular() {
    $("popularProducts").innerHTML = products
        .slice(0,4)
        .map(productCard)
        .join("");

    addProductEvents($("popularProducts"));
}

function renderMenu() {
    const search = $("searchInput").value.toLowerCase().trim();

    const filtered = products.filter(product => {
        const categoryOK =
            currentCategory === "all" ||
            product.category === currentCategory;

        const searchOK =
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search);

        return categoryOK && searchOK;
    });

    if (filtered.length === 0) {
        $("menuProducts").innerHTML =
            '<div class="no-orders"><h2>No encontramos productos</h2><p>Prueba otra búsqueda.</p></div>';
        return;
    }

    $("menuProducts").innerHTML =
        filtered.map(productCard).join("");

    addProductEvents($("menuProducts"));
}

function addProductEvents(container) {
    container.querySelectorAll(".add-btn").forEach(button => {
        button.onclick = () => {
            addToCart(Number(button.dataset.id));
        };
    });
}

function addToCart(id) {
    const product = products.find(item => item.id === id);

    if (!product) {
        return;
    }

    const existing = cart.find(item => item.id === id);

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
    const item = cart.find(product => product.id === id);

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
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
        $("cartItems").innerHTML = cart.map(item => `
            <div class="cart-item">

                <div class="cart-item-icon">
                    ${item.icon}
                </div>

                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${money(item.price)}</p>
                </div>

                <div class="quantity">
                    <button type="button" data-minus="${item.id}">−</button>
                    <strong>${item.quantity}</strong>
                    <button type="button" data-plus="${item.id}">+</button>
                </div>

            </div>
        `).join("");

        $("cartItems").querySelectorAll("[data-minus]").forEach(button => {
            button.onclick = () => {
                changeQuantity(Number(button.dataset.minus),-1);
            };
        });

        $("cartItems").querySelectorAll("[data-plus]").forEach(button => {
            button.onclick = () => {
                changeQuantity(Number(button.dataset.plus),1);
            };
        });
    }

    const subtotal = cart.reduce(
        (total,item) => total + item.price * item.quantity,
        0
    );

    const service = subtotal * 0.05;
    const total = subtotal + service;

    const count = cart.reduce(
        (total,item) => total + item.quantity,
        0
    );

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

function renderOrders() {
    if (!currentUser) {
        $("ordersContainer").innerHTML = "";
        return;
    }

    const orders = getOrders().filter(
        order => order.userId === currentUser.id
    );

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

    $("ordersContainer").innerHTML = orders.map(order => `
        <div class="order-card">

            <div class="order-top">
                <div>
                    <div class="order-id">${order.id}</div>
                    <small>${order.date}</small>
                </div>

                <span class="status">${order.status}</span>
            </div>

            <div class="order-products">
                ${order.products.map(product => `
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
                `).join("")}
            </div>

            <div class="order-bottom">
                <span>${order.type} · ${order.payment}</span>
                <span class="order-total">${money(order.total)}</span>
            </div>

        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {

    $("showRegister").onclick = showRegister;
    $("showLogin").onclick = showLogin;

    $("registerBtn").onclick = () => {

        const name = $("regName").value.trim();
        const user = $("regUser").value.trim();
        const email = $("regEmail").value.trim();
        const pass = $("regPass").value;
        const pass2 = $("regPass2").value;

        if (!name || !user || !email || !pass || !pass2) {
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

        const exists = users.some(
            item => item.user.toLowerCase() === user.toLowerCase()
        );

        if (exists) {
            alert("Ese usuario ya existe.");
            return;
        }

        const account = {
            id: Date.now(),
            name,
            user,
            email,
            pass
        };

        users.push(account);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        $("loginUser").value = user;
        $("loginPass").value = "";

        $("regName").value = "";
        $("regUser").value = "";
        $("regEmail").value = "";
        $("regPass").value = "";
        $("regPass2").value = "";

        alert("Cuenta creada correctamente.");

        showLogin();
    };

    $("loginBtn").onclick = () => {

        const user = $("loginUser").value.trim();
        const pass = $("loginPass").value;

        if (!user || !pass) {
            alert("Ingresa usuario y contraseña.");
            return;
        }

        const account = getUsers().find(
            item => item.user === user && item.pass === pass
        );

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

    $("loginPass").onkeydown = event => {
        if (event.key === "Enter") {
            $("loginBtn").click();
        }
    };

    $("logoutBtn").onclick = logout;

    $("userButton").onclick = () => {
        $("userDropdown").classList.toggle("hidden");
    };

    $("profileButton").onclick = () => {
        $("userDropdown").classList.add("hidden");
        showPage("profilePage");
    };

    document.addEventListener("click", event => {
        if (!event.target.closest(".user-menu")) {
            $("userDropdown").classList.add("hidden");
        }
    });

    document.querySelectorAll("[data-page]").forEach(button => {
        button.onclick = () => {
            showPage(button.dataset.page);
        };
    });

    document.querySelectorAll(".category").forEach(button => {

        button.onclick = () => {

            document.querySelectorAll(".category").forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            currentCategory = button.dataset.category;

            renderMenu();
        };
    });

    $("searchInput").oninput = renderMenu;

    $("cartHeader").onclick = openCart;
    $("floatingCart").onclick = openCart;
    $("closeCart").onclick = closeCart;

    $("overlay").onclick = () => {
        closeCart();
        $("checkoutModal").classList.add("hidden");
        $("receiptModal").classList.add("hidden");
        $("overlay").classList.add("hidden");
    };

    $("clearCart").onclick = () => {

        if (cart.length === 0) {
            return;
        }

        if (confirm("¿Quieres vaciar el carrito?")) {
            cart = [];
            renderCart();
        }
    };

    $("checkoutBtn").onclick = () => {

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

    $("closeCheckout").onclick = () => {
        $("checkoutModal").classList.add("hidden");
        $("overlay").classList.add("hidden");
    };

    $("confirmOrder").onclick = () => {

        const name = $("customerName").value.trim();
        const phone = $("customerPhone").value.trim();
        const type = $("orderType").value;
        const address = $("customerAddress").value.trim();
        const payment = $("paymentMethod").value;

        if (!name || !phone || !type || !payment) {
            alert("Completa todos los campos obligatorios.");
            return;
        }

        if (type === "Domicilio" && !address) {
            alert("Ingresa la dirección de entrega.");
            return;
        }

        const subtotal = cart.reduce(
            (total,item) => total + item.price * item.quantity,
            0
        );

        const service = subtotal * 0.05;
        const total = subtotal + service;

        const order = {
            id: "SB-" + Math.floor(100000 + Math.random() * 900000),
            userId: currentUser.id,
            date: new Date().toLocaleString("es-CO"),
            products: cart.map(item => ({
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                icon: item.icon
            })),
            subtotal,
            service,
            total,
            type,
            address,
            payment,
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

    $("closeReceipt").onclick = () => {
        $("receiptModal").classList.add("hidden");
        $("overlay").classList.add("hidden");
        showPage("ordersPage");
    };

    const savedUser = localStorage.getItem("currentUser");

    if (savedUser) {

        try {

            const user = JSON.parse(savedUser);

            const account = getUsers().find(
                item => item.id === user.id
            );

            if (account) {
                currentUser = account;
                openApp(account);
            }

        } catch {
            localStorage.removeItem("currentUser");
        }
    }

});
