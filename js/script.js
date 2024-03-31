// Función para calcular la suma de números del 0 al n
function sumNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Función para calcular el factorial de un número
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Función para calcular el promedio de una lista de números
function calculateAverage(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}

// Función para mostrar un mensaje con el resultado de la suma
function showSumResult() {
  const inputElement = document.getElementById("inputNumber");
  const number = parseInt(inputElement.value);
  const sum = sumNumbers(number);
  const message = `La suma de los números del 0 al ${number} es: ${sum}`;
  alert(message);
}

// Función para mostrar un mensaje con el resultado del factorial
function showFactorialResult() {
  const inputElement = document.getElementById("inputNumber");
  const number = parseInt(inputElement.value);
  const factorialResult = factorial(number);
  const message = `El factorial de ${number} es: ${factorialResult}`;
  alert(message);
}

// Función para mostrar un mensaje con el resultado del promedio
function showAverageResult() {
  const inputElements = document.getElementsByClassName("number-input");
  const numbers = [];
  for (let element of inputElements) {
    numbers.push(parseInt(element.value));
  }
  const average = calculateAverage(numbers);
  const message = `El promedio de los números ingresados es: ${average}`;
  alert(message);
}

// Agregar eventos a los botones
const sumButton = document.getElementById("sum-button");
sumButton.addEventListener("click", showSumResult);

const factorialButton = document.getElementById("factorial-button");
factorialButton.addEventListener("click", showFactorialResult);

const averageButton = document.getElementById("average-button");
averageButton.addEventListener("click", showAverageResult);
