const lvlIpt = document.querySelector('#lvl');
const nomeIpt = document.querySelector("#nome")
const loginIpt = document.querySelector("#login")
const emailIpt = document.querySelector("#email")
const bioIpt = document.querySelector("#bio")
const saveBtn = document.querySelector(".save")

const lvl = document.querySelector(".LVL")
const nome = document.querySelector(".nome")
const login = document.querySelector(".login")
const email = document.querySelector(".email")
const bio = document.querySelector(".bio")

function carregarPerfil() {
    fetch("https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/usuarios/1").then((res) => {
        return res.json()
    }).then((data) => {
        nome.textContent = data.nome
        login.textContent = data.login
        email.textContent = data.email
        bio.textContent = data.bio
    })
}

window.onload = carregarPerfil

saveBtn.onclick = async () => {
    console.log("akdhsakjd");
    if(nomeIpt.value.trim() === "" || loginIpt.value.trim() === "" || emailIpt.value.trim() === "" || bioIpt.value.trim() === "") {
        return;
    }

    fetch("https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/usuarios/1", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify({
            nome: nomeIpt.value,
            login: loginIpt.value,
            email: emailIpt.value,
            bio: bioIpt.value
        }),
    }).then(() => {
        carregarPerfil()
    }).catch((err) => {
        alert(err)
    })
}


fetch("https://d2c501fa-4177-4d7b-a69b-81eb77e71b05-00-1wjvhqjrblfl5.kirk.replit.dev/feitos")
    .then(res => res.json())
    .then(feitos => {
        let nivel = Math.floor(feitos.length / 3) + 1;
        lvl.textContent = `LVL ${nivel}`;
    })
    .catch(err => {
        console.error('Erro ao carregar feitos: ', err);
    });