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
      <div class="col">
        <a href="/codigo/pagina-receita/pagReceita.html?id=${receita.id}" class="card">
          <img src="${receita.imagem}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${receita.nome}</h5>
          </div>
        </a>
      </div>
    `
  })
}

window.onload = loadData
