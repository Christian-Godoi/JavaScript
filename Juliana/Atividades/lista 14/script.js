//1

let n1 = Number(prompt("Digite um número"))

function dobro(n1) {
    return n1 * 2
}

console.log(dobro(n1))
console.log("---------------------------------------------")

//2

let n2 = Number(prompt("Informe um número:"))
let n3 = Number(prompt("Agora, informe outro número:"))

function somar(n2,n3) {
    return n2+n3
}
console.log(somar(n2,n3))
console.log("---------------------------------------------")

//3

let lado = Number(prompt("Qual o valor do lado desse quadrado?"))

function areaQuadrado(lado) {
    return lado * lado
}
console.log(areaQuadrado(lado))
console.log("---------------------------------------------")

//4

let num = Number(prompt("Por favor, informe um número"))

function antecessor(num) {
    return num - 1
}
console.log(antecessor(num))
console.log("---------------------------------------------")

//5

let palavra = prompt("Digite uma palavra aleatória")

function tamanhoTexto(palavra) {
    let palavra2 = palavra.length
    console.log(palavra.length)
    return palavra2
   
}
console.log(tamanhoTexto(palavra))
console.log("---------------------------------------------")

//6

let num1 = Number(prompt("Informe um número"))
let num2 = Number(prompt("Informe outro número"))

function maiorNumero(num1,num2) {
    if (num1 > num2){
        return "O primeiro número é maior"
    } else if (num2 > num1) {
        return "O segundo número é maior"
    } else {
        return "Os dois números são iguais"
    }
}
console.log(maiorNumero(num1,num2))
console.log("---------------------------------------------")

//7

let idade = Number(prompt("Qual a sua idade?"))

function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else if (idade < 18){
        return "Menor de idade"
    } else{
        return "Idade inválida"
    }
}
console.log(verificarIdade(idade))
console.log("---------------------------------------------")

//8
let numero = Number(prompt("Digite um número abaixo..."))

function parOuImpar(numero) {
if (numero % 2 == 0) {
    return "Par"
} else {
    return "Ímpar"
}
}
console.log(parOuImpar(numero))
console.log("---------------------------------------------")

//9

let num3 = Number(prompt("Informe um número"))
let num4 = Number(prompt("Informe outro número"))
let num5 = Number(prompt("Informe mais um número"))

function media(num3,num4,num5){
return (num3+num4+num5) /3
}
console.log(media(num3,num4,num5))
console.log("---------------------------------------------")


//10

let preco = Number(prompt("Qual foi o preço do produto?"))

function calcularDesconto(preco) {
    return preco * 0.1
}
console.log(calcularDesconto(preco))

