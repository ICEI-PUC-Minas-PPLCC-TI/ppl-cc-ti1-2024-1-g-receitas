const formulario = document.querySelector(".main-content-ingrediente");
const ingredientes = document.querySelector(".ingredientes");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const input = formulario.querySelector("input");

  if (input.value.trim() !== '') {
    addIngrediente(input.value);
    input.value = "";
  }
});

function addIngrediente(nomeIngrediente) {

    ingredientes.innerHTML += `
    <div class="ingrediente">
        <p>${nomeIngrediente}</p>
            <i class="ph ph-trash lixo"></i>
    </div>
  `
}

ingredientes.addEventListener("click", function(event) {
  if(event.target.classList.contains("lixo")) {
    if (confirm("Deseja deletar o item?")) {
        event.target.parentNode.remove();
      }
  }
});