let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda, " + info.personagem);


  // adicionando nova propriedade recorrente a info

  info.recorrente = 'Sim';
  console.log(info);

//for in para mostrar todas as chaves dos objetos

for( key in info){
    console.log(key);
}

//for in para msotrar o valor das propriedades
for( key in info){
    console.log(info[key]);
}

//segundo objeto com as mesmas propriedades mas valores diferentes

let infoPatinhas = {
    personagem: ' Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota:  'O último MacPatinhas',
    recorrente: 'Sim'
  };

  console.log( info.personagem +" " + infoPatinhas.personagem)
