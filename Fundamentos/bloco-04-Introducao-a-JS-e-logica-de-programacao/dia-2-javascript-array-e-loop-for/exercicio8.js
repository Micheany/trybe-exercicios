let numeros = [];

for (let index = 1; index < 26; index++) {
    numeros.push(index);   
}

for (let index = 0; index < numeros.length; index++) {
    let divisao = numeros[index] / 2;

    console.log( numeros[index] +  " / 2  = " + divisao );
}


