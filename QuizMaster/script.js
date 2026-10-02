const categorias = [
    {
        nombre: "Cultura General",
        preguntas: [
            ["¿Cuál es el planeta más grande del sistema solar?", ["Júpiter","Marte","Venus","Mercurio"], 0],
            ["¿Cuántos días tiene un año bisiesto?", ["365","366","364","360"], 1],
            ["¿Cuál es el océano más grande?", ["Atlántico","Índico","Pacífico","Ártico"], 2],
            ["¿Cuál es el idioma más hablado del mundo por número de hablantes nativos?", ["Español","Inglés","Chino mandarín","Francés"], 2],
            ["¿Cuántos continentes existen tradicionalmente?", ["5","6","7","8"], 2],

            ["¿Quién escribió Don Quijote de la Mancha?", ["Miguel de Cervantes","Gabriel García Márquez","Pablo Neruda","Jorge Luis Borges"], 0],
            ["¿Cuál es el metal cuyo símbolo químico es Au?", ["Plata","Oro","Hierro","Cobre"], 1],
            ["¿En qué país se encuentra la Torre Eiffel?", ["Italia","Francia","España","Alemania"], 1],
            ["¿Cuál es el río más largo de Sudamérica?", ["Amazonas","Nilo","Danubio","Misisipi"], 0],
            ["¿Cuál es la capital de Japón?", ["Kioto","Osaka","Tokio","Hiroshima"], 2],

            ["¿Quién pintó la Mona Lisa?", ["Van Gogh","Leonardo da Vinci","Picasso","Dalí"], 1],
            ["¿Cuál es el elemento químico con símbolo O?", ["Oro","Oxígeno","Osmio","Ozono"], 1],
            ["¿En qué año llegó el ser humano a la Luna?", ["1965","1969","1972","1959"], 1],
            ["¿Cuál es el país más grande del mundo por territorio?", ["China","Canadá","Rusia","Estados Unidos"], 2],
            ["¿Qué instrumento tiene normalmente 88 teclas?", ["Violín","Piano","Guitarra","Flauta"], 1]
        ]
    },

    {
        nombre: "Ciencia",
        preguntas: [
            ["¿Qué órgano bombea la sangre?", ["Pulmón","Cerebro","Corazón","Hígado"], 2],
            ["¿Cuál es el planeta rojo?", ["Marte","Venus","Saturno","Neptuno"], 0],
            ["¿Qué gas necesitan los seres humanos para respirar?", ["Oxígeno","Helio","Hidrógeno","Nitrógeno"], 0],
            ["¿Cuántos huesos tiene aproximadamente un adulto?", ["106","206","306","406"], 1],
            ["¿Qué fuerza nos mantiene sobre la Tierra?", ["Electricidad","Gravedad","Magnetismo","Presión"], 1],

            ["¿Cuál es la unidad básica de la vida?", ["Átomo","Célula","Tejido","Órgano"], 1],
            ["¿Qué proceso realizan las plantas para producir alimento?", ["Digestión","Respiración","Fotosíntesis","Fermentación"], 2],
            ["¿Cuál es el centro de un átomo?", ["Electrón","Núcleo","Protón","Neutrón"], 1],
            ["¿Qué vitamina produce principalmente el cuerpo con la luz solar?", ["A","B12","C","D"], 3],
            ["¿Cuál es el órgano principal del sistema nervioso?", ["Corazón","Cerebro","Pulmón","Riñón"], 1],

            ["¿Cuál es la velocidad aproximada de la luz?", ["300 km/s","3.000 km/s","300.000 km/s","3.000.000 km/s"], 2],
            ["¿Qué partícula tiene carga negativa?", ["Protón","Neutrón","Electrón","Núcleo"], 2],
            ["¿Cuál es el pH aproximado del agua pura?", ["2","5","7","12"], 2],
            ["¿Qué científico formuló la teoría de la relatividad?", ["Newton","Einstein","Darwin","Tesla"], 1],
            ["¿Qué molécula contiene la información genética?", ["ATP","ADN","Agua","Glucosa"], 1]
        ]
    },

    {
        nombre: "Historia",
        preguntas: [
            ["¿En qué año comenzó la Segunda Guerra Mundial?", ["1939","1941","1945","1935"], 0],
            ["¿Quién fue Simón Bolívar?", ["Un científico","Un libertador","Un escritor","Un músico"], 1],
            ["¿Dónde se construyeron las pirámides de Giza?", ["Grecia","Egipto","Roma","México"], 1],
            ["¿Qué civilización construyó Machu Picchu?", ["Maya","Azteca","Inca","Romana"], 2],
            ["¿Quién fue el primer emperador romano?", ["Julio César","Augusto","Nerón","Trajano"], 1],

            ["¿En qué año cayó el Imperio Romano de Occidente?", ["476","500","410","395"], 0],
            ["¿Qué acontecimiento ocurrió en 1492?", ["Revolución Francesa","Llegada de Colón a América","Primera Guerra Mundial","Caída de Roma"], 1],
            ["¿Quién lideró la independencia de la India mediante la no violencia?", ["Gandhi","Mandela","Churchill","Napoleón"], 0],
            ["¿Qué país lanzó las bombas atómicas sobre Hiroshima y Nagasaki?", ["Alemania","Japón","Estados Unidos","Rusia"], 2],
            ["¿Cuál fue una de las grandes civilizaciones de Mesopotamia?", ["Sumeria","Maya","Inca","Vikinga"], 0],

            ["¿En qué año comenzó la Revolución Francesa?", ["1776","1789","1810","1804"], 1],
            ["¿Quién fue conocido como el Rey Sol?", ["Luis XIV","Napoleón","Carlos V","Enrique VIII"], 0],
            ["¿Qué muro cayó en 1989?", ["Muro de Berlín","Muro de Roma","Muro de Londres","Muro de París"], 0],
            ["¿Qué imperio tuvo como capital Constantinopla?", ["Bizantino","Inca","Mongol","Azteca"], 0],
            ["¿Quién fue el primer presidente de Estados Unidos?", ["Abraham Lincoln","George Washington","Thomas Jefferson","John Adams"], 1]
        ]
    },

    {
        nombre: "Geografía",
        preguntas: [
            ["¿Cuál es la capital de Colombia?", ["Medellín","Bogotá","Cali","Cartagena"], 1],
            ["¿Cuál es el país más grande de Sudamérica?", ["Argentina","Perú","Brasil","Colombia"], 2],
            ["¿En qué continente está Egipto?", ["Asia","África","Europa","Oceanía"], 1],
            ["¿Cuál es la capital de Francia?", ["Madrid","Roma","París","Berlín"], 2],
            ["¿Qué océano está al oeste de América?", ["Atlántico","Pacífico","Índico","Ártico"], 1],

            ["¿Cuál es la capital de Australia?", ["Sídney","Melbourne","Canberra","Perth"], 2],
            ["¿Cuál es el desierto cálido más grande del mundo?", ["Sahara","Gobi","Atacama","Kalahari"], 0],
            ["¿Qué país tiene forma de bota?", ["España","Italia","Grecia","Portugal"], 1],
            ["¿Cuál es la montaña más alta del mundo sobre el nivel del mar?", ["K2","Everest","Aconcagua","Mont Blanc"], 1],
            ["¿Qué país tiene la mayor población de Sudamérica?", ["Argentina","Colombia","Brasil","Perú"], 2],

            ["¿Cuál es el lago más grande de Sudamérica?", ["Titicaca","Maracaibo","Poopó","Nahuel Huapi"], 1],
            ["¿Cuál es la capital de Canadá?", ["Toronto","Vancouver","Ottawa","Montreal"], 2],
            ["¿En qué continente está Islandia?", ["Europa","Asia","América","Oceanía"], 0],
            ["¿Qué país tiene como capital a Bangkok?", ["Vietnam","Tailandia","Camboya","Laos"], 1],
            ["¿Cuál es el país con mayor territorio de África?", ["Egipto","Argelia","Nigeria","Sudáfrica"], 1]
        ]
    },

    {
        nombre: "Matemáticas",
        preguntas: [
            ["¿Cuánto es 5 + 7?", ["10","11","12","13"], 2],
            ["¿Cuánto es 9 × 3?", ["18","27","30","36"], 1],
            ["¿Cuál es la mitad de 100?", ["25","40","50","75"], 2],
            ["¿Cuánto es 81 ÷ 9?", ["7","8","9","10"], 2],
            ["¿Cuánto es 15 - 8?", ["5","6","7","8"], 2],

            ["¿Cuál es la raíz cuadrada de 144?", ["10","11","12","14"], 2],
            ["¿Cuánto es 25% de 200?", ["25","40","50","75"], 2],
            ["¿Cuál es el resultado de 7²?", ["14","21","49","56"], 2],
            ["¿Cuánto es 3 × 4 + 2?", ["14","18","20","24"], 0],
            ["¿Cuánto es 120 ÷ 4?", ["20","25","30","40"], 2],

            ["Si x + 8 = 20, ¿cuánto vale x?", ["10","12","14","16"], 1],
            ["¿Cuál es el área de un cuadrado de lado 6?", ["12","24","36","42"], 2],
            ["¿Cuánto es 2³ + 3²?", ["13","15","17","19"], 1],
            ["¿Cuál es el mínimo común múltiplo de 6 y 8?", ["12","18","24","48"], 2],
            ["¿Cuánto es el 15% de 300?", ["30","35","45","60"], 2]
        ]
    },

    {
        nombre: "Tecnología",
        preguntas: [
            ["¿Qué significa CPU?", ["Central Processing Unit","Computer Personal Unit","Central Program Utility","Control Processing User"], 0],
            ["¿Qué dispositivo se utiliza para escribir?", ["Monitor","Teclado","Parlante","Router"], 1],
            ["¿Cuál es un sistema operativo?", ["Windows","Google","HTML","Wi-Fi"], 0],
            ["¿Qué significa USB?", ["Universal Serial Bus","United System Board","Universal System Box","User Serial Base"], 0],
            ["¿Qué dispositivo muestra imágenes?", ["Monitor","Mouse","Teclado","Micrófono"], 0],

            ["¿Qué lenguaje se utiliza principalmente para estructurar páginas web?", ["HTML","Python","SQL","Java"], 0],
            ["¿Qué lenguaje se utiliza para dar estilos a una página web?", ["HTML","CSS","SQL","C++"], 1],
            ["¿Qué lenguaje permite agregar interactividad a una página web?", ["CSS","HTML","JavaScript","XML"], 2],
            ["¿Qué significa RAM?", ["Random Access Memory","Read Access Machine","Rapid Application Memory","Random Application Module"], 0],
            ["¿Qué dispositivo conecta diferentes redes?", ["Switch","Router","Monitor","Teclado"], 1],

            ["¿Qué protocolo se utiliza para navegar por páginas web de forma segura?", ["HTTP","HTTPS","FTP","SMTP"], 1],
            ["¿Qué es GitHub principalmente?", ["Una plataforma para gestionar código","Un navegador","Un antivirus","Un sistema operativo"], 0],
            ["¿Qué extensión suele tener un archivo JavaScript?", [".html",".css",".js",".java"], 2],
            ["¿Qué significa IA?", ["Internet Avanzado","Inteligencia Artificial","Información Automática","Interfaz Avanzada"], 1],
            ["¿Qué estructura se utiliza para almacenar pares clave-valor en muchos lenguajes?", ["Array","Objeto","Bucle","Función"], 1]
        ]
    },

    {
        nombre: "Arte y Entretenimiento",
        preguntas: [
            ["¿Quién pintó La noche estrellada?", ["Van Gogh","Picasso","Dalí","Monet"], 0],
            ["¿Qué instrumento tiene cuerdas?", ["Guitarra","Flauta","Trompeta","Tambor"], 0],
            ["¿Qué género cinematográfico busca provocar miedo?", ["Comedia","Terror","Romance","Documental"], 1],
            ["¿Quién escribió Romeo y Julieta?", ["Shakespeare","Cervantes","Dante","Homero"], 0],
            ["¿Qué color resulta de mezclar azul y amarillo?", ["Rojo","Verde","Morado","Naranja"], 1],

            ["¿Qué artista es conocido por la obra Guernica?", ["Picasso","Dalí","Van Gogh","Monet"], 0],
            ["¿Qué película tiene al personaje Jack Sparrow?", ["Harry Potter","Piratas del Caribe","Avatar","Titanic"], 1],
            ["¿Qué instrumento pertenece a la familia de percusión?", ["Violín","Piano","Tambor","Flauta"], 2],
            ["¿Cuál es el nombre del premio cinematográfico conocido como Oscar?", ["Premio Nobel","Academy Award","Grammy","Emmy"], 1],
            ["¿Qué estilo musical nació en Nueva Orleans?", ["Jazz","Reggae","Rock","Tango"], 0],

            ["¿Quién dirigió la película Titanic de 1997?", ["James Cameron","Steven Spielberg","Christopher Nolan","George Lucas"], 0],
            ["¿Qué saga tiene personajes llamados Frodo y Gandalf?", ["Harry Potter","El Señor de los Anillos","Star Wars","Matrix"], 1],
            ["¿Qué artista creó el personaje Mickey Mouse junto con su estudio?", ["Walt Disney","Stan Lee","Hayao Miyazaki","Tim Burton"], 0],
            ["¿Qué género literario incluye mundos imaginarios y magia?", ["Realismo","Fantasía","Biografía","Ensayo"], 1],
            ["¿Cuál de estos es un instrumento de viento?", ["Trompeta","Violín","Tambor","Arpa"], 0]
        ]
    }
];

