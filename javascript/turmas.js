import { carregarTurmas } from './dados.js'

document.addEventListener("DOMContentLoaded", function () {

    carregarTurmas()
    const turmas = JSON.parse(localStorage.getItem('turmas'))
    
    if (turmas) {
        const containerTurma = document.querySelector("#container-turmas")
        criarCardsTurmas(turmas, containerTurma)
    } 
})

function criarCardsTurmas(turmas, containerTurma) {
    turmas.forEach(turma => {
        const cardTurma = document.createElement("div")
        cardTurma.classList.add("card")

        const cardContentTurma = document.createElement("div")
        cardContentTurma.classList.add("card-content")

        const titulo = document.createElement("h3")
        titulo.classList.add("card-title")
        titulo.textContent = "Turma " + turma.ano 

        const descricao = document.createElement("p")
        descricao.classList.add("card-description")
        descricao.textContent = "Instagram: " + turma.nome_insta
        descricao.onclick = function () {
            window.location.href = turma.link_insta
        }

        // Botão
        const botao = document.createElement("button")
        botao.classList.add("button-default")
        botao.textContent = "Ver aplicativos"
        botao.onclick = function () {
            window.location.href = `apps.html?ano=${turma.ano}`
        }

        // Adicionando elementos ao card
        cardContentTurma.appendChild(titulo)
        cardContentTurma.appendChild(descricao)
        cardContentTurma.appendChild(botao)
        cardTurma.appendChild(cardContentTurma)

        // Adicionando o card ao container
        containerTurma.appendChild(cardTurma)
    })
}