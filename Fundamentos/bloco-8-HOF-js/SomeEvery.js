//verificar se possui algum nome que começa com a letra desejada
const listNames = ['Michelle', 'Bruninho', 'Eulalia', 'Waldomiro', 'Matheus'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('M', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false

// verificar se o estudante passou em todas as matérias
const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyGrades = (studentGrades) => (
    Object.values(studentGrades).every((grade) => grade === 'Aprovado')
  );
  
  console.log(verifyGrades(grades));

//dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) => element === name );

console.log(hasName(names, 'Ana'))

// dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => arr.every((element) => element.age >= minimumAge);
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 16));