let jugador = "";
let categoriaActual = 0;
let preguntaActual = 0;
let puntos = 0;
let monedas = 0;
let vidas = 3;
let segundos = 0;
let temporizador = null;
let respondida = false;

function usuariosGuardados() {
    return JSON.parse(localStorage.getItem("quizmasterUsuarios") || "{}");
}

function guardarUsuarios(usuarios) {
    localStorage.setItem("quizmasterUsuarios", JSON.stringify(usuarios));
}

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("btnMostrarRegistro").addEventListener("click", mostrarRegistro);

    document.getElementById("btnMostrarLogin").addEventListener("click", mostrarLogin);

    document.getElementById("btnRegistro").addEventListener("click", registrarse);

    document.getElementById("btnLogin").addEventListener("click", iniciarSesion);

    document.getElementById("btnCerrarSesion").addEventListener("click", cerrarSesion);

    document.getElementById("btnSiguiente").addEventListener("click", siguientePregunta);

    document.getElementById("passwordLogin").addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            iniciarSesion();
        }
    });

    document.getElementById("confirmarRegistro").addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            registrarse();
        }
    });

});

function mostrarRegistro() {
    document.getElementById("formLogin").classList.add("oculto");
    document.getElementById("formRegistro").classList.remove("oculto");

    document.getElementById("mensajeLogin").textContent = "";
}

