const button = document.getElementById('cozinhar');

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("cozinhar"); 
    var receitasContainer = document.getElementById("receitas");

    button.addEventListener('click', function() {
        const ingredientes = JSON.parse(localStorage.getItem("ingredientes")) || [];
        
        let confirmacao;
        if (ingredientes.length === 0) {
            confirmacao = confirm("Nenhum ingrediente adicionado, deseja continuar?");
        } else {
            confirmacao = confirm(`Você adicionou ${ingredientes.length} ingredientes, deseja continuar?`);
        }

        if (confirmacao) {
            fetch('https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas')
                .then(response => response.json()) 
                .then(data => {
                    const receitasFiltradas = data.filter(receita => {
                        return ingredientes.every(ingrediente => 
                            receita.ingredientes.some(item => item.ingrediente === ingrediente)
                        );
                    });

                    receitasContainer.innerHTML = ''; 

                    receitasFiltradas.forEach(receita => {
                        const receitasDiv = document.createElement('div');
                        receitasDiv.className = 'receita';
                        receitasDiv.innerHTML = `
                            <a href="/codigo/pagina-receita/pagReceita.html?id=${receita.id}" class="caixa-receita"> 
                                <img src="${receita.imagem}" class="imagem-receita"/>
                                <h4 class="nome-receita">${receita.nome}</h4>
                            </a>     
                        `;
                        receitasContainer.appendChild(receitasDiv);
                    });
                })
                .catch(error => {
                    console.error('Erro ao carregar os dados:', error);
                });
        } 
    });
});