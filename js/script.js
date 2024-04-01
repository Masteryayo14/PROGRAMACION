// Función para obtener la fecha actual
function obtenerFechaActual() {
  const fecha = new Date();
  return fecha.toLocaleDateString();
}

// Objeto con información de un Spartan
const spartan = {
  nombre: "John-117",
  rango: "Master Chief",
  especialidad: "Comando",
  fechaNacimiento: "25 de marzo de 2511"
};

// Ciclo for para mostrar los nombres de los miembros del Equipo Azul
const equipoAzul = ["Nombre1", "Nombre2", "Nombre3"]; // Ejemplo de nombres de equipo
for (let i = 0; i < equipoAzul.length; i++) {
  console.log(`Nombre: ${equipoAzul[i]}`);
}

// Condicional para mostrar un mensaje según el rango del Spartan
if (spartan.rango === "Master Chief") {
  console.log("El Spartan es el líder del Covenant.");
} else {
  console.log("El Spartan es un miembro del Covenant.");
}

// Función para agregar un nuevo elemento al menú
function agregarElementoMenu(texto) {
  const elementoMenu = document.createElement("li");
  elementoMenu.textContent = texto;
  const menu = document.getElementById("menu");
  menu.appendChild(elementoMenu);
}

// Función para cambiar el color de fondo de la página
function cambiarColorFondo(color) {
  document.body.style.backgroundColor = color;
}

// Función para mostrar un mensaje al hacer clic en un botón
function mostrarMensaje() {
  alert("¡Hola Spartan!");
}

// Función para sumar números del 1 al n
function sumarNumeros(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

// Función para calcular la suma
document.getElementById("calcular-suma").addEventListener("click", function() {
  const n = parseInt(document.getElementById("numero-calculadora").value);
  const resultado = sumarNumeros(n);
  document.getElementById("resultado-calculadora").textContent = `La suma de los números del 1 al ${n} es: ${resultado}`;
});

// Función para calcular el índice Spartan
document.getElementById("calcular-indice").addEventListener("click", function() {
  const nombre = document.getElementById("nombre-calculadora").value;
  const fechaNacimiento = document.getElementById("fecha-nacimiento-calculadora").value;

  // Calcular el índice Spartan
  const indiceSpartan = 100; // Ejemplo de cálculo (reemplazar con lógica real)

  const resultadoElement = document.getElementById("resultado-indice-calculadora");
  resultadoElement.textContent = `Tu índice Spartan es: ${indiceSpartan}`;
});

// Función para manejar el envío del formulario de información Spartan
document.getElementById("formulario-spartan").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  // Obtener los valores de los campos de entrada
  const nombre = document.getElementById("nombre-spartan-input").value;
  const rango = document.getElementById("rango-spartan-input").value;
  const especialidad = document.getElementById("especialidad-spartan-input").value;
  const fechaNacimiento = document.getElementById("fecha-nacimiento-spartan-input").value;

  // Mostrar los datos en la consola
  console.log("Datos del Spartan:");
  console.log("Nombre: " + nombre);
  console.log("Rango: " + rango);
  console.log("Especialidad: " + especialidad);
  console.log("Fecha de Nacimiento: " + fechaNacimiento);

  // También puedes enviar los datos a un servidor aquí si lo deseas
});