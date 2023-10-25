const preenche = (atleta) => {

  const container = document.createElement("div");
  const titulo = document.createElement("h3");
  const imagem = document.createElement("img");
  const descricao = document.createElement("p");

  titulo.innerHTML = atleta.nome;
  imagem.src = atleta.imagem;
  descricao.innerHTML = atleta.descricao;

  container.appendChild(titulo);
  container.appendChild(imagem);
  container.appendChild(descricao);

  document.body.appendChild(container);
};

// atletas.forEach((atleta) => {
//     preenche(atleta)
//     })


// Exemplo como percorrer o while

// let i = 0;
// while (i < atletas.length) {
//     preenche(atletas[i]);
//     console.log(i, atletas[i].nome)
//     i++;
// };


// Exemplo de como percorrer um array com for

// for (let i = 0; i < atletas.length; i++) {
//     preenche(atletas[i]);
//     console.log(i, "loop for")
// }


// Exemplo de como percorrer um array de trás para frente com for

for (let i = atletas.length - 1;  i >= 0; i--) {
    preenche(atletas[i]);
    console.log(i, "loop for reverso")
}
