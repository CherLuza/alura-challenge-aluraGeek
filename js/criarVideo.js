import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const alt = document.querySelector("[data-alt]").value;
    const categoria = document.querySelector("[data-categoria]").value;

    console.log("Nome:", nome);
    console.log("Valor:", valor);
    console.log("Imagem:", imagem);
    console.log("Alt:", alt);
    console.log("Categoria:", categoria);

    await conectaApi.criaVideo(nome, valor, imagem, alt, categoria);
    //window.location.href = "../pages/envio-concluido.html";//
}

formulario.addEventListener("submit", evento => criarVideo(evento))

//alert("Seu produto foi adicionado ao site!"); //prompt de aviso de envio do formulário //
