document.addEventListener("DOMContentLoaded", function () {
  const receitaContainer = document.getElementById("pagReceita");

  function carregarReceita() {
      const receitaId = getReceitaIdFromURL();
      console.log(receitaId);
      fetch(`https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas/${receitaId}`)
          .then((response) => response.json())
          .then((data) => {
              mostraReceita(data);
              setFavoritoButtonListener(data.id);
              setFeitoButtonListener(data.id);
              setStarRatingListener();
          });
  }

  function mostraReceita(receita) {
      console.log(receita);
      receitaContainer.innerHTML = `
          <h2 class="receita-nome">${receita.nome}</h2>
          <div class="container-button">
            <button class="favorito-btn" data-id="${receita.id}">
                <i id="favoritoId-btn" class="ph ph-bookmark-simple"></i>
            </button>
            <button class="feito-btn" data-id="${receita.id}">
                <i id="feitoId-btn" class="ph ph-check"></i>   
            </button>
          </div>
          <ul class="avaliacao">
              <li class="star-icon ativo" data-avaliacao="1"></li>
              <li class="star-icon" data-avaliacao="2"></li>
              <li class="star-icon" data-avaliacao="3"></li>
              <li class="star-icon" data-avaliacao="4"></li>
              <li class="star-icon" data-avaliacao="5"></li>
          </ul>
          <img src="${receita.imagem}" class="receita-imagem"/>
          <p class="receita-descricao">${receita.tempo} - ${receita.rendimento} - ${receita.dificuldade}</p>
          <h3 class="titulo-ingredientes">Ingredientes:</h3>
          <ul class="receita-ingredientes">
              ${receita.ingredientes.map(ingrediente => `<li>${ingrediente.quantidade} ${ingrediente.ingrediente}</li>`).join("")}
          </ul>
          <h3 class="titulo-modo_preparo">Modo de Preparo:</h3>
          <ul class="receita-modo_preparo">
              ${receita.modo_preparo.map(passo => `<li>${passo}</li>`).join("")}
          </ul>
          <div class="comentarios">
              <h3 class="comentario">Comentários</h3>
              <form id="comentarioForm">
              <textarea id="comentarioTextarea" placeholder="Escreva um comentário..."></textarea>
              <button>Enviar</button>
              </form>
          </div>
      `;
  }

  function getReceitaIdFromURL() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("id");
  }

  function setFavoritoButtonListener(receitaId) {
      document.querySelector(".favorito-btn").addEventListener("click", function (event) {
          const button = event.target.closest(".favorito-btn");
          const receitasId = button.getAttribute("data-id");

          let jaFavoritado;

          fetch(`https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/favoritos?receitasId=${receitasId}&usuariosId=1`)
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
                          fetch(`https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/favoritos/${jaFavoritado.id}`, {
                              method: "DELETE",
                              headers: {
                                  "Content-Type": "application/json",
                              },
                          })
                              .then((res) => res.json())
                              .then(() => {
                                  button.classList.remove("favorito");
                              })
                              .catch((error) => {
                                  console.error("Erro na requisição", error);
                              });
                      } else {
                          fetch("https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/favoritos", {
                              method: "POST",
                              headers: {
                                  "Content-Type": "application/json",
                              },
                              body: JSON.stringify({ receitasId, usuariosId: "1" }),
                          })
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

  function setFeitoButtonListener(receitaId) {
    document.querySelector(".feito-btn").addEventListener("click", function (event) {
        const button = event.target.closest(".feito-btn");
        const receitasId = button.getAttribute("data-id");

        let jaFeito;

        fetch(`https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/feitos?receitasId=${receitasId}&usuariosId=1`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                return data[0];
            })
            .then((data) => {
                jaFeito = data;
                const mensagemConfirmacao = jaFeito
                    ? "Tem certeza que desmarcar como feita esta receita?"
                    : "Tem certeza que deseja marcar como feita esta receita?";

                if (confirm(mensagemConfirmacao)) {
                    if (jaFeito) {
                        console.log("ja feito");
                        fetch(`https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/feitos/${jaFeito.id}`, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        })
                            .then((res) => res.json())
                            .then(() => {
                                button.classList.remove("feito");
                            })
                            .catch((error) => {
                                console.error("Erro na requisição", error);
                            });
                    } else {
                        fetch("https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/feitos", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ receitasId, usuariosId: "1" }),
                        })
                            .then((response) => response.json())
                            .then(() => {
                                button.classList.add("feito");
                            })
                            .catch((error) => {
                                console.error("Erro na requisição", error);
                            });
                    }
                }
            });
    });
}

  function setStarRatingListener() {
      const stars = document.querySelectorAll(".star-icon");
      stars.forEach((star, index) => {
          star.addEventListener("click", () => {
              stars.forEach((s, i) => {
                  if (i <= index) {
                      s.classList.add("active");
                  } else {
                      s.classList.remove("active");
                  }
              });
          });
      });
  }

  carregarReceita();
});