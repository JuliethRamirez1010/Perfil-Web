
/* =========================================================
   PORTAFOLIO - KAREN JULIETH RAMÍREZ OSPINA
   Idiomas, menú responsive y animación de habilidades
   ========================================================= */

const traducciones = {
    ES: {
        "nav.inicio": "INICIO",
        "nav.sobremi": "SOBRE MÍ",
        "nav.skills": "HABILIDADES",
        "nav.curriculum": "CURRÍCULUM",
        "nav.portfolio": "PORTAFOLIO",
        "nav.contacto": "CONTACTO",

        "inicio.saludo": "Hola, soy",
        "inicio.rol": "Estudiante de Ingeniería de Sistemas",
        "inicio.descripcion": "Apasionada por la programación, el desarrollo web y la tecnología.",

        "about.titulo": "Sobre mí",
        "about.descripcion": "Soy estudiante de Ingeniería de Sistemas, interesada en la programación, el desarrollo web y el aprendizaje de nuevas tecnologías. Me gusta crear soluciones digitales y fortalecer mis conocimientos mediante proyectos prácticos.",
        "about.nombre": "Nombre",
        "about.nacimiento": "Fecha de nacimiento",
        "about.telefono": "Teléfono",
        "about.email": "Correo electrónico",
        "about.web": "Sitio web",
        "about.direccion": "Ubicación",
        "about.cargo": "Ocupación",
        "about.interestsTitle": "Áreas de interés",

        "interest.1": "PROGRAMACIÓN",
        "interest.2": "DESARROLLO WEB",
        "interest.3": "MÚSICA",
        "interest.4": "LECTURA",

        "skills.titulo": "Habilidades",
        "skills.descripcion": "Conocimientos y herramientas que utilizo para desarrollar proyectos.",
        "skills.tecnicas": "Habilidades técnicas",
        "skills.comunicacion": "Comunicación",
        "skills.trabajo": "Trabajo en equipo",
        "skills.creatividad": "Creatividad",
        "skills.dedicacion": "Dedicación",
        "skills.proyectos": "Gestión de proyectos",

        "curriculum.titulo": "Currículum",
        "curriculum.descripcion": "Mi formación académica y mi proceso de aprendizaje.",
        "curriculum.educacion": "Educación",
        "curriculum.experiencia": "Experiencia",
        "curriculum.formacion1": "Ingeniería de Sistemas",
        "curriculum.formacion2": "Técnica en Sistemas",
        "curriculum.formacion3": "Formación en programación",
        "curriculum.descripcion1": "Formación académica orientada al desarrollo de software, las bases de datos y las tecnologías de la información.",
        "curriculum.descripcion2": "Conocimientos en mantenimiento de equipos, soporte técnico y sistemas informáticos.",
        "curriculum.descripcion3": "Aprendizaje de lenguajes de programación y desarrollo de aplicaciones web.",

        "portfolio.titulo": "Portafolio",
        "portfolio.descripcion": "Algunos de los proyectos que he desarrollado.",
        "portfolio.restaurante": "Sistema para Restaurante",
        "portfolio.restauranteDesc": "Sistema para gestionar pedidos y facilitar los procesos de un restaurante.",
        "portfolio.tienda": "Tienda Virtual",
        "portfolio.tiendaDesc": "Sitio web para mostrar productos, consultar diseños y gestionar compras.",
        "portfolio.quiz": "QuizMaster",
        "portfolio.quizDesc": "Juego de preguntas con categorías, niveles, vidas y monedas.",

        "contacto.titulo": "Contacto",
        "contacto.descripcion": "¿Tienes una pregunta o una propuesta? Puedes comunicarte conmigo.",
        "contacto.nombre": "Nombre",
        "contacto.email": "Correo electrónico",
        "contacto.asunto": "Asunto",
        "contacto.mensaje": "Mensaje",
        "contacto.boton": "Enviar mensaje",

        "footer.texto": "Gracias por visitar mi portafolio."
    },

    EN: {
        "nav.inicio": "HOME",
        "nav.sobremi": "ABOUT ME",
        "nav.skills": "SKILLS",
        "nav.curriculum": "RESUME",
        "nav.portfolio": "PORTFOLIO",
        "nav.contacto": "CONTACT",

        "inicio.saludo": "Hello, I'm",
        "inicio.rol": "Systems Engineering Student",
        "inicio.descripcion": "Passionate about programming, web development, and technology.",

        "about.titulo": "About Me",
        "about.descripcion": "I am a Systems Engineering student interested in programming, web development, and learning new technologies. I enjoy creating digital solutions and strengthening my knowledge through practical projects.",
        "about.nombre": "Name",
        "about.nacimiento": "Date of birth",
        "about.telefono": "Phone",
        "about.email": "Email",
        "about.web": "Website",
        "about.direccion": "Location",
        "about.cargo": "Occupation",
        "about.interestsTitle": "Areas of Interest",

        "interest.1": "PROGRAMMING",
        "interest.2": "WEB DEVELOPMENT",
        "interest.3": "MUSIC",
        "interest.4": "READING",

        "skills.titulo": "Skills",
        "skills.descripcion": "Knowledge and tools I use to develop projects.",
        "skills.tecnicas": "Technical Skills",
        "skills.comunicacion": "Communication",
        "skills.trabajo": "Teamwork",
        "skills.creatividad": "Creativity",
        "skills.dedicacion": "Dedication",
        "skills.proyectos": "Project Management",

        "curriculum.titulo": "Resume",
        "curriculum.descripcion": "My academic background and learning journey.",
        "curriculum.educacion": "Education",
        "curriculum.experiencia": "Experience",
        "curriculum.formacion1": "Systems Engineering",
        "curriculum.formacion2": "Technical Training in Systems",
        "curriculum.formacion3": "Programming Training",
        "curriculum.descripcion1": "Academic training focused on software development, databases, and information technology.",
        "curriculum.descripcion2": "Knowledge of computer maintenance, technical support, and computer systems.",
        "curriculum.descripcion3": "Learning programming languages and web application development.",

        "portfolio.titulo": "Portfolio",
        "portfolio.descripcion": "Some of the projects I have developed.",
        "portfolio.restaurante": "Restaurant System",
        "portfolio.restauranteDesc": "A system designed to manage orders and improve restaurant processes.",
        "portfolio.tienda": "Online Store",
        "portfolio.tiendaDesc": "A website to display products, explore designs, and manage purchases.",
        "portfolio.quiz": "QuizMaster",
        "portfolio.quizDesc": "A quiz game featuring categories, levels, lives, and coins.",

        "contacto.titulo": "Contact",
        "contacto.descripcion": "Have a question or a proposal? Feel free to contact me.",
        "contacto.nombre": "Name",
        "contacto.email": "Email",
        "contacto.asunto": "Subject",
        "contacto.mensaje": "Message",
        "contacto.boton": "Send Message",

        "footer.texto": "Thank you for visiting my portfolio."
    }
};

