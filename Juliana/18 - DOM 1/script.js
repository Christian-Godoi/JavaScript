//script.js

let titulo = document.getElementById("titulo")
            //no HTML.pegue o elemento pelo id
function mudarTexto() {
titulo.innerText = "Você clicou no botão"
titulo.style.color = "blue"
}

//--------------------------------------------------

let mensagem = document.getElementById("mensagem")

function saudacao() {
    let nome = document.getElementById("nome").value
    mensagem.innerText = "Olá " + nome
}

//--------------------------------------------------

let texto = document.getElementById("texto")
function sumir() {
    if (texto.style.display == "none") {
        texto.style.display = "block"
    } else{
        texto.style.display = "none"
    }
}

/*Crie um texto e um botão no HTML, quando clicar no botão deve mudar a cor do texto para verde e a cor de fundo do texto para rosa*/

let mensagem2 = document.getElementById("mensagem2")
function mudarCor() {
    mensagem2.style.color = "green"
    mensagem2.style.backgroundColor = "pink"
}