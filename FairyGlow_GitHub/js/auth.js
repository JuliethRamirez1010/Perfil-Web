// Autenticación local para una aplicación estática.
// Los datos se guardan únicamente en localStorage del navegador.
// No necesita PHP, MySQL, XAMPP ni otro servidor.
const USERS_KEY = 'fairyGlowUsers';
const SESSION_KEY = 'fairyGlowSession';

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
  catch { return []; }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

async function hashPassword(password) {
  // SHA-256 cuando el navegador lo permite; el fallback permite probar
  // el proyecto incluso abriendo index.html directamente como archivo.
  if (window.crypto && crypto.subtle) {
    const data = new TextEncoder().encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  let h = 2166136261;
  for (let i = 0; i < password.length; i++) {
    h ^= password.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return 'fallback-' + (h >>> 0).toString(16);
}

async function registerUser(name, email, password) {
  if (!name || !email || !password) return {ok:false, message:'Completa todos los campos.'};
  if (password.length < 6) return {ok:false, message:'La contraseña debe tener mínimo 6 caracteres.'};
  const users = getUsers();
  if (users.some(u => u.email === email)) return {ok:false, message:'Ese correo ya está registrado.'};
  users.push({name, email, password: await hashPassword(password), createdAt: new Date().toISOString()});
  saveUsers(users);
  return {ok:true, message:'Registro exitoso. Ahora puedes iniciar sesión.'};
}

async function loginUser(email, password) {
  const users = getUsers();
  const hash = await hashPassword(password);
  const user = users.find(u => u.email === email && u.password === hash);
  if (!user) return {ok:false, message:'Correo o contraseña incorrectos.'};
  localStorage.setItem(SESSION_KEY, JSON.stringify({name:user.name, email:user.email}));
  return {ok:true, message:'Inicio de sesión correcto.'};
}

function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; }
}

function logout() {
  localStorage.removeItem(SESSION_KEY);
  location.href = 'index.html';
}

function protectPage() {
  if (!getSession()) {
    location.href = 'login.html';
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const area = document.getElementById('userArea');
  const session = getSession();
  if (area && session) {
    area.innerHTML = 'Hola, ' + session.name.split(' ')[0] +
      ' <button type="button" class="logout-btn" onclick="logout()">Cerrar sesión</button>';
  }
});
