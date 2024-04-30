// 1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Entrada: numero=0(leer)
// Proceso: si numero > 8 entonces
//            Escribir "El número digitado es mayor que 8."
//           sino
//            Escribir "El número digitado es menor que 8."
//          FinSi
// Salida: Mostrar si el número es mayor o menor que 8.

// Pseudocodigo
// InicioAlgoritmo ejercicio_1
//  Escribir "Bienvenido seas, digita un número:"
//  Leer numero
//  Si numero > 8 Entonces
//    Escribir "El número digitado es mayor que 8."
//  Sino
//    Escribir "El número digitado es menor que 8."
//  FinSi
// FinAlgoritmo

const prompt = require('prompt-sync')();
const read = console.log;

function ejercicio_8() {
const numero = parseFloat(prompt('Bienvenido seas, digita un número:'));

if (numero > 8) {
    read('El número digitado es mayor que 8.');
}

else {
    read('El número digitado es menor que 8.');
}
}
 
ejercicio_1();