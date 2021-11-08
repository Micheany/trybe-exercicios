let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0;

for (let index = 0; index < numbers.length; index++) {
    
    if(numbers[index] % 2 !== 0 ){
        impar = impar + 1;
    }
}
if(impar == 0){
    console.log("Não há nenhum numero impar");
}else{
    console.log("Temos " +impar + " numeros impares");
}