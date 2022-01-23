
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
  };
  
const { workDays, weekend } = daysOfWeek;
console.log(workDays);
const weekdays = [...workDays, ...weekend];
console.log(weekdays);

// Como foi mostrado, para desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave seguido por : , segue a sintaxe: homeWorld: { name: planetName } . Agora planetName é uma variável que recebe o valor da propriedade name do objeto homeWorld .

// const character = {
//     nome: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200000',
//     },
//   };
  
// // desestruturando o objeto:
// const { nome, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// // imprimindo os valores:
// console.log(`Esse é o ${nome}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


//As propriedades do objeto student não são nada descritivas, não é mesmo? Se fossemos desestruturar esse objeto, as variáveis que seriam criadas ao extrair as propriedades de students teriam nomes sem significado...pensando nisso, podemos trocar o nome da variável ao fazermos a desestruturação:

const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática


//2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals


const user = {
    noame: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const employee = {...user, ...jobInfos}
const { noame, age, nationality, profession, squad, squadInitials} = employee
console.log(`Hi, my name is ${noame}, I'm  ${age} years old and I'm  ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)