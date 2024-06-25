var stars = document.querySelectorAll('.star-icon');
var selectedRating = 1;
var submitButton = document.getElementById('submit-btn');
var thankYouMessage = document.getElementById('thank-you-message');
var hasSubmitted = false; // Variável de controle para verificar se a avaliação já foi enviada

function saveEvaluation(rating) {
    fetch('https://sua-api.com/avaliacoes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating: rating }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao salvar avaliação');
        }
        console.log('Avaliação salva com sucesso na API!');
    })
    .catch(error => {
        console.error('Erro ao salvar a avaliação na API', error);
    });
}

stars.forEach(function(star, index) {
    var evaluationId = 'evaluation-' + (index + 1); // Criar ID único para cada avaliação
    star.setAttribute('id', evaluationId); // Definir ID para a estrela atual
    star.addEventListener('click', function(e) {
        if (!hasSubmitted) {
            var classStar = e.target.classList;
            if (!classStar.contains('ativo')) {
                stars.forEach(function(star) {
                    star.classList.remove('ativo');
                });
                classStar.add('ativo');
                selectedRating = e.target.getAttribute('data-avaliacao');
            }
        }
    });
});

submitButton.addEventListener('click', function() {
    if (!hasSubmitted) {
        console.log('A avaliação foi de ' + selectedRating + ' estrelas!');
        saveEvaluation(selectedRating); // Salvar a avaliação na API
        thankYouMessage.style.display = 'block';
        hasSubmitted = true; // Marcar que a avaliação foi enviada
        // Remover eventos de clique das estrelas e do botão de envio após a avaliação ser enviada
        stars.forEach(function(star) {
            star.removeEventListener('click', starClickHandler);
        });
        submitButton.removeEventListener('click');
    }
});