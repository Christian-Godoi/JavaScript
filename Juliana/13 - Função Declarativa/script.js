//Funções Declarativas 

let a = 5
let b = 10
console.log(a+b)

let c = 54
let d = 17
console.log(c+d)
console.log("--------------------------------------")

// function soma() {
//     let num1 = Number(prompt("Qual o primeiro número?"))
//     let num2 = Number(prompt("Qual o segundo número?"))
//     console.log(num1+num2)
// }

// soma() //chamando a função
// soma()
// soma()

function saudacao() {
    console.log("Bom dia")
}
saudacao()
console.log("--------------------------------------")

function inicializacao() {
    let nome = prompt("Qual o seu nome?")
    console.log("Bem vindo ao site",nome)
}
inicializacao()
console.log("--------------------------------------")

/*Uma escola solicitou um sistema de aprovação de alunos, crie uma função, peça duas notas para o usuário, calcule a média e se for igual ou maior a 7, mostre "Aprovado", senão, mostre "Reprovado". Chame a função duas vezes*/

function notas() {
    let n1 = Number(prompt("Qual foi sua primeira nota?"))
    let n2 = Number(prompt("E qual foi sua segunda nota?"))
    let media = (n1 + n2) / 2
    if (media >= 7) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}
notas()
notas()
console.log("--------------------------------------")

/*Foi solicitado um sistema para classificar a pontuação de um jogo. Crie uma função, pergunte a pontuação e se for maior ou igual a 3000, mostre "vencedor", se for maior que 2200, mostre "segundo lugar", se for maior ou igual a 1800, mostre "terceiro lugar", senão mostre, "não foi dessa vez"*/

function pontuacao() {
 let numero = Number(prompt("Qual foi a sua pontuação?"))
 if (numero >= 3000) {
    console.log("Vencedor")
 } else if (numero > 2200) {
    console.log("Segundo lugar")
 } else if(numero >= 1800) {
    console.log("Terceiro lugar")
 } else {
    console.log("Não foi dessa vez")
 }
}
pontuacao()