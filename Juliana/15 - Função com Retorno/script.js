// //Função com Retorno

// function soma(n1, n2) {
//     let somar = n1 + n2
//     return somar
// }
// let n1 = 2
// let n2 = 5
// let resultado = soma(n1,n2)
// console.log(resultado)
// console.log("--------------------------------------------")

// //Dobro
// function dobro(numero) {
//     let aux = dobro * 2
//     return aux
// }
// let numero = Number(prompt("Escolha um número"))
// let mostrar = dobro(numero)
// console.log(mostrar)

// //Situação do aluno
// function aprovacao(nota1,nota2) {
//     let media = (nota1 + nota2) /2
//     if (media >= 7) {
//         return "Aprovado"
//     } else{
//         return "Reprovado"
//     }
// }
// let nota1 = Number(prompt("Qual a 1 nota"))
// let nota2 = Number(prompt("Qual a 2 nota")) 
// let situacao = aprovacao(nota1,nota2)
// console.log(situacao)

// //Maior número
// function maior(n1, n2) {
//     if(n1 > n2) {
//         return n1, "é maior que", n2
//     } else if (n2 > n1) {
//         return n2, "é maior que", n1
//     } else{
//         return "São iguais"
//     }
// }
// let num1= Number(prompt("Informe o 1º número"))
// let num2 = Number(prompt("Informe o 2º número"))
// let auxiliar = maior(num1,num2)
// console.log(auxiliar)

 
//Peça um número para o usuário e mostre o triplo dele

function triplo(numero) {
    let aux = numero * 3
    return aux
}
let numero = Number(prompt("Digite um número"))
let resultado = triplo(numero)
console.log(resultado)

//Uma escola faz uma competição de quem consegue pensar na maior palavra já criada. Faça uma função que pede uma palavra para o usuário, conte quantas  letras ela tem, se tiver mais de 10, diga "uau", senão, diga "tem palavras maiores"

function contar(palavra) {
    if(palavra.length > 10){
        return "UAU!!!!!!"
    } else{
        return "Tem palavras maiores"
    }

}
let palavra = prompt("QUal a maior palavra que você conhece?")
let letras = contar(palavra)
console.log(letras)
