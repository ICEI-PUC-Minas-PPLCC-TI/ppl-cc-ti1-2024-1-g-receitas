const receitasContainer = document.querySelector(".receitas")
const formNovaReceita = document.getElementById("novaReceita")
const urlFetch = "https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/novas_receitas"

let ingredientes = []
let filtros = []
let instrucoes = []

var nome = document.querySelector(".nome");
var tempo = document.querySelector(".tempo");
var rendimento = document.querySelector(".rendimento");
var dificuldade = document.querySelector(".dificuldade");

function adicionarBarra() {
  var ingrediente = document.querySelector(".ingd");
  var quantidade = document.querySelector(".qtd");
  const item = {
    ingrediente: ingrediente.value,
    quantidade: quantidade.value
  }
  ingredientes.push(item)
  ingrediente.value = ""
  quantidade.value = ""
}

function addfiltros() {
  var filtro = document.querySelector(".filtro");
  filtros.push(filtro.value)
  filtro.value = ""
}

function addmodo_preparo() {
  var instrucao = document.querySelector(".modo_preparo");
  instrucoes.push(instrucao.value)
  instrucao.value = ""
}

formNovaReceita.onsubmit = async (e) => {
  e.preventDefault()
  const update = {
    nome: nome.value,
    tempo: tempo.value,
    rendimento: rendimento.value,
    dificuldade: dificuldade.value,
    filtro: filtros,
    ingredientes,
    modo_preparo: instrucoes,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };
  
  fetch(urlFetch, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao cadastrar receita');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Aqui você pode exibir a resposta do servidor se precisar
      // Mostrar mensagem de sucesso
      const mensagem = document.createElement('p');
      mensagem.textContent = 'Receita cadastrada!';
      mensagem.classList.add('alert', 'alert-success'); // Adicione classes para estilizar a mensagem
      formNovaReceita.appendChild(mensagem); // Adiciona a mensagem após o formulário
      // Limpar campos do formulário (opcional)
      nome.value = '';
      tempo.value = '';
      rendimento.value = '';
      dificuldade.value = '';
      ingredientes = [];
      filtros = [];
      instrucoes = [];
    })
    .catch(error => {
      console.error('Erro ao cadastrar receita:', error);
      // Mostrar mensagem de erro (opcional)
      const mensagemErro = document.createElement('p');
      mensagemErro.textContent = 'Erro ao cadastrar receita. Por favor, tente novamente mais tarde.';
      mensagemErro.classList.add('alert', 'alert-danger'); // Adicione classes para estilizar a mensagem de erro
      formNovaReceita.appendChild(mensagemErro); // Adiciona a mensagem de erro após o formulário
    });
};