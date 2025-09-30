import csvParaJson from './conversor.js'

function carregarTurmas() {
    const planilhaTurmas = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTKmXEfE79QvkNrtlfcJWeKSk-vCrfDi-7KIE7Kme_a9vzVTj_XfmEk2FoSG9Or4GmchwZ9ghug4Xh6/pub?gid=0&single=true&output=csv'
    
    fetch(planilhaTurmas)
        .then(response => response.text()) // Obtém CSV como texto
        .then(csv => {
            const turmas = csvParaJson(csv); // Converte CSV para JSON
            console.log("Turmas carregadas da planilha:", turmas)

            localStorage.setItem('turmas', JSON.stringify(turmas))
            
        })
        .catch(error => {
            console.error("Erro ao carregar turmas:", error)
        })
}

function carregarProjetos() {
    const planilhaProjetos = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTKmXEfE79QvkNrtlfcJWeKSk-vCrfDi-7KIE7Kme_a9vzVTj_XfmEk2FoSG9Or4GmchwZ9ghug4Xh6/pub?gid=1365824350&single=true&output=csv'

    fetch(planilhaProjetos)
        .then(response => response.text()) // Obtém CSV como texto
        .then(csv => {
            const projetos = csvParaJson(csv); // Converte CSV para JSON
            console.log("Projetos carregados da planilha:", projetos)

            localStorage.setItem('projetos', JSON.stringify(projetos))

        })
        .catch(error => {
            console.error("Erro ao carregar projetos:", error)
        })
}

export {
    carregarTurmas, carregarProjetos
}
