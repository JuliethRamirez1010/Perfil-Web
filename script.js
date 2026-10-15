
/* =========================================================
   PORTAFOLIO - KAREN JULIETH RAMÍREZ OSPINA
   Traducción completa ES / EN
   Menú responsive y animación de habilidades
   ========================================================= */

const textosPortafolio = {
    ES: {
        nav: [
            "INICIO",
            "SOBRE MÍ",
            "HABILIDADES",
            "FORMACIÓN",
            "PROYECTOS",
            "CONTACTO"
        ],

        inicio: {
            titulo: "KAREN JULIETH RAMÍREZ OSPINA",
            subtitulo: "Estudiante de Ingeniería de Sistemas · Programación Web",
            imagen: "Foto de Karen Julieth Ramírez Ospina"
        },

        sobreMi: {
            titulo: "Sobre Mí",
            parrafos: [
                "Soy estudiante de Ingeniería de Sistemas y desde hace varios años me ha llamado la atención todo lo relacionado con la tecnología, la programación y los computadores. Me gusta aprender cosas nuevas y, sobre todo, aprender haciendo, porque siento que es la mejor manera de entender realmente cómo funcionan las cosas.",
                "Durante mi formación académica he tenido la oportunidad de trabajar en diferentes proyectos de programación, páginas web, bases de datos y aplicaciones. Estos proyectos me han permitido aprender de mis propios errores, mejorar mi lógica de programación y encontrar diferentes formas de solucionar un mismo problema.",
                "Actualmente continúo fortaleciendo mis conocimientos en desarrollo web, Java, JavaScript, HTML, CSS y bases de datos. Mi objetivo es seguir aprendiendo, adquirir experiencia y desarrollar proyectos cada vez más completos que me permitan crecer tanto personal como profesionalmente."
            ],
            informacion: "Información",
            datos: [
                ["Ubicación", "Espinal, Tolima, Colombia"],
                ["Correo", "kramirez23@itfip.edu.co"],
                ["Formación", "Ingeniería de Sistemas"],
                ["Estado", "Estudiante"]
            ],
            intereses: "Áreas que me interesan",
            listaIntereses: [
                "PROGRAMACIÓN",
                "DESARROLLO WEB",
                "MÚSICA",
                "LEER"
            ]
        },

        habilidades: {
            titulo: "Habilidades",
            tecnicas: "Habilidades técnicas",
            personales: "Habilidades personales",
            nombres: [
                "HTML & CSS",
                "JavaScript",
                "MySQL",
                "Java",
                "Responsabilidad",
                "Trabajo en equipo",
                "Aprendizaje",
                "Resolución de problemas"
            ]
        },

        curriculum: {
            titulo: "Formación y proyectos",
            academica: "Formación académica",
            proyectos: "Mis proyectos",
            formacion: [
                {
                    titulo: "Ingeniería de Sistemas",
                    institucion: "UNIESPINAL",
                    fecha: "Actualmente",
                    descripcion: "Actualmente me encuentro estudiando Ingeniería de Sistemas, fortaleciendo mis conocimientos en programación, desarrollo web, bases de datos, lógica, redes y diferentes áreas relacionadas con la tecnología."
                },
                {
                    titulo: "Técnico en Sistemas",
                    institucion: "Servicio Nacional de Aprendizaje · SENA",
                    fecha: "Formación técnica",
                    descripcion: "Formación técnica en sistemas, donde adquirí conocimientos relacionados con computadores, software, mantenimiento, herramientas tecnológicas y fundamentos de programación."
                },
                {
                    titulo: "Bachiller Técnico en Sistemas",
                    institucion: "Institución Educativa Técnica Félix Tiberio Guzmán",
                    fecha: "Bachillerato",
                    descripcion: "Realicé mis estudios de bachillerato en la Institución Educativa Técnica Félix Tiberio Guzmán, donde además de mi formación académica obtuve una formación técnica relacionada con sistemas."
                },
                {
                    titulo: "Programación y desarrollo web",
                    institucion: "Proyectos académicos",
                    fecha: "2026",
                    descripcion: "Durante mi formación he desarrollado diferentes proyectos utilizando HTML, CSS, JavaScript, Java y bases de datos, aprendiendo principalmente mediante la práctica."
                }
            ],
            proyectosLista: [
                {
                    titulo: "Sistema para restaurante",
                    tecnologia: "HTML · CSS · JavaScript",
                    fecha: "2026",
                    descripcion: "Proyecto web realizado para representar el funcionamiento de un restaurante. Permite navegar por diferentes opciones, visualizar productos y simular un proceso de pedido."
                },
                {
                    titulo: "FairyGlow · Tienda virtual",
                    tecnologia: "HTML · CSS · JavaScript",
                    fecha: "2026",
                    descripcion: "Proyecto enfocado en una tienda virtual, con una interfaz diseñada para mostrar productos de manera organizada y ofrecer una experiencia de navegación sencilla."
                },
                {
                    titulo: "QuizMaster",
                    tecnologia: "Aplicación educativa",
                    fecha: "2026",
                    descripcion: "Juego de preguntas creado como proyecto educativo, con diferentes categorías y dinámicas para combinar el aprendizaje con el entretenimiento."
                }
            ]
        },

        portafolio: {
            titulo: "Mis Proyectos",
            proyectos: [
                {
                    titulo: "Sistema para Restaurante",
                    descripcion: "Sistema web para pedidos y opciones del restaurante"
                },
                {
                    titulo: "FairyGlow · Tienda Virtual",
                    descripcion: "Catálogo de productos y experiencia de compra"
                },
                {
                    titulo: "QuizMaster",
                    descripcion: "Juego educativo de preguntas y respuestas"
                }
            ]
        },

        contacto: {
            titulo: "Contacto",
            introduccion: "Si quieres conocer más sobre mis proyectos, tienes alguna pregunta o simplemente quieres comunicarte conmigo, puedes hacerlo directamente a través de cualquiera de estos medios.",
            tarjetas: [
                ["Correo", "kramirez23@itfip.edu.co"],
                ["GitHub", "JulIethRamirez1010"],
                ["LinkedIn", "Perfil profesional"]
            ]
        },

        footer: "Karen Julieth Ramírez Ospina · Ingeniería de Sistemas · UNIESPINAL"
    },

    EN: {
        nav: [
            "HOME",
            "ABOUT ME",
            "SKILLS",
            "EDUCATION",
            "PROJECTS",
            "CONTACT"
        ],

        inicio: {
            titulo: "KAREN JULIETH RAMÍREZ OSPINA",
            subtitulo: "Systems Engineering Student · Web Development",
            imagen: "Photo of Karen Julieth Ramírez Ospina"
        },

        sobreMi: {
            titulo: "About Me",
            parrafos: [
                "I am a Systems Engineering student, and for several years I have been interested in everything related to technology, programming, and computers. I enjoy learning new things and, above all, learning by doing because I believe it is the best way to truly understand how things work.",
                "During my academic training, I have had the opportunity to work on different programming projects, websites, databases, and applications. These projects have allowed me to learn from my mistakes, improve my programming logic, and discover different ways to solve the same problem.",
                "I am currently continuing to strengthen my knowledge of web development, Java, JavaScript, HTML, CSS, and databases. My goal is to keep learning, gain experience, and develop increasingly complete projects that help me grow both personally and professionally."
            ],
            informacion: "Information",
            datos: [
                ["Location", "Espinal, Tolima, Colombia"],
                ["Email", "kramirez23@itfip.edu.co"],
                ["Education", "Systems Engineering"],
                ["Status", "Student"]
            ],
            intereses: "Areas of Interest",
            listaIntereses: [
                "PROGRAMMING",
                "WEB DEVELOPMENT",
                "MUSIC",
                "READING"
            ]
        },

        habilidades: {
            titulo: "Skills",
            tecnicas: "Technical Skills",
            personales: "Personal Skills",
            nombres: [
                "HTML & CSS",
                "JavaScript",
                "MySQL",
                "Java",
                "Responsibility",
                "Teamwork",
                "Learning",
                "Problem Solving"
            ]
        },

        curriculum: {
            titulo: "Education and Projects",
            academica: "Academic Background",
            proyectos: "My Projects",
            formacion: [
                {
                    titulo: "Systems Engineering",
                    institucion: "UNIESPINAL",
                    fecha: "Currently",
                    descripcion: "I am currently studying Systems Engineering, strengthening my knowledge of programming, web development, databases, logic, networks, and other areas related to technology."
                },
                {
                    titulo: "Systems Technician",
                    institucion: "National Learning Service · SENA",
                    fecha: "Technical Training",
                    descripcion: "Technical training in computer systems, where I acquired knowledge related to computers, software, maintenance, technological tools, and programming fundamentals."
                },
                {
                    titulo: "Technical High School Diploma in Systems",
                    institucion: "Félix Tiberio Guzmán Technical Educational Institution",
                    fecha: "High School",
                    descripcion: "I completed my high school studies at Félix Tiberio Guzmán Technical Educational Institution, where I received both academic education and technical training related to computer systems."
                },
                {
                    titulo: "Programming and Web Development",
                    institucion: "Academic Projects",
                    fecha: "2026",
                    descripcion: "During my training, I have developed different projects using HTML, CSS, JavaScript, Java, and databases, learning mainly through hands-on practice."
                }
            ],
            proyectosLista: [
                {
                    titulo: "Restaurant System",
                    tecnologia: "HTML · CSS · JavaScript",
                    fecha: "2026",
                    descripcion: "A web project designed to represent how a restaurant works. It allows users to navigate different options, view products, and simulate an ordering process."
                },
                {
                    titulo: "FairyGlow · Online Store",
                    tecnologia: "HTML · CSS · JavaScript",
                    fecha: "2026",
                    descripcion: "An online store project featuring an interface designed to display products in an organized way and provide a simple browsing experience."
                },
                {
                    titulo: "QuizMaster",
                    tecnologia: "Educational Application",
                    fecha: "2026",
                    descripcion: "A quiz game developed as an educational project, featuring different categories and activities that combine learning with entertainment."
                }
            ]
        },

        portafolio: {
            titulo: "My Projects",
            proyectos: [
                {
                    titulo: "Restaurant System",
                    descripcion: "Restaurant website for orders and menu options"
                },
                {
                    titulo: "FairyGlow · Online Store",
                    descripcion: "Product catalog and shopping experience"
                },
                {
                    titulo: "QuizMaster",
                    descripcion: "Educational question-and-answer game"
                }
            ]
        },

        contacto: {
            titulo: "Contact",
            introduccion: "If you would like to learn more about my projects, have a question, or simply want to get in touch, you can contact me directly through any of these channels.",
            tarjetas: [
                ["Email", "kramirez23@itfip.edu.co"],
                ["GitHub", "JulIethRamirez1010"],
                ["LinkedIn", "Professional profile"]
            ]
        },

        footer: "Karen Julieth Ramírez Ospina · Systems Engineering · UNIESPINAL"
    }
};