function mostrarLogin() {
    document.getElementById("formRegistro").classList.add("oculto");
    document.getElementById("formLogin").classList.remove("oculto");

    document.getElementById("mensajeRegistro").textContent = "";
}

function registrarse() {

    const usuario = document.getElementById("usuarioRegistro").value.trim();
    const password = document.getElementById("passwordRegistro").value;
    const confirmar = document.getElementById("confirmarRegistro").value;
    const mensaje = document.getElementById("mensajeRegistro");

    if (usuario === "" || password === "" || confirmar === "") {
        mensaje.textContent = "Completa todos los campos.";
        mensaje.style.color = "#ffcc00";
        return;
    }

    if (usuario.length < 3) {
        mensaje.textContent = "El usuario debe tener mínimo 3 caracteres.";
        mensaje.style.color = "#ffcc00";
        return;
    }

    if (password.length < 4) {
        mensaje.textContent = "La contraseña debe tener mínimo 4 caracteres.";
        mensaje.style.color = "#ffcc00";
        return;
    }

    if (password !== confirmar) {
        mensaje.textContent = "Las contraseñas no coinciden.";
        mensaje.style.color = "#ff4d6d";
        return;
    }

    const usuarios = usuariosGuardados();

    if (usuarios[usuario]) {
        mensaje.textContent = "Ese usuario ya existe.";
        mensaje.style.color = "#ff4d6d";
        return;
    }

    usuarios[usuario] = {
        password: password,
        monedas: 0
    };

    guardarUsuarios(usuarios);

    mensaje.textContent = "¡Cuenta creada correctamente!";
    mensaje.style.color = "#20c997";

    document.getElementById("usuarioRegistro").value = "";
    document.getElementById("passwordRegistro").value = "";
    document.getElementById("confirmarRegistro").value = "";

    setTimeout(function() {
        mostrarLogin();
        document.getElementById("usuarioLogin").value = usuario;
    }, 1000);
}