/* =========================================================
   IDIOMA ACTUAL
   ========================================================= */

let idiomaActual = "ES";

try {
    const idiomaGuardado = localStorage.getItem("idiomaPortafolio");

    if (idiomaGuardado === "ES" || idiomaGuardado === "EN") {
        idiomaActual = idiomaGuardado;
    }
} catch (error) {
    console.warn("No fue posible recuperar el idioma guardado.");
}

/* =========================================================
   OBTENER TRADUCCIÓN
   ========================================================= */

function obtenerTraduccion(clave, idioma = idiomaActual) {
    return traducciones[idioma]?.[clave] ?? null;
}

/* =========================================================
   CAMBIAR IDIOMA
   ========================================================= */

function cambiarIdioma() {
    idiomaActual = idiomaActual === "ES" ? "EN" : "ES";

    try {
        localStorage.setItem("idiomaPortafolio", idiomaActual);
    } catch (error) {
        console.warn("No fue posible guardar el idioma.");
    }

    aplicarIdioma();
}

/* =========================================================
   APLICAR TRADUCCIONES
   ========================================================= */

function aplicarIdioma() {
    const idioma = traducciones[idiomaActual];

    if (!idioma) return;

    // Traduce los elementos que tienen data-i18n.
    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        const clave = elemento.getAttribute("data-i18n");
        const texto = obtenerTraduccion(clave);

        if (texto !== null) {
            elemento.textContent = texto;
        }
    });

    // Traduce los placeholders.
    document.querySelectorAll("[data-i18n-placeholder]").forEach(elemento => {
        const clave = elemento.getAttribute("data-i18n-placeholder");
        const texto = obtenerTraduccion(clave);

        if (texto !== null) {
            elemento.setAttribute("placeholder", texto);
        }
    });

    // Traduce los atributos title.
    document.querySelectorAll("[data-i18n-title]").forEach(elemento => {
        const clave = elemento.getAttribute("data-i18n-title");
        const texto = obtenerTraduccion(clave);

        if (texto !== null) {
            elemento.setAttribute("title", texto);
        }
    });

    // Traduce el botón sin eliminar sus spans ni su diseño ES / EN.
    const botonIdioma = document.getElementById("btn-idioma");

    if (botonIdioma) {
        const activo = botonIdioma.querySelector(".idioma-activo");
        const inactivo = botonIdioma.querySelector(".idioma-inactivo");

        if (activo && inactivo) {
            activo.textContent = idiomaActual;
            inactivo.textContent = idiomaActual === "ES" ? "EN" : "ES";
        }

        botonIdioma.setAttribute(
            "aria-label",
            idiomaActual === "ES"
                ? "Cambiar idioma a inglés"
                : "Change language to Spanish"
        );
    }

    // Traduce áreas de interés si el HTML usa las claves interest.1, etc.
    document.querySelectorAll('[data-i18n^="interest."]').forEach(elemento => {
        const clave = elemento.getAttribute("data-i18n");
        const texto = obtenerTraduccion(clave);

        if (texto !== null) {
            elemento.textContent = texto;
        }
    });

    // Compatibilidad con tarjetas de intereses sin data-i18n.
    const intereses = document.querySelectorAll(
        ".contenedor-intereses .interes"
    );

    const clavesIntereses = [
        "interest.1",
        "interest.2",
        "interest.3",
        "interest.4"
    ];

    intereses.forEach((interes, indice) => {
        if (indice >= clavesIntereses.length) return;

        // Si existe un span para el texto, conserva los iconos.
        const spanTexto = interes.querySelector("span");

        if (spanTexto && !spanTexto.hasAttribute("data-i18n")) {
            spanTexto.textContent = obtenerTraduccion(
                clavesIntereses[indice]
            );
        } else if (!spanTexto && !interes.querySelector("i, svg")) {
            interes.textContent = obtenerTraduccion(
                clavesIntereses[indice]
            );
        }
    });

    // Actualiza el idioma del documento.
    document.documentElement.lang = idiomaActual.toLowerCase();
}

