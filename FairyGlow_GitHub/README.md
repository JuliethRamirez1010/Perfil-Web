# Fairy Glow — versión estática

Esta versión está preparada para publicarse en GitHub Pages.

## Tecnologías
- HTML
- CSS
- JavaScript
- localStorage del navegador

No utiliza PHP, MySQL, XAMPP, Apache, Node.js ni otro servidor.

## Registro e inicio de sesión
El registro crea un usuario en `localStorage`. La contraseña se transforma a SHA-256 antes de guardarse. Al iniciar sesión se crea una sesión local y el catálogo queda protegido hasta cerrar sesión.

> **Importante:** esta autenticación es una demostración educativa para una aplicación estática. No debe utilizarse como sistema de autenticación para datos reales o sensibles, porque todo el almacenamiento está en el navegador del usuario.

## Cómo probarlo
1. Descomprime el proyecto.
2. Abre `index.html` directamente con el navegador.
3. Entra en **Registrarse** y crea una cuenta.
4. Después entra en **Iniciar sesión**.
5. Accede al **Catálogo**.
6. Prueba **Cerrar sesión** y verifica que el catálogo vuelve a pedir inicio de sesión.

## GitHub Pages
Sube el contenido de esta carpeta a un repositorio de GitHub. En GitHub entra a **Settings → Pages**, selecciona la rama que contiene `index.html` y publica.

La página principal es `index.html`.
