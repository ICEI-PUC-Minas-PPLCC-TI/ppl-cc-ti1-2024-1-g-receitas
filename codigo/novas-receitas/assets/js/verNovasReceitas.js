const receitasContainer = document.querySelector(".receitas");
const urlFetch = "https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/novas_receitas";
let receitas = [];

const loadData = async () => {
  try {
    const response = await fetch(urlFetch);
    const data = await response.json();
    receitas = data;
    renderRecipes();
  } catch (error) {
    console.error('Erro ao carregar receitas:', error);
    alert('Erro ao carregar receitas. Por favor, tente novamente mais tarde.');
  }
};

const renderRecipes = () => {
  receitasContainer.innerHTML = "";
  receitas.forEach(receita => {
    const card = createRecipeCard(receita);
    receitasContainer.appendChild(card);
  });
};

const createRecipeCard = (receita) => {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('col');

  const card = document.createElement('div');
  card.classList.add('card', 'telacard');

  const link = document.createElement('a'); 
  link.href = `/codigo/pagina-receita/pagReceita.html?id=${receita.id}`; 
  link.classList.add('recipe-link');

  const img = document.createElement('img');
  img.src = receita.imagem;
  img.classList.add('card-img-top');
  img.alt = 'Imagem da receita';


  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h4');
  title.classList.add('card-title');
  title.textContent = receita.nome;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.classList.add('btn', 'btn-danger');
  deleteButton.onclick = () => deleteRecipe(receita.id);

  link.appendChild(img);
  link.appendChild(title);
  card.appendChild(link);

  card.appendChild(cardBody);
  
  cardBody.appendChild(deleteButton);
  cardDiv.appendChild(card);


  return cardDiv;
};

const deleteRecipe = async (id) => {
  try {
    const response = await fetch(`${urlFetch}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Erro ao excluir receita');
    }
    // Remove the recipe from the local data array
    receitas = receitas.filter(receita => receita.id !== id);
    // Remove the corresponding card from the UI
    renderRecipes();
  } catch (error) {
    alert('Erro ao excluir receita. Por favor, tente novamente mais tarde.');
    console.error('Erro:', error);
  }
};

window.onload = loadData;
