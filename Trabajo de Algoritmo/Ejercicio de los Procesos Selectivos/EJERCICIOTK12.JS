// 12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// Entrada: factura=10(leer), iva=10(leer), monto_factura=10(leer), porcentaje_iva=10(leer), monto_total(calcular) 
// Proceso:iva = (monto_factura * porcentaje_iva)/100
//               monto_total = monto_factura + iva
//               Escribir "El monto total a pagar, incluyendo el IVA del", porcentaje_iva, "%, es: ", monto_total
// Salida: monto_total_a_pagar

// Pseudocodigo:
// InicioAlgoritmo ejercicio_12
//  Escribir "Por favor, ingresa el monto total de la factura: "
//  Leer monto_factura
//  Escribir "Por favor ingrese el porcentaje del IVA aplicado (en porcentaje sin el símbolo '%'):"
//  Leer porcentaje_iva
//  iva = (monto_factura * porcentaje_iva)/100
//  monto_total = monto_factura + iva
//  Escribir "El monto total a pagar, incluyendo el IVA del", porcentaje_iva, "%, es: ", monto_total
// FinAlgoritmo

const prompt = require('prompt-sync')();
const write = console.log

function ejercicio_12(){
    let monto_factura = 10, porcentaje_iva = 10, iva = 10, monto_total = 10
    monto_factura = prompt("Por favor, ingresa el monto total de la factura: ")
    monto_factura = parseFloat(monto_factura)
    porcentaje_iva = prompt("Por favor ingrese el porcentaje del IVA alicado (en porcentaje sin el símbolo '%'):")
    porcentaje_iva = parseFloat(porcentaje_iva)
    iva = (monto_factura * porcentaje_iva)/100
    monto_total = monto_factura + iva;
    write("El monto total a pagar, incluyendo el IVA del", porcentaje_iva, "%, es: ", monto_total)
}

ejercicio_12();