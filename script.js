const usuarios = [
  "Ana Beatriz",
  "Carlos Eduardo",
  "Mariana Costa",
  "Ricardo Oliveira",
  "Fernanda Lima",
  "Alice",
  "Bruno",
  "Caio",
  "Daniela",
  "Eduardo",
  "Felipe",
  "Gabriel",
  "Helena",
  "Isabela",
  "João"
];

listaUsuarios = document.getElementById('lista-usuarios');

function handleLoad(usuarios) {
    listaUsuarios.innerHTML = '';
    usuarios.forEach((nome, index) => {
        const novoElemento = document.createElement('li');
        novoElemento.classList.add('user-list');
        novoElemento.innerText = nome;
        listaUsuarios.appendChild(novoElemento);
    });
};

function handleSearch(usuarios) {
    listaUsuarios.innerHTML = '';
    usuarioPesquisado = document.getElementById('user').value;

    userEncontrado = false;

    for (let i = 0; i < usuarios.length; i++){

        const nome = usuarios[i];

        if (nome.toLowerCase().includes(usuarioPesquisado.toLowerCase())) {
            userEncontrado = true;
            const novoElemento = document.createElement('li');
            novoElemento.classList.add('user-list');
            novoElemento.innerText = nome;
            listaUsuarios.appendChild(novoElemento);
        }
    }

    if (!userEncontrado) {
        const erro = document.createElement('li');
        erro.classList.add('user-list');
        erro.innerText = "Nenhum nome encontrado.";
        listaUsuarios.appendChild(erro);
    }
};