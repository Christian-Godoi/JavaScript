//1

function converter(){
    let texto = document.getElementById("texto").value
    let mn= document.getElementById("mn")
    mn.innerText = texto.toLowerCase()
}

//2

function contarLetras(){
    let texto2 = document.getElementById("texto2").value
    let letras = document.getElementById("letras")
    letras.innerText = texto2.length 
}

//3

function ultimaLetra(){
    let texto3 = document.getElementById("texto3").value
    let final =document.getElementById("final")
    final.innerText = texto3 [texto3.length-1]
}

//4

function quatroLetras() {
    let texto4 = document.getElementById("texto4").value
    let final2 = document.getElementById("final2")
    final2.innerText = texto4.slice(0,4)
}
//5

function tresUltimasLetras(){
    let texto5 = document.getElementById("texto5").value
    let inicio =document.getElementById("inicio")
    inicio.innerText = texto5 [texto5.length-3] + texto5 [texto5.length-2] + texto5 [texto5.length-1]
}

//6

function juntar(){
    let palavra1 = document.getElementById("palavra1").value;
    let palavra2 = document.getElementById("palavra2").value;
    let juntos = document.getElementById("juntos");
    juntos.innerText = palavra1 + " " + palavra2;
    document.getElementById("palavra1").value 
    document.getElementById("palavra2").value 
}

//7

function primeiraLetra() {
    let texto7 = document.getElementById("texto7").value
    let final3 = document.getElementById("final3")
    final3.innerText = "A primeira letra do seu nome é " + texto7[0]
}

//8

function completo() {
    let texto8 = document.getElementById("texto8").value
     let ms= document.getElementById("ms")
    ms.innerText = "Olá, " + texto8.toUpperCase() + "! Seja bem-vindo(a) ao sistema"
}

//9

let resultado = document.getElementById("resultado")
function verificar() {
    let texto9 = document.getElementById("texto9").value
    if (texto9.length <= 5){
    resultado.innerText = "Nome curto"
    } else {
    resultado.innerText = "Nome longo"
    }
}

