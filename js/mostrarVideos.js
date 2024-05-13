import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, valor, imagem, alt, categoria) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<img class="produto__imagens" src="${imagem}" 
    alt="${alt}" />
    <h2 class="produto__titulo">
  ${nome}
    </h2>
    <p class="produto__preco" id="preco">R$${valor}</p>
    <span class="tag">${categoria}</span>`

    return video;
}

async function listaVideos() {
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.alt, elemento.categoria)))
}

listaVideos();