/* =========================================================
   IDIOMA ACTUAL
   ========================================================= */

let idiomaActual = "ES";

try {
    const guardado = localStorage.getItem("idiomaPortafolio");

    if (guardado === "ES" || guardado === "EN") {
        idiomaActual = guardado;
    }
} catch (error) {
    idiomaActual = "ES";
}

/* =========================================================
   FUNCIONES AUXILIARES
   ========================================================= */

function establecerTexto(elemento, texto) {
    if (elemento && texto !== undefined && texto !== null) {
        elemento.textContent = texto;
    }
}

function establecerLista(selectores, textos) {
    const elementos = document.querySelectorAll(selectores);

    elementos.forEach((elemento, indice) => {
        if (textos[indice] !== undefined) {
            establecerTexto(elemento, textos[indice]);
        }
    });
}

/* =========================================================
   CAMBIAR IDIOMA
   ========================================================= */

function cambiarIdioma() {
    idiomaActual = idiomaActual === "ES" ? "EN" : "ES";

    try {
        localStorage.setItem("idiomaPortafolio", idiomaActual);
    } catch (error) {
        console.warn("No se pudo guardar la preferencia de idioma.");
    }

    aplicarIdioma();
}

/* =========================================================
   TRADUCIR TODA LA PÁGINA
   ========================================================= */

