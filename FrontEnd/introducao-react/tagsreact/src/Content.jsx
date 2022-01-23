import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

const list = ({conteudo, bloco, status}) => {
    return ( `O conteúdo é: ${conteudo}
                / Status: ${status}
                / Bloco: ${bloco}`
   );
}

class Content extends React.Component {
    render() {
       return <p>{conteudos.map((content) => list(content))}</p>
    }
}

export default Content