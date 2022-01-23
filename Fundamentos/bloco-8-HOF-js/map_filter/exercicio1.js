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
  
  // ex 1 -  Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

  function formatedBookNames(arr) {
    const formatedNames = arr.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
    return formatedNames
  }

  console.log(formatedBookNames(books))

  // ex 2 -  Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

  function formatedBookAgeAuthor(arr) {
      const ageAndAuthor = arr.map((book) => {
          let age = book.releaseYear - book.author.birthYear;
          return  {age: age, author: book.author.name}
      }).sort((a, b) => {
          if(a.age > b.age){
              return 1;
          }
          if(a.age < b.age){
            return -1;
        }
        return 0;
      })
      return ageAndAuthor
  }

 console.log(formatedBookAgeAuthor(books))

 //ex 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

 function formatedBookFic(arr) {
     const formatedBook = arr.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
     return formatedBook
 }

 console.log(formatedBookFic(books))

 //ex 4 -  Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

 function formatedBookOld(arr) {
    const formatedOld = arr.filter((book) => {
        const ageBook = 2022 - book.releaseYear;
        return ageBook > 60
    }).sort((a, b) => {
        const ageBookA = 2022 - a.releaseYear;
        const ageBookB = 2022 - b.releaseYear;
        if(ageBookA < ageBookB){
            return 1;
        }
        if(ageBookA > ageBookB){
          return -1;
      }
      return 0;
    })
    return formatedOld;
}

console.log(formatedBookOld(books))

//ex 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function authorsFicAndFantasy(arr) {
    let authors = arr.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').map((book) => `${book.author.name}`).sort((a, b) => {
        if(a > b){
            return 1;
        }
        if(a < b){
          return -1;
      }
      return 0;
    })
    return authors
}

console.log(authorsFicAndFantasy(books))

