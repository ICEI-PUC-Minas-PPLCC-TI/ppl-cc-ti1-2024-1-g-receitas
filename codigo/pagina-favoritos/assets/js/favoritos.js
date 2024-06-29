//inicio index.html//

document.addEventListener("DOMContentLoaded", function () {
  const listaReceitas = document.getElementById("listaReceitas");

  function carregarReceitas() {
    fetch(
      "https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/favoritos?_expand=receitas"
    )
      .then((response) => response.json())
      .then((data) => {
        const favoritos = data
          .filter((item) => item.usuariosId == "1")
          .map((item) => {
            return {
              receita: item.receitas,
              id: item.id,
            };
          });
        mostraReceitas(favoritos);
      });
  }

  function mostraReceitas(favoritos) {
    console.log(favoritos);
    listaReceitas.innerHTML = "";
    favoritos.forEach((favorito) => {
      const receitasDiv = document.createElement("div");
      receitasDiv.className = "receita";
      receitasDiv.dataset.id = favorito.receita.id;
      receitasDiv.innerHTML = `<a href="/codigo/pagina-receita/pagReceita.html?id=${favorito.receita.id}"><img src="${favorito.receita.imagem}" /> <h3>${favorito.receita.nome}</h3></a> <button data-id="${favorito.id}" class="fav-btn"><i class="ph ph-trash fav-btn"></i></button>`;
      listaReceitas.appendChild(receitasDiv);
    });
  }

  document.body.addEventListener("click", function (event) {
    if (
      event.target.classList.contains("fav-btn") ||
      event.target.closest(".fav-btn")
    ) {
      var confirmacao = confirm("Deseja desfavoritar essa receita?");
      if (confirmacao) {
        const button = event.target.closest("button.fav-btn");
        const favoritoId = button.dataset.id;
        fetch(
          `https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/favoritos/${favoritoId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then(() => {
            carregarReceitas();
          })
          .catch((error) => {
            console.error("Erro ao excluir favorito", error);
          });
      }
    }
  });

  carregarReceitas();
});


