document.addEventListener("DOMContentLoaded", function () {
    const receitaContainer = document.getElementById("pagReceita");
  
    function carregarReceita() {
      const receitaId = getReceitaIdFromURL();
      console.log(receitaId);
      fetch(
        `https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas/${receitaId}`
      )
        .then((response) => response.json())
        .then((data) => {
          mostraReceita(data);
          setFavoritoButtonListener(data.id);
        });
    }
  
    function mostraReceita(receita) {
      console.log(receita);
      receitaContainer.innerHTML = `
            <h2 class="receita-nome">${receita.nome}</h2>
            <button class="favorito-btn" data-id="${receita.id}">
                <i id="favoritoId-btn" class="ph ph-bookmark-simple"></i>
            </button>
            <img src="${receita.imagem}" class="receita-imagem"/>
            <p class="receita-descricao">${receita.tempo} - ${
        receita.rendimento
      } - ${receita.dificuldade}</p>
            <h3 class="titulo-ingredientes">Ingredientes:</h3>
            <ul class="receita-ingredientes">
                ${receita.ingredientes
                  .map(
                    (ingrediente) =>
                      `<li>${ingrediente.quantidade} ${ingrediente.ingrediente}</li>`
                  )
                  .join("")}
            </ul>
            <h3 class="titulo-modo_preparo">Modo de Preparo:</h3>
            <ul class="receita-modo_preparo">
                ${receita.modo_preparo
                  .map((passo) => `<li>${passo}</li>`)
                  .join("")}
            </ul>
        `;
    }
  
    function getReceitaIdFromURL() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("id");
    }
  
    function setFavoritoButtonListener(receitaId) {
      document
        .querySelector(".favorito-btn")
        .addEventListener("click", function (event) {
          const button = event.target.closest(".favorito-btn");
          const receitasId = button.getAttribute("data-id");
  
          let jaFavoritado;
  
          fetch(
            `https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/favoritos?receitasId=${receitasId}&usuariosId=1`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              return data[0];
            })
            .then((data) => {
              jaFavoritado = data;
              const mensagemConfirmacao = jaFavoritado
                ? "Tem certeza que deseja desfavoritar esta receita?"
                : "Tem certeza que deseja favoritar esta receita?";
  
              if (confirm(mensagemConfirmacao)) {
                if (jaFavoritado) {
                  console.log("ja favoritado");
                  fetch(
                    `https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/favoritos/${jaFavoritado.id}`,
                    {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  )
                    .then((res) => res.json())
                    .then(() => {
                      button.classList.remove("favorito");
                    })
                    .catch((error) => {
                      console.error("Erro na requisição", error);
                    });
                } else {
                  fetch(
                    "https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/favoritos",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ receitasId, usuariosId: "1" }),
                    }
                  )
                    .then((response) => response.json())
                    .then(() => {
                      button.classList.add("favorito");
                    })
                    .catch((error) => {
                      console.error("Erro na requisição", error);
                    });
                }
              }
            });
        });
    }
  
    carregarReceita();
  });
  