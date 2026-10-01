const ES = {

  "nav.home": "INICIO",
  "nav.about": "SOBRE MÍ",
  "nav.skills": "HABILIDADES",
  "nav.resume": "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact": "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title": "Sobre Mí",

  "about.text": "Estudio Sistemas porque me interesa la tecnología. Quiero adquirir conocimientos que me permitan desarrollar mis habilidades, crear soluciones innovadoras y prepararme para mi futuro profesional.",

  "about.infoTitle": "Información",

  "about.labelLocation": "Ubicación",

  "about.valueLocation": "Espinal, Tolima, Colombia",

  "about.labelEmail": "Correo",

  "about.labelLanguages": "Idiomas",

  "about.valueLanguages": "Español (nativo) · Inglés",

  "about.labelStatus": "Disponibilidad",

  "about.valueStatus": "Abierta a prácticas",

  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title": "Habilidades",

  "skills.technical": "Habilidades técnicas",

  "skills.professional": "Habilidades profesionales",

  "skill.support": "Soporte al usuario",

  "skill.teamwork": "Trabajo en equipo",

  "skill.problem": "Resolución de problemas",

  "skill.english": "Inglés técnico",

  "resume.title": "Formación y experiencia",

  "resume.education": "Formación",

  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",

  "edu.1.text": "Actualmente desarrollo conocimientos en programación web, herramientas digitales y soluciones tecnológicas para mi formación profesional.",

  "edu.2.title": "Formación académica",

  "edu.2.text": "He desarrollado diferentes actividades y proyectos académicos relacionados con programación, bases de datos, redes y desarrollo de aplicaciones.",

  "exp.1.title": "Proyecto académico de programación",

  "exp.1.text": "Desarrollé aplicaciones académicas utilizando herramientas de programación y trabajé en la solución de problemas mediante proyectos prácticos.",

  "exp.2.title": "Proyecto académico de redes",

  "exp.2.text": "Configuré y probé una red en Cisco Packet Tracer utilizando direccionamiento IP, switches, routers y pruebas de conectividad.",

  "portfolio.title": "Proyectos",

  "project.1.title": "Sistema de Restaurante",

  "project.1.text": "Java · Swing",

  "project.2.title": "Tienda Virtual",

  "project.2.text": "Java · Swing",

  "project.3.title": "Red LAN",

  "project.3.text": "Cisco Packet Tracer · IPv4 · Routing",

  "contact.title": "Contacto",

  "contact.intro": "¿Tienes un proyecto o una oportunidad académica? Puedes escribirme a mi correo profesional.",

  "contact.emailLabel": "Correo",

  "contact.linkedinValue": "Perfil profesional",

  "footer.note": "Karen Julieth Ramírez Ospina · Técnico Profesional en Programación Web · UniEspinal"

};


const EN = {

  "nav.home": "HOME",
  "nav.about": "ABOUT",
  "nav.skills": "SKILLS",
  "nav.resume": "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact": "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title": "About Me",

  "about.text": "I study Systems because I am interested in technology. I want to gain knowledge that will allow me to develop my skills, create innovative solutions, and prepare for my professional future.",

  "about.infoTitle": "Information",

  "about.labelLocation": "Location",

  "about.valueLocation": "Espinal, Tolima, Colombia",

  "about.labelEmail": "Email",

  "about.labelLanguages": "Languages",

  "about.valueLanguages": "Spanish (native) · English",

  "about.labelStatus": "Availability",

  "about.valueStatus": "Open to internships",

  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title": "Skills",

  "skills.technical": "Technical Skills",

  "skills.professional": "Professional Skills",

  "skill.support": "User Support",

  "skill.teamwork": "Teamwork",

  "skill.problem": "Problem Solving",

  "skill.english": "Technical English",

  "resume.title": "Education and Experience",

  "resume.education": "Education",

  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",

  "edu.1.text": "I am currently developing skills in web programming, digital tools, and technological solutions as part of my professional education.",

  "edu.2.title": "Academic Training",

  "edu.2.text": "I have completed different academic activities and projects related to programming, databases, networks, and application development.",

  "exp.1.title": "Academic Programming Project",

  "exp.1.text": "I developed academic applications using programming tools and worked on problem solving through practical projects.",

  "exp.2.title": "Academic Networking Project",

  "exp.2.text": "I configured and tested a network in Cisco Packet Tracer using IP addressing, switches, routers, and connectivity tests.",

  "portfolio.title": "Projects",

  "project.1.title": "Restaurant System",

  "project.1.text": "Java · Swing",

  "project.2.title": "Virtual Store",

  "project.2.text": "Java · Swing",

  "project.3.title": "LAN Network",

  "project.3.text": "Cisco Packet Tracer · IPv4 · Routing",

  "contact.title": "Contact",

  "contact.intro": "Do you have a project or an academic opportunity? You can contact me through my professional email.",

  "contact.emailLabel": "Email",

  "contact.linkedinValue": "Professional profile",

  "footer.note": "Karen Julieth Ramírez Ospina · Professional Technician in Web Programming · UniEspinal"

};


const DICCIONARIOS = {
  es: ES,
  en: EN
};


let idiomaActual = "es";


function aplicarIdioma(idioma) {

  const textos = DICCIONARIOS[idioma];

  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {

    const clave = elemento.getAttribute("data-i18n");

    if (textos[clave] !== undefined) {

      elemento.textContent = textos[clave];

    } else {

      console.warn("Missing translation key:", clave);

    }

  });


  document.documentElement.lang = idioma;


  const boton = document.getElementById("btn-idioma");


  if (boton) {

    const otro = idioma === "es" ? "en" : "es";

    boton.innerHTML =
      '<span class="idioma-activo">' +
      idioma.toUpperCase() +
      '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' +
      otro.toUpperCase() +
      '</span>';


    boton.setAttribute(
      "aria-label",
      idioma === "es"
        ? "Switch to English"
        : "Cambiar a español"
    );

  }


  idiomaActual = idioma;

}


function cambiarIdioma() {

  aplicarIdioma(
    idiomaActual === "es"
      ? "en"
      : "es"
  );

}


let menuVisible = false;


function mostrarOcultarMenu() {

  const nav = document.getElementById("nav");

  menuVisible = !menuVisible;

  nav.className =
    menuVisible
      ? "responsive"
      : "";

}


function cerrarMenu() {

  document.getElementById("nav").className = "";

  menuVisible = false;

}


function animarHabilidades() {

  const barras =
    document.querySelectorAll(".progreso");


  const mostrar = barra => {

    const porcentaje =
      barra.getAttribute("data-percent") || "0";

    barra.style.width =
      porcentaje + "%";


    const etiqueta =
      barra.querySelector("span");


    if (etiqueta) {

      etiqueta.textContent =
        porcentaje + "%";

    }

  };


  if (!("IntersectionObserver" in window)) {

    barras.forEach(mostrar);

    return;

  }


  const observador =
    new IntersectionObserver(

      (entradas, obs) => {

        entradas.forEach(entrada => {

          if (entrada.isIntersecting) {

            mostrar(entrada.target);

            obs.unobserve(
              entrada.target
            );

          }

        });

      },

      {
        threshold: 0.4
      }

    );


  barras.forEach(
    barra => observador.observe(barra)
  );

}


document.addEventListener(
  "DOMContentLoaded",
  () => {

    aplicarIdioma("es");

    animarHabilidades();

  }
);
