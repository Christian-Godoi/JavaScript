//1

let n1 = Number(prompt("Digite um número qualquer"))
let dobro = (n1) => {
return n1*2
}
console.log(dobro(n1))
console.log("---------------------------------------")

//2

let n3 = Number(prompt("Informe um número"))
let n4 = Number(prompt("Informe outro número"))
let somar = (n3,n4) => {
    return n3+n4 
}
console.log(somar(n3,n4))
console.log("---------------------------------------")

//3

let n2 = Number(prompt("Informe um número:"))
let quadrado = (n2) =>{
    return n2*n2
}
console.log(quadrado(n2))
console.log("---------------------------------------")

//4

let n5 = Number("Digite um número aleatório")
let sucessor = (n5) => {
    return n5 + 1
}
console.log(sucessor(n5))
console.log("---------------------------------------")

//5

let num1 = Number(prompt("Escreva um número qualquer"))
let num2 = Number(prompt("Escreva mais um número qualquer"))
let maiorNumero = (num1,num2) => {
    if (num1 > num2)
        return "O primeiro número digitado é maior"
    else if (num2 > num1) {
        return "O segundo número é maior"
    }
    else{
        return "Valor inválido"
    }
}
console.log(maiorNumero(num1,num2))
console.log("---------------------------------------")

//6

let num = Number(prompt("Em qual número você está pensando?"))
let ParOuImpar = (num) =>{
    let aux = num % 2
    if (aux ==0) 
        return "Ele é par"
    else {
        return "Ele é ímpar"
    }
}
console.log(ParOuImpar(num))
console.log("-----------------------------------------------")

//7

let numero = Number(prompt("Digite um número totalmente aleatório"))
let verificarNumero = (numero) => {
if (numero > 0 ) {
    return "O número é positivo" }
else if (numero < 0) {
    return "O número é negativo"}
else{
    return "O número é zero"
}
}
console.log(verificarNumero(numero))
console.log("-----------------------------------------------")

//8

let numero2 = Number(prompt("Coloque um número abaixo"))
let numero3 = Number(prompt("Coloque outro número abaixo"))
let numero4 = Number(prompt("Coloque mais um número abaixo"))
let media = (numero2,numero3,numero4) => {
    let media2 = (numero2 + numero3 + numero4) / 3
    return media2
}
console.log(media(numero2,numero3,numero4))
console.log("-----------------------------------------------")

//9

let produto = Number(prompt("Qual o valor do produto?"))
let calcularDesconto = (produto) => {
    let precoFinal = produto - (produto * 0.20) 
    return "O valor com desconto é de: " + precoFinal + " R$"
}
console.log(calcularDesconto(produto))
console.log("-----------------------------------------------")

//10

let nota1 = Number(prompt("Digite sua primeira nota"))
let nota2 = Number(prompt("Digite agora sua segunda nota"))
let verificarAprovacao = (nota1,nota2) => {
    let media = (nota1 + nota2) /2
    if (media >= 7){
        return "Aprovado"
    } else if (media >= 5 && media < 7) {
        return "Recuperação"
    } else if (media < 5){
       return "Reprovado"
    } else {
        return "Nota inválida"
    }
}
console.log(verificarAprovacao(nota1,nota2))
