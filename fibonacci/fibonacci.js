function fibonacci(numero) {
    if (!Number.isInteger(numero) || numero <= 0) {
        return "Por favor ingresa un número entero positivo.";
    }

    if (numero === 1) return [0];
    if (numero === 2) return [0, 1];

    let secuencia = [0, 1];
    let num1 = 0, num2 = 1;

    for (let i = 2; i < numero; i++) {
        const siguiente = num1 + num2;
        secuencia.push(siguiente);
        num1 = num2;
        num2 = siguiente;
    }
    return secuencia;
}

let cantidad = parseInt(prompt("Ingrese la cantidad de elementos de Fibonacci:"), 10);

let resultado = fibonacci(cantidad);


if (Array.isArray(resultado)) {
    document.write(`<p>Fibonacci (${cantidad}): ${resultado}</p>`);
} else {
    document.write(`<p>${resultado}</p>`); 
}
