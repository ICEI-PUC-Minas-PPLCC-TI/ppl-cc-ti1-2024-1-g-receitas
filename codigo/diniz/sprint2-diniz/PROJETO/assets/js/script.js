const button = document.getElementById('cozinhar');

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("cozinhar"); 
    var receitasContainer = document.getElementById("receitas");

    button.addEventListener('click', function() {
        
        var confirmacao = confirm("Nenhum ingrediente adicionado, deseja continuar?");

        if (confirmacao) {

        fetch('https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas')
            .then(response => response.json()) 
            .then(data => {
                

                data.forEach(receita => {
                    var caixaReceita = document.createElement("a");
                    caixaReceita.classList.add("caixa-receita");
                    // caixaReceita.href = ""

                    var imagemReceita = document.createElement("img");
                    imagemReceita.src = receita.imagem;
                    imagemReceita.classList.add("imagem-receita");
                    

                    var nomeReceita = document.createElement("h4");
                    nomeReceita.textContent = receita.nome;
                    nomeReceita.classList.add("nome-receita");

                    caixaReceita.appendChild(imagemReceita);
                    caixaReceita.appendChild(nomeReceita);
                    receitasContainer.appendChild(caixaReceita);
                });
            })
            .catch(error => {
                console.error('Erro ao carregar os dados:', error);
            });
        } 
    });
});