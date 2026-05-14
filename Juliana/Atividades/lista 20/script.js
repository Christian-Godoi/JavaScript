//1
let texto = document.getElementById("texto")
function troca(){
    texto.innerText = "Outro jeito"
}

//2
let cor = document.getElementById("cor")
let texto3 = document.getElementById("texto3")
cor.style.backgroundColor = "white"
texto3.addEventListener("click", function() {
    if (cor.style.backgroundColor == "white") {
        cor.style.backgroundColor = "black"
    } else {
    cor.style.backgroundColor = "white"

    }
})

//3

let clique = document.getElementById("clique")
let contador = document.getElementById("contador")
let contagem = 0
clique.addEventListener("click", function() {
    contagem++
    contador.innerText = contagem
})

//4

let botaoEsconder = document.getElementById("botaoEsconder")
let esconder = document.getElementById("esconder")

botaoEsconder.addEventListener("click", function() {
    if(esconder.style.display == "block") {
        esconder.style.display = "none"
    } else {
        esconder.style.display = "block"
    }
})




//5 
let espelho = document.getElementById("espelho")
let nome = document.getElementById("nome")
nome.addEventListener("input", function() {
    espelho.innerText = nome.value 
})

nome.addEventListener("focus", function(){
nome.style.outline = "none"
nome.style.border = "2px solid blue"
})
nome.addEventListener("blur", function() {
nome.style.border = "2px solid black"
})

//6

let espelho2 = document.getElementById("espelho2")
let nome2 = document.getElementById("nome2")
nome2.addEventListener("input", function() {
    let maiusculo = nome2.value
    espelho2.innerText = maiusculo.toUpperCase()
})

nome2.addEventListener("focus", function(){
    nome2.style.outline = "none"
    nome2.style.border = "2px solid blue"
})
nome2.addEventListener("blur", function() {
    nome2.style.border = "2px solid black"
})

//7 

let contarLetras = document.getElementById("contarLetras")
let palavra = document.getElementById("palavra")
palavra.addEventListener("input", function() {
    contarLetras.innerText ="Você digitou " + palavra.value.length + " caracteres"
})

//8

let validacao = document.getElementById("validacao")
let mensagem = document.getElementById("mensagem")

validacao.addEventListener("input", function() {
    if(validacao.value.length < 5){
        mensagem.innerText = "Texto muito curto"
    } else {
        mensagem.innerText = "Texto válido"
    }
})

//9

let mudar = document.getElementById("mudar")

mudar.addEventListener("mouseover", function() {
    mudar.style.color = "white"
    mudar.style.backgroundColor = "purple"
})

mudar.addEventListener("mouseout", function() {
    mudar.style.color = "black"
    mudar.style.backgroundColor = "white"
})

//10

let botaoMensagem = document.getElementById("botaoMensagem");
let mensagemEscondida = document.getElementById("mensagemEscondida");

botaoMensagem.addEventListener("mouseover", function(){
    mensagemEscondida.style.display = "block";
});

botaoMensagem.addEventListener("mouseout", function(){
    mensagemEscondida.style.display = "none";
});

//11

let titulo = document.getElementById("titulo")
titulo.addEventListener("mouseover", function(){
    titulo.innerText = "SÃO TRÊS PALAVRAS : AGORA SÃO SEIS (japones me copiou)"
})
titulo.addEventListener("mouseout", function() {
      titulo.innerText = "Texto inicial"
})

//12
let campoInterativo = document.getElementById("campoInterativo");
let espelhoInterativo = document.getElementById("espelhoInterativo");
let botaoLimpar = document.getElementById("botaoLimpar");

campoInterativo.addEventListener("input", function(){
    espelhoInterativo.innerText = campoInterativo.value;
});

campoInterativo.addEventListener("mouseover", function(){
    campoInterativo.style.color = "red";
});

campoInterativo.addEventListener("mouseout", function(){
    campoInterativo.style.color = "black";
});

botaoLimpar.addEventListener("click", function(){
    campoInterativo.value = "";
    espelhoInterativo.innerText = "";
});