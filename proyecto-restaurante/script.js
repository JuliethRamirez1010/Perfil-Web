document.getElementById("calcular").addEventListener("click",function(){
const nombre=document.getElementById("nombre").value.trim();
const cedula=document.getElementById("cedula").value.trim();
const servicio=document.querySelector('input[name="servicio"]:checked');
const plato=Number(document.getElementById("plato").value);
const cantidad=Number(document.getElementById("cantidad").value);
const resultado=document.getElementById("resultado");
if(!nombre||!cedula||!servicio||plato===0||cantidad<1){resultado.textContent="Complete all required fields.";return;}
let extras=0;
document.querySelectorAll(".extras input:checked").forEach(c=>extras+=Number(c.value));
let total=(plato*cantidad)+extras;
if(servicio.value==="domicilio")total+=5000;
resultado.textContent=`${nombre}, your total is $${total.toLocaleString("en-US")}. Service: ${servicio.value}.`;
});

