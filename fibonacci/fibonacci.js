function fibonacci(numero) {
    if (numero <= 0) return [];
    if (numero === 1) return [0];
    if (numero === 2) return [0, 1];

    let secuencia = [0, 1];
    let num1 = 0, num2 = 1;

    for (let incremeto = 2; incremeto < numero; incremeto++) {
        const siguiente = num1 + num2;
        secuencia.push(siguiente);
        num1 = num2;
        num2 = siguiente;
    }
    return secuencia;
}
const cantidad = 20;
document.write(`<p>Fibonacci (${cantidad}): ${fibonacci(cantidad)}</p>`);