function iniciarSesion() {

    const usuario = document.getElementById("usuarioLogin").value.trim();
    const password = document.getElementById("passwordLogin").value;
    const mensaje = document.getElementById("mensajeLogin");

    if (usuario === "" || password === "") {
        mensaje.textContent = "Completa usuario y contraseña.";
        mensaje.style.color = "#ffcc00";
        return;
    }

    const usuarios = usuariosGuardados();

    if (!usuarios[usuario]) {
        mensaje.textContent = "El usuario no está registrado.";
        mensaje.style.color = "#ff4d6d";
        return;
    }

    if (usuarios[usuario].password !== password) {
        mensaje.textContent = "Contraseña incorrecta.";
        mensaje.style.color = "#ff4d6d";
        return;
    }

    jugador = usuario;
    monedas = usuarios[usuario].monedas || 0;

    document.getElementById("login").classList.add("oculto");
    document.getElementById("juego").classList.remove("oculto");

    document.getElementById("nombreJugador").textContent = jugador;

    cargarCategorias();
    actualizarEstadisticas();
}

function cargarCategorias() {

    const lista = document.getElementById("listaCategorias");

    lista.innerHTML = "";

    categorias.forEach(function(categoria, index) {

        const boton = document.createElement("button");

        boton.className = "categoria";

        boton.textContent = (index + 1) + ". " + categoria.nombre;

        boton.addEventListener("click", function() {
            comenzarCategoria(index);
        });

        lista.appendChild(boton);
    });
}

