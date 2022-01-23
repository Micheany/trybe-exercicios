const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
//ex 1 - dada a matriz a cima, a transforme em um array

function flatten(arr) {
  return arr.reduce((acc, item) => acc.concat(item) ,[])
}

console.log(flatten(arrays))


const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// Ex 2 - Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames(arr) {
  let arrReduc =  arr.reduce((acc, curr) => acc.concat(curr.author.name,), [])
  return arrReduc.join(' ,')
}
console.log(reduceNames(books))

// Ex 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult = 43;

function averageAge(arr) {
  let sumAges = arr.reduce((acc, curr) => {
      return acc + curr.releaseYear - curr.author.birthYear
  }, 0) 
  return sumAges / arr.length
}

console.log(averageAge(books))

// Ex 4 - Encontre o livro com o maior nome

function longestNamedBook(arr) {
   return arr.reduce((acc, curr) => acc.length > curr.length ? acc : curr )
}

console.log(longestNamedBook(books))