const receitasContainer = document.querySelector(".receitas")
const urlFetch = "https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas"
const filtro = "porçao"
let receitas = []

const loadData = async ()  => {
  const response = await fetch(urlFetch)
  const data = await response.json()

  receitas = data.filter(receita => {
    if(receita.filtro) {
      return receita.filtro.includes(filtro)
    }
  })

  receitas.forEach(receita => {
    receitasContainer.innerHTML += `
        <div class="receitas">
          <a href="/codigo/pagina-receita/pagReceita.html?id=${receita.id}" class="caixa-receita">
            <img src="${receita.imagem}" class="imagem-receita" alt="...">
              <h4 class="nome-receita">${receita.nome}</h4>
          </a>
        </div>
    `
  })
}

window.onload = loadData
