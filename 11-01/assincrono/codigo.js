// const promessa = fetch("https://botafogo-atletas.mange.li/all");


// promessa.then(
//     (resposta) => resposta.text().then(
//         (r) => console.log(r)
//     )
// );


const url = "https://botafogo-atletas.mange.li";

const numero_jogador = 24;

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados
}

pegar_coisas(`${url}/${numero_jogador}`).then(
    (entrada) => console.log(entrada)
)



console.log(promessa);

console.log("assincrono");