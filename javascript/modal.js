function criarModal() {
    // Criar a estrutura básica do modal
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal-window');
    modalWindow.id = 'modal-window'; // Definir o ID do modal

    const modal = document.createElement('div');
    modal.id = 'info-modal';
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Criar o botão de fechar
    const fecharButton = document.createElement('button');
    fecharButton.id = 'fechar';
    fecharButton.classList.add('close-btn');
    fecharButton.textContent = 'x';

    // Criar o corpo do modal
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    // Criar a parte direita do modal
    const modalRight = document.createElement('div');
    modalRight.classList.add('modal-right');
    const modalTitle = document.createElement('h1');
    const modalDescription = document.createElement('p');

    // Criar a lista de alunos
    const studentsContainer = document.createElement('div');
    studentsContainer.classList.add('students');

    // Criar o botão de download
    const downloadButton = document.createElement('button');
    downloadButton.classList.add('button-default');
    downloadButton.textContent = 'Baixar Aplicativo';

    // Adicionar os elementos ao DOM
    modalRight.appendChild(modalTitle);
    modalRight.appendChild(modalDescription);
    modalRight.appendChild(studentsContainer);
    modalRight.appendChild(downloadButton);

    //modalBody.appendChild(modalLeft);
    modalBody.appendChild(modalRight);

    modalContent.appendChild(fecharButton);
    modalContent.appendChild(modalBody);

    modal.appendChild(modalContent);
    modalWindow.appendChild(modal);

    document.body.appendChild(modalWindow); // Adiciona o modal ao body da página
}

function abrirModal(projeto) {
    const modal = document.getElementById('modal-window');
    
    // Preencher o conteúdo do modal com base nos dados do projeto
    modal.querySelector(".modal-right h1").textContent = projeto.nome;
    modal.querySelector(".modal-right p").textContent = projeto.descricao;

    // Atualiza os alunos
    const alunosContainer = modal.querySelector(".students");
    alunosContainer.innerHTML = ""; // Limpa os alunos anteriores

    // Adiciona alunos dinamicamente
    if (projeto.nome_aluno1) {
        const aluno1 = criarElementoAluno(projeto.img_aluno1, projeto.nome_aluno1);
        alunosContainer.appendChild(aluno1);
    }

    if (projeto.nome_aluno2 && projeto.nome_aluno2 !== "nulo") {
        const aluno2 = criarElementoAluno(projeto.img_aluno2, projeto.nome_aluno2);
        alunosContainer.appendChild(aluno2);
    }

    if (projeto.nome_aluno3 && projeto.nome_aluno3 !== "nulo") {
        const aluno3 = criarElementoAluno(projeto.img_aluno3, projeto.nome_aluno3);
        alunosContainer.appendChild(aluno3);
    }

    const downloadButton = modal.querySelector(".button-default");
    downloadButton.onclick = function () {
        window.location.href = projeto.download;
    }

    // Exibe o modal adicionando a classe 'abrir'
    modal.classList.add('abrir');

    // Evento para fechar o modal quando clicar no fundo ou no botão de fechar
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'fechar' || e.target.id === 'modal-window') {
            modal.classList.remove('abrir'); // Remove a classe 'abrir' para esconder o modal
        }
    });
}

// Função para criar o elemento de aluno
function criarElementoAluno(imagem, nome) {
    const alunoDiv = document.createElement("div");
    alunoDiv.classList.add("student");

    const imgAluno = document.createElement("img");
    imgAluno.src = imagem;
    imgAluno.alt = `Imagem do aluno ${nome}`;
    imgAluno.classList.add("student-img");

    const nomeAluno = document.createElement("span");
    nomeAluno.textContent = nome;

    alunoDiv.appendChild(imgAluno);
    alunoDiv.appendChild(nomeAluno);

    return alunoDiv;
}

// Criar o modal quando a página carregar
criarModal();

export default abrirModal;
