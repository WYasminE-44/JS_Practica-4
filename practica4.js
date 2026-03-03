const num1 = 20;
const num2 = 8;

const add = (a, b) => a + b;
const  substraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const dividir = (a, b) => {
    
    if (b === 0) return "Error: No se puede dividir por cero";
    return a / b;
};


const resultadoSuma = add(num1, num2);
const resultadoResta = substraction (num1, num2);
const resultadoMulti = multiply(num1, num2);
const resultadoDiv = dividir(num1, num2);


console.log(`Resultados`);
console.log(`La suma de ${num1} + ${num2} es: ${resultadoSuma}`);
console.log(`La resta de ${num1} - ${num2} es: ${resultadoResta}`);
console.log(`La multiplicación de ${num1} * ${num2} es: ${resultadoMulti}`);
console.log(`La división de ${num1} / ${num2} es: ${resultadoDiv}`);