function aplicarIdioma() {
    const t = textosPortafolio[idiomaActual];

    if (!t) return;

    /* NAVEGACIÓN */
    establecerLista("#nav ul li a", t.nav);

    /* BOTÓN ES / EN: conserva sus tres spans */
    const botonIdioma = document.getElementById("btn-idioma");

    if (botonIdioma) {
        const activo = botonIdioma.querySelector(".idioma-activo");
        const inactivo = botonIdioma.querySelector(".idioma-inactivo");

        establecerTexto(activo, idiomaActual);
        establecerTexto(inactivo, idiomaActual === "ES" ? "EN" : "ES");

        botonIdioma.setAttribute(
            "aria-label",
            idiomaActual === "ES"
                ? "Cambiar idioma a inglés"
                : "Change language to Spanish"
        );
    }

    /* INICIO */
    establecerTexto(
        document.querySelector("#inicio .contenido-banner h1"),
        t.inicio.titulo
    );

    establecerTexto(
        document.querySelector("#inicio .contenido-banner h2"),
        t.inicio.subtitulo
    );

    const imagenPerfil = document.querySelector(
        "#inicio .contenedor-img img"
    );

    if (imagenPerfil) {
        imagenPerfil.alt = t.inicio.imagen;
    }

    /* SOBRE MÍ */
    const seccionSobreMi = document.querySelector("#sobremi");
    const tituloSobreMi = seccionSobreMi?.querySelector(
        ".contenido-seccion > h2"
    );

    establecerTexto(tituloSobreMi, t.sobreMi.titulo);

    establecerLista(
        "#sobremi .contenido-seccion > p",
        t.sobreMi.parrafos
    );

    establecerTexto(
        document.querySelector("#sobremi .fila .col h3"),
        t.sobreMi.informacion
    );

    establecerLista(
        "#sobremi .datos li strong",
        t.sobreMi.datos.map(dato => dato[0])
    );

    establecerLista(
        "#sobremi .datos li > span",
        t.sobreMi.datos.map(dato => dato[1])
    );

    const tituloIntereses = Array.from(
        document.querySelectorAll("#sobremi h3")
    ).find(elemento =>
        elemento.textContent.trim() === "Áreas que me interesan" ||
        elemento.textContent.trim() === "Areas of Interest" ||
        elemento.textContent.trim() === "Áreas de interés"
    );

    establecerTexto(tituloIntereses, t.sobreMi.intereses);

    establecerLista(
        "#sobremi .contenedor-intereses .interes span",
        t.sobreMi.listaIntereses
    );

    /* HABILIDADES */
    const seccionSkills = document.querySelector("#skills");

    establecerTexto(
        seccionSkills?.querySelector(".contenido-seccion > h2"),
        t.habilidades.titulo
    );

    establecerLista(
        "#skills .fila > .col h3",
        [t.habilidades.tecnicas, t.habilidades.personales]
    );

    establecerLista(
        "#skills .skill-nombre",
        t.habilidades.nombres
    );

    /* FORMACIÓN Y PROYECTOS DE LA LÍNEA DE TIEMPO */
    const seccionCurriculum = document.querySelector("#curriculum");

    establecerTexto(
        seccionCurriculum?.querySelector(".contenido-seccion > h2"),
        t.curriculum.titulo
    );

    establecerLista(
        "#curriculum .fila > .col > h3",
        [t.curriculum.academica, t.curriculum.proyectos]
    );

    const itemsFormacion = document.querySelectorAll(
        "#curriculum .col.izquierda .item"
    );

    itemsFormacion.forEach((item, indice) => {
        const datos = t.curriculum.formacion[indice];

        if (!datos) return;

        establecerTexto(item.querySelector("h4"), datos.titulo);
        establecerTexto(item.querySelector(".casa"), datos.institucion);
        establecerTexto(item.querySelector(".fecha"), datos.fecha);
        establecerTexto(item.querySelector("p"), datos.descripcion);
    });

    const itemsProyectos = document.querySelectorAll(
        "#curriculum .col.derecha .item"
    );

    itemsProyectos.forEach((item, indice) => {
        const datos = t.curriculum.proyectosLista[indice];

        if (!datos) return;

        establecerTexto(item.querySelector("h4"), datos.titulo);
        establecerTexto(item.querySelector(".casa"), datos.tecnologia);
        establecerTexto(item.querySelector(".fecha"), datos.fecha);
        establecerTexto(item.querySelector("p"), datos.descripcion);
    });

    /* PORTAFOLIO */
    const seccionPortfolio = document.querySelector("#portfolio");

    establecerTexto(
        seccionPortfolio?.querySelector(".contenido-seccion > h2"),
        t.portafolio.titulo
    );

    const tarjetasPortfolio = document.querySelectorAll(
        "#portfolio .galeria .proyecto"
    );

    tarjetasPortfolio.forEach((tarjeta, indice) => {
        const datos = t.portafolio.proyectos[indice];

        if (!datos) return;

        establecerTexto(tarjeta.querySelector(".overlay h3"), datos.titulo);
        establecerTexto(tarjeta.querySelector(".overlay p"), datos.descripcion);
    });

    /* CONTACTO */
    const seccionContacto = document.querySelector("#contacto");

    establecerTexto(
        seccionContacto?.querySelector(".contenido-seccion > h2"),
        t.contacto.titulo
    );

    establecerTexto(
        seccionContacto?.querySelector(".contacto-intro"),
        t.contacto.introduccion
    );

    const tarjetasContacto = document.querySelectorAll(
        "#contacto .tarjetas-contacto .tarjeta"
    );

    tarjetasContacto.forEach((tarjeta, indice) => {
        const datos = t.contacto.tarjetas[indice];

        if (!datos) return;

        establecerTexto(tarjeta.querySelector("strong"), datos[0]);
        establecerTexto(tarjeta.querySelector("span"), datos[1]);
    });

    /* PIE DE PÁGINA */
    establecerTexto(
        document.querySelector("footer .footer-nota"),
        t.footer
    );

    /* IDIOMA DEL DOCUMENTO */
    document.documentElement.lang = idiomaActual.toLowerCase();
}

