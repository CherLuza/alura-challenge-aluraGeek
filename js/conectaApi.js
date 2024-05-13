async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(nome, valor, imagem, alt, categoria) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem,
            alt: alt,
            categoria: categoria
        })
    });

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


export const conectaApi = {
    listaVideos,
    criaVideo    
}