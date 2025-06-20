const form = document.getElementById('user-form');
const userList = document.getElementById('user-list');

carregarUsuarios();

//função para carregar os usuários
function carregarUsuarios() {
    fetch('/api/users')
        .then(res => res.json())
        .then(data => {
            userList.innerHTML = '';
            data.forEach(user => {
                const li = document.createElement('li');
                li.innerHTML = `${user.nome} (${user.email})
                <button onclick="atualizarUsuario(${user.id})">Editar</button>
                <button onclick="excluirUsuario(${user.id})">Excluir</button>`;
                userList.appendChild(li);
            });
        })
};

//formulario de preenchimento dos dados da página index.html
form.addEventListener('submit', e => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    cadastrarUsuario(nome, email);
});

//função para cadastrar os usuários
function cadastrarUsuario(nome, email) {
    fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email })
    })
    .then(() => {
        form.reset();
        carregarUsuarios();
    })
}

//função para atualizar
function atualizarUsuario(id) {
    const nome = prompt('Digite o novo nome:');
    const email = prompt('Digite o novo email:');
    fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email })
    })
    .then(() => {
        carregarUsuarios();
    })
}

//função para excluir
function excluirUsuario(id) {
    const confirmacao = confirm('Tem certeza que deseja excluir este usuário?');

    if (!confirmacao) {
        return;
    }

    fetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        carregarUsuarios();
    })
}