function comenzarCategoria(index) {

    categoriaActual = index;
    preguntaActual = 0;
    puntos = 0;
    vidas = 3;
    segundos = 0;

    document.querySelectorAll(".categoria").forEach(function(boton, i) {
        boton.classList.toggle("activa", i === index);
    });

    document.getElementById("tituloCategoria").textContent =
        categorias[index].nombre;

    document.getElementById("resultado").classList.add("oculto");

    iniciarCronometro();

    mostrarPregunta();
}

function iniciarCronometro() {

    clearInterval(temporizador);

    segundos = 0;

    document.getElementById("tiempo").textContent = "00:00";

    temporizador = setInterval(function() {

        segundos++;

        const minutos = Math.floor(segundos / 60);

        const seg = segundos % 60;

        document.getElementById("tiempo").textContent =
            String(minutos).padStart(2, "0") +
            ":" +
            String(seg).padStart(2, "0");

    }, 1000);
}

function mostrarPregunta() {

    respondida = false;

    const pregunta =
        categorias[categoriaActual].preguntas[preguntaActual];

    document.getElementById("numeroPregunta").textContent =
        "Pregunta " + (preguntaActual + 1) + " de 15";

    document.getElementById("pregunta").textContent =
        pregunta[0];

    document.getElementById("mensaje").textContent = "";

    document.getElementById("btnSiguiente").classList.add("oculto");

    document.getElementById("btnSiguiente").textContent = "SIGUIENTE";

    const progreso =
        ((preguntaActual + 1) / 15) * 100;

    document.getElementById("barraProgreso").style.width =
        progreso + "%";

    const nivel =
        Math.floor(preguntaActual / 5) + 1;

    document.querySelectorAll(".niveles span").forEach(function(elemento, index) {

        elemento.classList.toggle(
            "activo",
            index + 1 === nivel
        );

    });

    const respuestas = pregunta[1]
        .map(function(texto, indice) {
            return {
                texto: texto,
                indice: indice
            };
        })
        .sort(function() {
            return Math.random() - 0.5;
        });

    const contenedor =
        document.getElementById("respuestas");

    contenedor.innerHTML = "";

    respuestas.forEach(function(respuesta) {

        const boton = document.createElement("button");

        boton.className = "respuesta";

        boton.textContent = respuesta.texto;

        boton.addEventListener("click", function() {
            responder(respuesta.indice, boton);
        });

        contenedor.appendChild(boton);
    });

    actualizarEstadisticas();
}

