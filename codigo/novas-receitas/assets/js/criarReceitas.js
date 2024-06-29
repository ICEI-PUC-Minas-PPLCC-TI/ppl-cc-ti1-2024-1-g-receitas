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
let receitas = []

formNovaReceita.onsubmit = async (e) => {
  e.preventDefault()
  const update = {
    nome : nome.value,
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
  fetch('https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/novas_receitas', options)
    .then(data => {
      if (!data.ok) {
        throw Error(data.status);
      }
      return data.json();
    }).then(update => {
      console.log(update);
    }).catch(e => {
      console.log(e);
    });
}