let nome = "Christian"

let maiuscula=nome.toUpperCase()
let minuscula= nome.toLowerCase()

console.log(minuscula)
console.log(maiuscula)
console.log(nome[0])

function mostrar(){
    let texto = document.getElementById("texto").value
    let mn= document.getElementById("mn")
    let ms= document.getElementById("ms")
    let letras = document.getElementById("letras")

    ms.innerText = texto.toUpperCase()
    mn.innerText = texto.toLowerCase()
    letras.innerText = texto.length 
        let texto2 = document.getElementById("texto").value
        texto2.value = "" //apaga o que está escrito no input
}

//--------------------------


function parte(){
    let palavra = document.getElementById("palavra").value
    let resultado = document.getElementById("resultado")
    let parte = palavra.slice(0,3)
    resultado.innerText = parte


    
let final =document.getElementById("final")
let letra = final.length


final.innerText = palavra [palavra.length-1]

}

// Crie dois inputs cada um pedindo uma palavra para o usuário , crie um botão "juntar" que mostre-as duas palavras juntas 

function juntar(){
    let palavra1 = document.getElementById("palavra1").value;
    let palavra2 = document.getElementById("palavra2").value;
    let juntos = document.getElementById("juntos");
    juntos.innerText = palavra1 + " " + palavra2;
    document.getElementById("palavra1").value 
    document.getElementById("palavra2").value 
}