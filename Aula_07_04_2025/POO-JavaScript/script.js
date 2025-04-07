// Classe Pessoa
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método para exibir informações formatadas
    descricao() {
        return `${this.nome} - ${this.idade} anos`;
    }
}

// Classe para Gerenciar Pessoas no DOM
class GerenciadorPessoas {
    constructor() {
        this.pessoas = []; // Array para armazenar objetos Pessoa
    }

    // Método para adicionar uma nova pessoa
    adicionar(nome, idade) {
        if (nome === "" || idade === "") {
            alert("Preencha todos os campos!");
            return;
        }

        const novaPessoa = new Pessoa(nome, idade);
        this.pessoas.push(novaPessoa); // Adiciona a pessoa no array
        this.atualizarDOM();
    }

    // Método para atualizar a lista de pessoas no DOM
    atualizarDOM() {
        const lista = document.getElementById("listaPessoas");
        lista.innerHTML = ""; // Limpa a lista antes de recriar

        this.pessoas.forEach((pessoa, index) => {
            const li = document.createElement("li");
            li.textContent = pessoa.descricao();

            // Botão para remover pessoa
            const botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = () => this.remover(index);

            li.appendChild(botaoRemover);
            lista.appendChild(li);
        });
    }

    // Método para remover uma pessoa pelo índice
    remover(index) {
        this.pessoas.splice(index, 1);
        this.atualizarDOM();
    }
}

// Criamos uma instância do Gerenciador de Pessoas
const gerenciador = new GerenciadorPessoas();

// Função para capturar os valores e adicionar uma nova pessoa
function adicionarPessoa() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    gerenciador.adicionar(nome, idade);

    // Limpa os campos após adicionar
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}
