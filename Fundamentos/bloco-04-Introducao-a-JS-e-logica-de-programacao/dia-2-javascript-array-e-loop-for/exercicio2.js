let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let index = 0; index < numbers.length; index++) {
     soma = soma + numbers[index];
}

console.log("A soma dos elementos do array é: " + soma);

soma = 0;

for (const number of numbers) {
    soma = soma + number;
}

console.log("A soma dos elementos do array é: " + soma);