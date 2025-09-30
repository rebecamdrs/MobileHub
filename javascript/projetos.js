import {carregarProjetos} from "./dados.js"
import abrirModal from "./modal.js"

// Obtemos os parâmetros 'ano' e 'periodo' da URL
const urlParams = new URLSearchParams(window.location.search)
const anoSelecionado = urlParams.get('ano')

// Verifica se os valores foram encontrados
if (anoSelecionado) {
    //Coloca a turma no Header
    const mensagem = `Turma ${anoSelecionado}`;
    document.querySelector("#titulo-turma").textContent = mensagem;
    
    carregarProjetos()
    const projetos = JSON.parse(localStorage.getItem('projetos'))
    
    if (projetos) {
        // Se os projetos já estiverem no localStorage, gera os cards
        const projetosFiltrados = projetos.filter(projeto => projeto.turma === anoSelecionado)
        const containerProjeto = document.querySelector("#cards-apps")
        criarCardsProjetos(projetosFiltrados, containerProjeto)
    } 
} else {
    console.error("Ano não encontrado na URL.")
}

function criarCardsProjetos(projetos, containerProjeto) {
    projetos.forEach(projeto => {
        const cardProjeto = document.createElement("div")
        cardProjeto.classList.add("card-app")

        const imagemProjeto = document.createElement("img")
        imagemProjeto.id = "app-img"
        imagemProjeto.src = projeto.image_app
        imagemProjeto.loading = "lazy"

        const content = document.createElement("div")
        content.id = "content"

        const titulo = document.createElement("h2")
        titulo.textContent = projeto.nome

        const descricao = document.createElement("p")
        descricao.textContent = projeto.descricao

        const botoes = document.createElement("div")
        botoes.id = "botoes"

        const botaoDownload = document.createElement("button")
        botaoDownload.classList.add("button-default")
        botaoDownload.textContent = "Baixar aplicativo"
        botaoDownload.onclick = function () {
            window.location.href = projeto.download
        }

        const botaoInformacoes = document.createElement("button")
        botaoInformacoes.classList.add("button-default", "info-button")
        botaoInformacoes.textContent = "Mais Informações"
        botaoInformacoes.onclick = function () {
            abrirModal(projeto)
        }

        botoes.appendChild(botaoDownload)
        botoes.appendChild(botaoInformacoes)

        content.appendChild(titulo)
        content.appendChild(descricao)
        content.appendChild(botoes)

        cardProjeto.appendChild(imagemProjeto)
        cardProjeto.appendChild(content)

        containerProjeto.appendChild(cardProjeto)
    })
}
