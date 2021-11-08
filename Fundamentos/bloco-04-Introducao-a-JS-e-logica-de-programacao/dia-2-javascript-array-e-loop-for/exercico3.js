let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let index = 0; index < numbers.length; index++) {
     soma = soma + numbers[index];
}
let mediaAritimetica = soma / numbers.length;

console.log("A media dos elementos do array é: " + mediaAritimetica);

if (mediaAritimetica > 20) {
    console.log("Valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}