/* =========================================================
   MENÚ RESPONSIVE
   ========================================================= */

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");

    if (!nav) return;

    nav.classList.toggle("responsive");

    const botonMenu = document.querySelector(".nav-responsive");

    if (botonMenu) {
        botonMenu.setAttribute(
            "aria-expanded",
            String(nav.classList.contains("responsive"))
        );
    }
}

function cerrarMenu() {
    const nav = document.getElementById("nav");

    if (nav) {
        nav.classList.remove("responsive");
    }

    const botonMenu = document.querySelector(".nav-responsive");

    if (botonMenu) {
        botonMenu.setAttribute("aria-expanded", "false");
    }
}

/* =========================================================
   ANIMACIÓN DE HABILIDADES
   ========================================================= */

function animarHabilidades() {
    const seccion = document.querySelector("#skills");

    if (!seccion) return;

    const barras = seccion.querySelectorAll(".progreso[data-percent]");

    if ("IntersectionObserver" in window) {
        const observador = new IntersectionObserver((entradas, observer) => {
            entradas.forEach(entrada => {
                if (!entrada.isIntersecting) return;

                const barra = entrada.target;
                const porcentaje = Number(barra.dataset.percent);

                if (Number.isFinite(porcentaje)) {
                    barra.style.width =
                        Math.max(0, Math.min(100, porcentaje)) + "%";
                }

                observer.unobserve(barra);
            });
        }, { threshold: 0.2 });

        barras.forEach(barra => {
            barra.style.width = "0%";
            barra.style.transition = "width 1.5s ease-in-out";
            observador.observe(barra);
        });
    } else {
        barras.forEach(barra => {
            barra.style.width = barra.dataset.percent + "%";
        });
    }
}

/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

function inicializarPortafolio() {
    aplicarIdioma();
    animarHabilidades();
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        inicializarPortafolio,
        { once: true }
    );
} else {
    inicializarPortafolio();
}

/* Funciones utilizadas por los onclick del HTML */
window.cambiarIdioma = cambiarIdioma;
window.mostrarOcultarMenu = mostrarOcultarMenu;
window.cerrarMenu = cerrarMenu;
window.aplicarIdioma = aplicarIdioma;
