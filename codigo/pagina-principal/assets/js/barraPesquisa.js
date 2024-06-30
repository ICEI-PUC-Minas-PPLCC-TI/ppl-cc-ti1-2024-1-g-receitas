const urlR = `https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas`;

fetch(urlR)
    .then(res => res.json())
    .then((json) => {
        const ul = document.getElementById('listarReceitas');
        const maxResults = 10;
        let count = 0;

        json.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <a href="/codigo/pagina-receita/pagReceita.html?id=${item.id}">
                    <img width="50" src="${item.imagem}">
                    <span class="item-name">${item.nome}</span>
                </a>`;
            ul.appendChild(li);
            count++;

            
            if (count > maxResults) {
                li.style.display = "none";
            }
        });
    });

function filtrar() {
    var input,
        filter,
        ul,
        li,
        a,
        i,
        span,
        txtValue,
        count = 0;
    input = document.getElementById('inputBusca');
    ul = document.getElementById('listarReceitas');

    filter = input.value.toUpperCase();

    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && filter.length >= 2) {
            li[i].style.display = "";
            count++;
            span = li[i].querySelector(".item-name");
            if (span) {
                span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match) => {
                    return "<strong>" + match + "</strong>";
                });
            }

        } else {
            li[i].style.display = "none";
        }

        
        if (count > 10) {
            li[i].style.display = "none";
        }
    }

    if (count === 0) {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
}