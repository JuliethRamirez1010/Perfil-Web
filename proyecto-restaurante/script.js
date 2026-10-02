```javascript
const data = [
    {id:1,c:"main",n:"Hamburguesa clásica",p:25000,i:"🍔"},
    {id:2,c:"main",n:"Pizza familiar",p:30000,i:"🍕"},
    {id:3,c:"main",n:"Lasagna",p:28000,i:"🍝"},
    {id:4,c:"main",n:"Perro caliente",p:20000,i:"🌭"},
    {id:5,c:"main",n:"Pollo a la plancha",p:32000,i:"🍗"},
    {id:6,c:"main",n:"Pasta carbonara",p:27000,i:"🍜"},

    {id:7,c:"drink",n:"Gaseosa",p:5000,i:"🥤"},
    {id:8,c:"drink",n:"Jugo natural",p:7000,i:"🧃"},
    {id:9,c:"drink",n:"Limonada",p:6000,i:"🍋"},
    {id:10,c:"drink",n:"Café",p:4000,i:"☕"},

    {id:11,c:"dessert",n:"Torta de chocolate",p:9000,i:"🍰"},
    {id:12,c:"dessert",n:"Helado",p:8000,i:"🍨"},
    {id:13,c:"dessert",n:"Brownie",p:7500,i:"🍫"}
];


let cart = [];
let currentCategory = "all";


const $ = id => document.getElementById(id);

const money = n =>
    "$" + n.toLocaleString("es-CO");


/* TABS */

$("loginTab").onclick = () => {

    $("loginTab").classList.add("active");
    $("registerTab").classList.remove("active");

    $("loginForm").classList.remove("hide");
    $("registerForm").classList.add("hide");

};


$("registerTab").onclick = () => {

    $("registerTab").classList.add("active");
    $("loginTab").classList.remove("active");

    $("registerForm").classList.remove("hide");
    $("loginForm").classList.add("hide");

};


/* REGISTRO */

$("registerBtn").onclick = () => {

    let name = $("regName").value.trim();
    let user = $("regUser").value.trim();
    let email = $("regEmail").value.trim();
    let pass = $("regPass").value;
    let pass2 = $("regPass2").value;

    if(
        name === "" ||
        user === "" ||
        email === "" ||
        pass === "" ||
        pass2 === ""
    ){

        $("registerMsg").textContent =
            "Completa todos los campos.";

        return;
    }


    if(pass !== pass2){

        $("registerMsg").textContent =
            "Las contraseñas no coinciden.";

        return;
    }


    if(pass.length < 4){

        $("registerMsg").textContent =
            "La contraseña debe tener mínimo 4 caracteres.";

        return;
    }


    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    if(users.some(x => x.user === user)){

        $("registerMsg").textContent =
            "Ese usuario ya existe.";

        return;
    }


    users.push({
        name:name,
        user:user,
        email:email,
        pass:pass
    });


    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );


    $("registerMsg").textContent =
        "Cuenta creada correctamente.";


    $("regName").value = "";
    $("regUser").value = "";
    $("regEmail").value = "";
    $("regPass").value = "";
    $("regPass2").value = "";


    setTimeout(() => {

        $("loginTab").click();

        $("loginUser").value = user;

    },1000);

};


/* LOGIN */

$("loginBtn").onclick = () => {

    let user = $("loginUser").value.trim();
    let pass = $("loginPass").value;


    let users =
        JSON.parse(localStorage.getItem("users")) || [];


    let found =
        users.find(x =>
            x.user === user &&
            x.pass === pass
        );


    if(!found){

        $("loginMsg").textContent =
            "Usuario o contraseña incorrectos.";

        return;
    }


    localStorage.setItem(
        "currentUser",
        JSON.stringify(found)
    );


    openApp(found);

};


/* ABRIR APLICACIÓN */

function openApp(user){

    $("auth").classList.add("hide");

    $("app").classList.remove("hide");

    $("welcomeUser").textContent =
        "Hola, " + user.name;


    $("customerName").value =
        user.name;


    menu();

    render();

}


/* LOGOUT */

$("logout").onclick = () => {

    localStorage.removeItem("currentUser");

    cart = [];

    $("app").classList.add("hide");

    $("auth").classList.remove("hide");

    $("loginUser").value = "";

    $("loginPass").value = "";

};


/* MENU */

function menu(){

    let search =
        $("search").value.toLowerCase();


    let products =
        data.filter(x => {

            let category =
                currentCategory === "all" ||
                x.c === currentCategory;


            let text =
                x.n.toLowerCase()
                .includes(search);


            return category && text;

        });


    $("menu").innerHTML =
        products.map(x => `

        <article class="item">

            <div class="pic">
                ${x.i}
            </div>

            <h3>${x.n}</h3>

            <p>
                Delicioso producto preparado
                con ingredientes frescos.
            </p>

            <div class="product-bottom">

                <b>${money(x.p)}</b>

                <button
                    class="add"
                    onclick="add(${x.id})">
                    Agregar
                </button>

            </div>

        </article>

    `).join("");


    if(products.length === 0){

        $("menu").innerHTML =
            "<p>No encontramos productos.</p>";

    }

}


/* CATEGORÍAS */

document.querySelectorAll(".category")
.forEach(button => {

    button.onclick = () => {

        document
        .querySelectorAll(".category")
        .forEach(x =>
            x.classList.remove("active")
        );


        button.classList.add("active");


        currentCategory =
            button.dataset.cat;


        menu();

    };

});


/* BUSCADOR */

$("search").oninput = () => {

    menu();

};


/* AGREGAR */

function add(id){

    let product =
        cart.find(x => x.id === id);


    if(product){

        product.q++;

    }else{

        let item =
            data.find(x => x.id === id);

        cart.push({
            ...item,
            q:1
        });

    }


    render();

}


/* CAMBIAR CANTIDAD */

function change(id, amount){

    let product =
        cart.find(x => x.id === id);


    if(!product){
        return;
    }


    product.q += amount;


    if(product.q <= 0){

        cart =
            cart.filter(x => x.id !== id);

    }


    render();

}


/* CARRITO */

function render(){

    let subtotal =
        cart.reduce(
            (sum,x) =>
            sum + x.p * x.q,
            0
        );


    let service =
        Math.round(subtotal * 0.05);


    let total =
        subtotal + service;


    if(cart.length === 0){

        $("cartItems").innerHTML =
            `<p class="empty">
                Tu carrito está vacío.
            </p>`;

    }else{

        $("cartItems").innerHTML =
            cart.map(x => `

            <div class="cart-item">

                <div>

                    <b>${x.i} ${x.n}</b>

                    <div class="qty">

                        <button
                            onclick="change(${x.id},-1)">
                            −
                        </button>

                        <span>${x.q}</span>

                        <button
                            onclick="change(${x.id},1)">
                            +
                        </button>

                    </div>

                </div>

                <b>
                    ${money(x.p * x.q)}
                </b>

            </div>

        `).join("");

    }


    $("subtotal").textContent =
        money(subtotal);


    $("service").textContent =
        money(service);


    $("total").textContent =
        money(total);

}


/* VACIAR */

$("clear").onclick = () => {

    cart = [];

    render();

    $("orderMsg").textContent =
        "Carrito vacío.";

};


/* CONFIRMAR */

$("confirm").onclick = () => {

    if(cart.length === 0){

        $("orderMsg").textContent =
            "Agrega productos primero.";

        return;

    }


    let name =
        $("customerName").value.trim();


    let phone =
        $("customerPhone").value.trim();


    let address =
        $("customerAddress").value.trim();


    let payment =
        $("payment").value;


    if(
        name === "" ||
        phone === "" ||
        address === "" ||
        payment === ""
    ){

        $("orderMsg").textContent =
            "Completa los datos del pedido.";

        return;

    }


    let number =
        Math.floor(
            100000 +
            Math.random() * 900000
        );


    let subtotal =
        cart.reduce(
            (sum,x) =>
            sum + x.p * x.q,
            0
        );


    let service =
        Math.round(subtotal * 0.05);


    let total =
        subtotal + service;


    $("orderNumber").textContent =
        "#" + number;


    $("receiptName").textContent =
        name;


    $("receiptAddress").textContent =
        address;


    $("receiptPayment").textContent =
        payment;


    $("receiptTotal").textContent =
        money(total);


    $("receiptItems").innerHTML =
        cart.map(x => `

        <div class="receipt-row">

            <span>
                ${x.n} x${x.q}
            </span>

            <b>
                ${money(x.p * x.q)}
            </b>

        </div>

    `).join("");


    $("receipt").classList.remove("hide");


    cart = [];

    render();

};


/* CERRAR FACTURA */

$("closeReceipt").onclick = () => {

    $("receipt").classList.add("hide");

    $("orderMsg").textContent =
        "Pedido realizado correctamente.";

};


/* ENTER LOGIN */

$("loginPass").addEventListener(
    "keydown",
    e => {

        if(e.key === "Enter"){

            $("loginBtn").click();

        }

    }
);


/* USUARIO YA LOGUEADO */

let currentUser =
    JSON.parse(
        localStorage.getItem("currentUser")
    );


if(currentUser){

    openApp(currentUser);

}
```
