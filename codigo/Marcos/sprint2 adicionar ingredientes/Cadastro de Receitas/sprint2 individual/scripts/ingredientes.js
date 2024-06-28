const formulario = document.querySelector(".main-content-ingredientes");
const ingredientes = document.querySelector(".ingredientes");

document.addEventListener("DOMContentLoaded", function() {
  const savedIngredientes = JSON.parse(localStorage.getItem("ingredientes")) || [];
  savedIngredientes.forEach(addIngrediente);
});

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const input = formulario.querySelector("input");

  if (input.value.trim() !== '') {
    addIngrediente(input.value);
    saveIngrediente(input.value);
    input.value = "";
  }
});

function addIngrediente(nomeIngrediente) {
  ingredientes.innerHTML += `
    <div class="ingrediente">
        <p>${nomeIngrediente}</p>
        <i class="ph ph-trash lixo"></i>
    </div>
  `;
}

function saveIngrediente(nomeIngrediente) {
  const savedIngredientes = JSON.parse(localStorage.getItem("ingredientes")) || [];
  savedIngredientes.push(nomeIngrediente);
  localStorage.setItem("ingredientes", JSON.stringify(savedIngredientes));
}

ingredientes.addEventListener("click", function(event) {
  if(event.target.classList.contains("lixo")) {
    if (confirm("Deseja deletar o item?")) {
      const nomeIngrediente = event.target.previousElementSibling.textContent;
      removeIngrediente(nomeIngrediente);
      event.target.parentNode.remove();
    }
  }
});

function removeIngrediente(nomeIngrediente) {
  let savedIngredientes = JSON.parse(localStorage.getItem("ingredientes")) || [];
  savedIngredientes = savedIngredientes.filter(ingrediente => ingrediente !== nomeIngrediente);
  localStorage.setItem("ingredientes", JSON.stringify(savedIngredientes));
}