function responder(indiceSeleccionado, botonSeleccionado) {

    if (respondida) {
        return;
    }

    respondida = true;

    const pregunta =
        categorias[categoriaActual].preguntas[preguntaActual];

    const correcta = pregunta[2];

    document.querySelectorAll(".respuesta").forEach(function(boton) {
        boton.disabled = true;
    });

    if (indiceSeleccionado === correcta) {

        const nivel =
            Math.floor(preguntaActual / 5) + 1;

        const puntosPregunta =
            nivel * 10;

        puntos += puntosPregunta;

        monedas += nivel;

        botonSeleccionado.classList.add("correcta");

        document.getElementById("mensaje").textContent =
            "¡Correcto! +" +
            puntosPregunta +
            " puntos y +" +
            nivel +
            " moneda(s).";

        document.getElementById("mensaje").style.color =
            "#20c997";

    } else {

        vidas--;

        botonSeleccionado.classList.add("incorrecta");

        document.querySelectorAll(".respuesta").forEach(function(boton) {

            if (boton.textContent === pregunta[1][correcta]) {
                boton.classList.add("correcta");
            }

        });

        document.getElementById("mensaje").textContent =
            "Incorrecto. Te queda(n) " +
            vidas +
            " vida(s).";

        document.getElementById("mensaje").style.color =
            "#ff4d6d";
    }

    guardarProgreso();

    actualizarEstadisticas();

    const siguiente =
        document.getElementById("btnSiguiente");

    siguiente.classList.remove("oculto");

    if (vidas <= 0) {

        siguiente.textContent = "REINICIAR NIVEL";

        siguiente.onclick = reiniciarNivel;

    } else if (preguntaActual === 14) {

        siguiente.textContent = "VER RESULTADO";

        siguiente.onclick = terminarCategoria;

    } else {

        siguiente.textContent = "SIGUIENTE";

        siguiente.onclick = siguientePregunta;
    }
}

function siguientePregunta() {

    preguntaActual++;

    if (preguntaActual === 5 || preguntaActual === 10) {
        vidas = 3;
    }

    mostrarPregunta();
}

function reiniciarNivel() {

    const nivel =
        Math.floor(preguntaActual / 5);

    preguntaActual =
        nivel * 5;

    vidas = 3;

    mostrarPregunta();
}

function terminarCategoria() {

    clearInterval(temporizador);

    document.getElementById("respuestas").innerHTML = "";

    document.getElementById("btnSiguiente").classList.add("oculto");

    document.getElementById("barraProgreso").style.width = "100%";

    const resultado =
        document.getElementById("resultado");

    resultado.innerHTML = `
        <h2>🏆 ¡Categoría terminada!</h2>
        <p>Jugador: <strong>${jugador}</strong></p>
        <p>⭐ Puntos: <strong>${puntos}</strong></p>
        <p>🪙 Monedas: <strong>${monedas}</strong></p>
        <p>⏱️ Tiempo: <strong>${document.getElementById("tiempo").textContent}</strong></p>
        <button id="btnJugarOtra">JUGAR DE NUEVO</button>
    `;

    resultado.classList.remove("oculto");

    document.getElementById("btnJugarOtra").addEventListener("click", function() {
        comenzarCategoria(categoriaActual);
    });

    guardarProgreso();
}

function guardarProgreso() {

    const usuarios = usuariosGuardados();

    if (usuarios[jugador]) {

        usuarios[jugador].monedas =
            monedas;

        guardarUsuarios(usuarios);
    }
}

function actualizarEstadisticas() {

    document.getElementById("puntos").textContent =
        puntos;

    document.getElementById("monedas").textContent =
        monedas;

    document.getElementById("vidas").textContent =
        vidas;
}

function cerrarSesion() {

    clearInterval(temporizador);

    jugador = "";

    puntos = 0;

    monedas = 0;

    vidas = 3;

    preguntaActual = 0;

    document.getElementById("juego").classList.add("oculto");

    document.getElementById("login").classList.remove("oculto");

    mostrarLogin();

    document.getElementById("usuarioLogin").value = "";

    document.getElementById("passwordLogin").value = "";

    document.getElementById("mensajeLogin").textContent = "";
}

