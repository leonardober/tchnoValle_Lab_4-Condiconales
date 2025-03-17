
alert("Hi welcome to JS TalentoTech Condicionales lab_4: ");

// Definición de las variables
let m = 5;  
let n = 10; 
let x = 15;
let p =  7;
let q = 30;

// a. El valor de la variable “m” este entre -59 y 10.
if (m > -59 && m < 10) {
    console.log("EN a. m está entre -59 y 10");
} else {
    console.log("EN a. m NO está entre -59 y 10");
}

// b. El valor de la variable “m” ESTA al intervalo (10,80).
if (m > 10 && m < 80) {
    console.log("EN b. m pertenece al intervalo (10,80)");
} else {
    console.log("EN b. m NO pertenece al intervalo (10,80)");
}

// c. El valor de la variable “m” REGISTRA dos veces el valor de la variable “n”.
if (m === 2 * n) {
    console.log("eN c. m es dos veces el valor de n");
} else {
    console.log("EN c. m NO es dos veces el valor de n");
}

// d. El valor de la variable “m” pertenezca al intervalo [0,10].
if (m >= 0 && m <= 10) {
    console.log("EN d. m pertenece al intervalo [0,10]");
} else {
    console.log("EN d. m NO pertenece al intervalo [0,10]");
}

// e. El valor de la variable “m” sea diferente a 10.
if (m !== 10) {
    console.log("EN e. m es diferente a 10");
} else {
    console.log("EN e. m NO es diferente a 10");
}

// f. El valor de la variable “m” sea diferente a 5 y también diferente a 10.
if (m !== 5 && m !== 10) {
    console.log("EN f. m es diferente a 5 y a 10");
} else {
    console.log("EN f. m NO es diferente a 5 y a 10");
}

// g. El valor de la variable “m” sea diferente a las palabras “sí” y “no”.
if (m !== "sí" && m !== "no") {
    console.log("EN g. m es diferente a 'sí' y 'no'");
} else {
    console.log("EN g. m NO es diferente a 'sí' y 'no'");
}

// h. Verificar que el valor de la variable “m” sea alguno de los valores: “+”, “-”, “*”, “/”.
if (m === "+" || m === "-" || m === "*" || m === "/") {
    console.log("EN h. m es uno de los operadores: +, -, *, /");
} else {
    console.log(" EN h. m NO es uno de los operadores: +, -, *, /");
}

// i. El valor de la variable “m” sea diferente al valor de la variable “n” y se encuentre en el intervalo [0,10].
if (m !== n && m >= 0 && m <= 10) {
    console.log("EN i. m es diferente a n y está en el intervalo [0,10]");
} else {
    console.log("EN i. m NO es diferente a n o NO está en el intervalo [0,10]");
}


// j. El valor de la variable “m” sea mayor que 5.
if (m > 5) {
    console.log(" EN j. m es mayor que 5");
}

// k. El valor de la variable “m” sea menor que 10 o mayor que 20.
if (m < 10 || m > 20) {
    console.log("EN k. m es menor que 10 o mayor que 20");
}

// l. El valor de la suma de las variables “m” y “n” sea mayor que 8.
if (m + n > 8) {
    console.log(" EN l. La suma de m y n es mayor que 8");
}

// m. El valor de la suma de las variables “m” y “n” no sea mayor que el valor de la variable “x”.
if (m + n <= x) {
    console.log("En m. La suma de m y n no es mayor que x");
}

// n. El valor de la variable “m” no sea vocal.
if (!/[aeiouAEIOU]/.test(m)) {
    console.log(" EN n. m no es una vocal");
}

// o. El valor de la variable “m” sea vocal.
if (/[aeiouAEIOU]/.test(m)) {
    console.log("EN o. m es una vocal");
}

// p. El valor de la variable “m” sea numérica y se encuentre en el intervalo [0-9].
if (typeof m === 'number' && m >= 0 && m <= 9) {
    console.log(" EN p. m es numérica y está en el intervalo [0-9]");
}

// q. El valor de la variable “m” pertenece al intervalo (3.8:50].
if (m > 3.8 && m <= 50) {
    console.log(" EN q. m pertenece al intervalo (3.8:50]");
}

//EJERCICIOS NUMERADOS CON FOR PARA HACER RECORRIDOS

// Ejercicio 2: Escribir los números de 1 a n, n > 0.

console.log("Ejercicio 2:");
for (let i = 1; i <= n; i++) {
    console.log(i);
}

// Ejercicio 3: Escribir los números de p a q, de p en p; p > 0 y q > p.


console.log("Ejercicio 3:");
for (let i = p; i <= q; i += p) {
    console.log(i);
}

// Ejercicio 4: Calcular y escribir la suma de los números de 1 a n, n > 0.

let suma = 0;
for (let i = 1; i <= n2; i++) {
    suma += i;
}
console.log("Ejercicio 4:");
console.log(`La suma de los números de 1 a ${n2} es ${suma}.`);

// Ejercicio 5: Obtener y escribir la suma de n números dados por el usuario.

let numeros = [3, 5, 7, 2, 8]; 
let suma2 = 0;
for (let numero of numeros) {
    suma2 += numero;
}
console.log("Ejercicio 5:");
console.log(`La suma de los números dados es ${suma2}.`);



// Ejercicio 6: Obtener y escribir el producto de n números dados por el usuario.
let numerbers = [2, 3, 4]; // Puedes cambiar estos valores para simular la entrada del usuario
let producto = 1;
for (let numero of numerbers) {
    producto *= numero;
}
console.log("Ejercicio 6:");
console.log(`El producto de los números dados es ${producto}.`);

// Ejercicio 7: Generar la tabla de multiplicar que el usuario desee. El multiplicador deberá variar desde 0 hasta 9.
let tabla = 7; // Puedes cambiar este valor para generar la tabla de otro número
console.log("Ejercicio 7:");
for (let i = 0; i <= 9; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
}

// Ejercicio 8: Hacer un algoritmo que escriba los siguientes 100 números a partir de un número ingresado por el usuario.
let inicio = 50; // Puedes cambiar este valor para empezar desde otro número
console.log("Ejercicio 8:");
for (let i = inicio; i < inicio + 100; i++) {
    console.log(i);
}

// Ejercicio 9: Escriba la suma de cada número ingresado por el usuario, desde 1 hasta el número. El algoritmo debe terminar cuando el usuario ingrese un número menor o igual que cero.
let numerosUsuario = [5, 3, 0]; // Puedes cambiar estos valores para simular la entrada del usuario
console.log("Ejercicio 9:");
for (let num of numerosUsuario) {
    if (num <= 0) {
        console.log("Número menor o igual a cero. Algoritmo terminado.");
        break;
    }
    let suma = 0;
    for (let i = 1; i <= num; i++) {
        suma += i;
    }
    console.log(`La suma de los números de 1 a ${num} es ${suma}.`);
}

// Ejercicio 10: Escribir los números pares de 1 a n, si n es múltiplo de 5, o los impares si no es múltiplo de 5.

console.log("Ejercicio 10:");
if (n % 5 === 0) {
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
} else {
    for (let i = 1; i <= n; i += 2) {
        console.log(i);
    }
}
