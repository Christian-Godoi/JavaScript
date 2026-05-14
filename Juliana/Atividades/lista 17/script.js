//1

let titulo = document.getElementById("titulo")
function mudarTexto(){
    titulo.innerText = "Aprendendo DOM com JavaScript"
}

//2

let texto = document.getElementById("texto")
function entrar() {
    let nome = document.getElementById("nome").value
   texto.innerText = "Bem vindo ao sistema " + nome
}

//3
let texto2 = document.getElementById("texto2")
function mudarFrase() {
    if (texto2.style.display == "none") {
        texto2.style.display = "block"
    } else{
        texto2.style.display = "none"
    }
}

//4

let texto3 = document.getElementById("texto3")
function enviar(){
    let nome2 = document.getElementById("nome2").value
    if (nome2 == "") {
            texto3.innerText = "Digite um nome primeiro!"
    }else{
        texto3.innerText = "Olá " + nome2
    }
}

//5

const fundo = document.getElementById("fundo")
fundo.style.backgroundColor = "white"
function modoEscuro() {
   if (fundo.style.backgroundColor == "white"){
    fundo.style.backgroundColor = "black"
   } else{
    fundo.style.backgroundColor = "white"
   }

}

//6

let texto4 = document.getElementById("texto4")
function verificarNota(){
    let nome3 = document.getElementById("nome3").value
    if (nome3 >= 7) {
            texto4.innerText = "Aluno aprovado"
    }else{
        texto4.innerText = "Aluno Reprovado"
    }
}

//7

let texto5 = document.getElementById("texto5")
function surpresa(){
    texto5.innerText = "Você encontrou a mensagem secreta!"
}

//8

let texto6 = document.getElementById("texto6")
function destacar(){
    texto6.style.backgroundColor= "red"
    texto6.style.fontWeight= "bold"
    texto6.style.color = "white"
}

//9
let resultado = document.getElementById("resultado")
function verificacao() {
    let textoAleatorio = document.getElementById("textoAleatorio").value
    resultado.innerText = "Você digitou " + textoAleatorio.length + " caracteres"
}

//10

let texto7 = document.getElementById("texto7")
function mudarCor() {
    texto7.style.color = "blue"
}

//11

let texto8 = document.getElementById("texto8")
function esconderTexto() {
    if (texto8.style.display == "none") {
        texto8.style.display = "block"
    } else{
        texto8.style.display = "none"
    }
}

//12

let resultado12 = document.getElementById("resultado12")

function calcularMeses() {
    let idade = document.getElementById("idadeMeses").value
    let meses = idade * 12
    resultado12.innerText = "Você já viveu " + meses + " meses"
}


//13

let resultado13 = document.getElementById("resultado13")

function verificarIdade() {
    let idade = document.getElementById("idade13").value

    if(idade >= 18){
        resultado13.innerText = "Você é maior de idade"
    } else {
        resultado13.innerText = "Você é menor de idade"
    }
}


