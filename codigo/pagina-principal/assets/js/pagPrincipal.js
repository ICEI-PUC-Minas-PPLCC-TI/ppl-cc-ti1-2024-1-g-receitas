const url = "https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/receitas?_limit=5"
const carousel = document.querySelector(".carousel-inner")
let slideInterval;

async function carregarReceitas()
{
    const response = await fetch(url)
    const data = await response.json()

    data.forEach(receita => {
        carousel.innerHTML += `
            <div class="carousel-item">
            <a href="/codigo/pagina-receita/pagReceita.html?id=${receita.id}">
                <img src="${receita.imagem}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${receita.nome}</h5>
                </div>
            </a>
            </div>
        
        `
    })

    carousel.children[0].classList.add("active")

    // Start the slide interval
    slideInterval = setInterval(() => {
        const nextSlide = carousel.querySelector(".carousel-item.active").nextElementSibling || carousel.querySelector(".carousel-item:first-child");
        carousel.querySelector(".carousel-item.active").classList.remove("active");
        nextSlide.classList.add("active");
    }, 5000);
}

// Clear the interval when the window is closed
window.onbeforeunload = () => {
    clearInterval(slideInterval);
};

// Call the function when the window loads
window.onload = carregarReceitas;

