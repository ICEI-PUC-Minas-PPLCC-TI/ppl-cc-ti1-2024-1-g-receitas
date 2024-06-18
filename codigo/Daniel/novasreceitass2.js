const receitasContainer = document.querySelector(".novas_receitas");
const urlFetch = "https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/novas_receitas";
let receitas = [];

const loadData = async () => {
  const response = await fetch(urlFetch);
  const data = await response.json();
  receitas = data;

  renderRecipes();
};

const renderRecipes = () => {
  receitasContainer.innerHTML = "";
  receitas.forEach(receita => {
    receitasContainer.innerHTML += `
      <div class="col">
        <div class="card">
          <img src="${receita.imagem}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${receita.nome}</h5>
            <button onclick="deleteRecipe('${receita.id}')">excluir</button>
          </div>
        </div>
      </div>
    `;
  });
};

const deleteRecipe = async (id) => {
  try {
    const response = await fetch(`${urlFetch}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro ao excluir receita');
    }
    // Update local data after deletion
    receitas = receitas.filter(receita => receita.id !== id);
    renderRecipes(); // Update UI
  } catch (error) {
    console.error('Erro:', error);
  }
};

window.onload = loadData;
