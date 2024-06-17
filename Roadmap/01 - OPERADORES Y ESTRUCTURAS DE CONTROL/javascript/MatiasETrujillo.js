// Operadores de JavaScript

//Declaracion de variables
let num1 = 25;
let num2 = 5;

// Operadores aritmetricos
let suma = num1 + num2; //Suma
console.log('suma ' + suma)
let resta = num1 - num2; //Resta
console.log('resta ' + resta)
let multiplicacion = num1 * num2; //Multiplicación
console.log('multiplacacion ' + multiplicacion)
let division = num1 / num2; //División
console.log('division ' + division)
let resto = num1 % num2; //Resto de la división
console.log('resto de la division ' + resto)

// Operadores de incremento y decremento

num1++ //Incremento en 1 a num1
console.log ('Numero 1 incrementado en 1' + num1)
num2-- //decrementa en 1 num2
console.log ('Numero 2 decrementado en 1' + num2)

// Operadores de asignación
num2 += 6; //Adición asignación

num1 -= 6; //Resta asignación
num2 *= 2; //Multiplicación asignación
num1 /= 5; //División asignación

/* Operadores de comparación
num1 === num2 (Igual estricto)
num1 == num2 (Igual)
num1 !== num2 (Igual no estricto)
num1 != num2 (Desigual)
num1 > num2 (Mayor que)
num2 < num1 (Menor que)
num1 >= num2 (Mayor igual que)
num2 <= num1 (Menor igual que)
*/ 

// Estructuras de Control
if (num1 < num2) {
    suma += num2;
} else {
    suma += num1
}

while (suma < num1) {
    suma ++
}

do {
   console.log (resto) 
} while (resto < 5);

for (let i = 0; i < division; i++) {
    multiplicacion /= num1;
}

let persona = {
    nombre: 'Matias',
    edad: 26,
    ciudad: 'Córdoba'
}

for (let clave in persona) {
    console.log ('${clave}: ${persona[clave]}')
}

let array = [15, 121, 156, 12, 84]

for (let num of numeros) {
    console.log (num)
}

let dia = new Date().getDay();

switch (dia) {
    case 0:
        console.log("Hoy es domingo.");
        break;
    case 1:
        console.log("Hoy es lunes.");
        break;
    case 2:
        console.log("Hoy es martes.");
        break;
    case 3:
        console.log("Hoy es miércoles.");
        break;
    case 4:
        console.log("Hoy es jueves.");
        break;
    case 5:
        console.log("Hoy es viernes.");
        break;
    case 6:
        console.log("Hoy es sábado.");
        break;
    default:
        console.log("Día no válido.");
        break;
}
