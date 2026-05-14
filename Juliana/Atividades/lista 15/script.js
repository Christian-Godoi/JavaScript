//1

let n1 = Number(prompt("Informe um número"))
let triplo = function(n1){
    return n1*3
}
console.log(triplo(n1))
console.log("--------------------------------")

//2

let n2 = Number(prompt("digite um número"))
let n3 = Number(prompt("Agora, digite outro número"))
let multiplicar = function(n2,n3){
    return n2*n3
}
console.log(multiplicar(n2,n3))
console.log("--------------------------------")

//3

let n4 = Number(prompt("Digite um número:"))
let metade = function(n4) {
    return n4/2
}
console.log(metade(n4))
console.log("--------------------------------")

//4

let n5 = Number(prompt("Digite um número:"))
let sucessor = function(n5){
    return n5 + 1
}
console.log(sucessor(n5))
console.log("--------------------------------")

//5

let n6 = Number(prompt("Digite um número:"))
let n7 = Number(prompt("Digite um número:"))
let maiorNumero = function(n6,n7){
    if(n6 > n7) {
        return "O primeiro é maior"
    } else if (n7 > n6) {
        return "O segundo número é maior"
    } else {
        return "Numéro inválido"
    }
}
console.log(maiorNumero(n6,n7))
console.log("--------------------------------")

//7

let n8 = Number(prompt("Iforme um número:"))
let parOuImpar = function(n8) {
    if (n8 % 2 == 0) {
    return "Par"
} else {
    return "Ímpar"
}
}
console.log(parOuImpar(n8))
console.log("---------------------------------------------")

//8

let n9 = Number(prompt("Iforme um número:"))
let n10 = Number(prompt("Iforme um número:"))
let n11 = Number(prompt("Iforme um número:"))
let media = function(n9,n10,n11){
    return (n9,n10,n11) /3
}
console.log(media(n9,n10,n11))
console.log("---------------------------------------------")

//9

let desconto = Number(prompt("Digite o valor do produto:"))
let calcularDesconto = function(desconto){
    return desconto*0.15
}
console.log(calcularDesconto(desconto))
console.log("---------------------------------------------")

//10

let nota1 = Number(prompt("Qual foi a sua primeira nota?"))
let nota2 = Number(prompt("E qual a segunda nota?"))
let verificarAprovacao = function(nota1,nota2){
    let media = (nota1+nota2) /2 
    if (media >= 7){
        return "Aprovado"
    } else if (media >= 5 && media < 7) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}
console.log(verificarAprovacao(nota1,nota2))