/* =========================================================
   MENÚ RESPONSIVE
   ========================================================= */

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");

    if (!nav) {
        console.warn('No se encontró el elemento con id="nav".');
        return;
    }

    nav.classList.toggle("responsive");

    const botonMenu = document.querySelector(".nav-responsive");

    if (botonMenu) {
        const abierto = nav.classList.contains("responsive");

        botonMenu.setAttribute("aria-expanded", String(abierto));
        botonMenu.setAttribute(
            "aria-label",
            abierto ? "Cerrar menú" : "Abrir menú"
        );
    }
}

/* =========================================================
   CERRAR MENÚ AL ELEGIR UNA OPCIÓN
   ========================================================= */

function configurarMenu() {
    const nav = document.getElementById("nav");

    if (!nav) return;

    nav.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            nav.classList.remove("responsive");

            const botonMenu = document.querySelector(".nav-responsive");

            if (botonMenu) {
                botonMenu.setAttribute("aria-expanded", "false");
            }
        });
    });
}

/* =========================================================
   ANIMACIÓN DE HABILIDADES
   ========================================================= */

function animarHabilidades() {
    const seccion = document.querySelector("#skills");

    if (!seccion || !("IntersectionObserver" in window)) return;

    const barras = seccion.querySelectorAll(".progreso[data-percent]");

    const observador = new IntersectionObserver((entradas, observer) => {
        entradas.forEach(entrada => {
            if (!entrada.isIntersecting) return;

            const barra = entrada.target;
            const porcentaje = Number(barra.getAttribute("data-percent"));

            if (Number.isFinite(porcentaje)) {
                const valor = Math.max(0, Math.min(100, porcentaje));
                barra.style.width = valor + "%";
            }

            observer.unobserve(barra);
        });
    }, {
        threshold: 0.2
    });

    barras.forEach(barra => {
        barra.style.width = "0%";
        barra.style.transition = "width 1.5s ease-in-out";
        observador.observe(barra);
    });
}

/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

function inicializarPortafolio() {
    // El HTML ya usa onclick="cambiarIdioma()".
    // Por eso NO agregamos otro evento click al botón de idioma.
    const botonIdioma = document.getElementById("btn-idioma");

    if (!botonIdioma) {
        console.warn('No se encontró el botón con id="btn-idioma".');
    }

    // El HTML también usa onclick="mostrarOcultarMenu()".
    // No se registra otro evento para evitar dobles ejecuciones.
    configurarMenu();
    aplicarIdioma();
    animarHabilidades();
}

/* =========================================================
   FUNCIONES DISPONIBLES DESDE EL HTML
   ========================================================= */

window.cambiarIdioma = cambiarIdioma;
window.mostrarOcultarMenu = mostrarOcultarMenu;
window.aplicarIdioma = aplicarIdioma;

/* =========================================================
   EJECUTAR CUANDO EL HTML ESTÉ LISTO
   ========================================================= */

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        inicializarPortafolio,
        { once: true }
    );
} else {
    inicializarPortafolio();
}
