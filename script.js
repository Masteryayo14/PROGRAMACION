// Sube al principio de la página
document.getElementById('scrollToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Ciclo for que imprime los números del 1 al 5
console.log("Números de i");
for (let i = 1; i <= 5; i++) console.log("Número i => " + i);

console.log("\n");

// Ciclo while que imprime los números del 1 al 5
console.log("Números de j");
let j = 1;
while (j <= 5) console.log("Número j => " + j++);

console.log("\n");

// Condicionales que dice la escala de edad a la que pertenece
console.log("Escala de edad");
const edad = 20;
if (edad < 18) console.log("Eres menor de edad");
else if (edad < 65) console.log("Eres adulto");
else console.log("Eres adulto mayor");

console.log("\n");

// Método map que duplica cada valor
console.log("Método map - array");
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
const numerosDuplicados = numeros.map(numero => numero * 2);
console.log(numerosDuplicados);

console.log("\n");

// Solicitudes de las colaboraciones
console.log("Colaboraciones");
const formulario = document.getElementById('contacto');

// Agregar un evento al formulario
formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
    console.log("\n");

    const exito = true;
    if (exito) {
        alert('¡Solicitud enviada con éxito!, ver consola para ver colaboraciones');
        document.getElementById('formularioColaboracion').reset();
    } else {
        alert('Hubo un error al enviar la solicitud.');
    }
});

// Funcion para calcular la suma de 0 hasta n
function calcularSuma() {
    const numero = document.getElementById("numeroInput").value;

    if (!isNaN(numero) && numero > 0) {
        let suma = 0;

        for (let i = 0; i <= numero; i++) {
            suma += i;
        }

        document.getElementById("resultado").innerText = "La suma desde 0 hasta " + numero + " es: " + suma;
    } else {
        document.getElementById("resultado").innerText = "Ingresa un número válido";
    }
}

// Función para agregar un nuevo párrafo
function agregarParrafo() {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este es un nuevo párrafo";
    document.getElementById("dom").appendChild(nuevoParrafo);
}

// Función para modificar el texto de un párrafo existente
function modificarTexto() {
    document.getElementById("text-dom").textContent = "Párrafo modificado";
}

// Función para eliminar un párrafo existente
function eliminarParrafo() {
    const parrafoEliminar = document.getElementById("text-dom");
    parrafoEliminar.parentNode.removeChild(parrafoEliminar);
}
