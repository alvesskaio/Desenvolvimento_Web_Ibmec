const espaco_nome = document.getElementById('nome');
const espaco_imagem = document.querySelector(`div#container > img`);
const espaco_descricao = document.querySelector(`div#container > p`);

const preenche = (nAtleta) => {

    const infoAtletas = atletas[nAtleta];

    espaco_nome.innerHTML = infoAtletas.nome;
    espaco_imagem.src = infoAtletas.imagem;
    espaco_descricao.innerHTML = infoAtletas.descricao;

}

preenche(4)

