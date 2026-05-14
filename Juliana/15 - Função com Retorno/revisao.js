//Revisão

// function saudacao() {
//     return "Bom dia " + nome
// }
// let nome = prompt("Qual seu nome?")
// let aux = saudacao(nome)
// console.log(aux)
// console.log(saudacao(nome)) // assim também funciona
console.log("--------------------------------------")


// let n1 = Number(prompt("Digite um número"))
// let n2 = Number(prompt("Digite outro número"))
// function soma (n1,n2) {
//     let resultado = n1 + n2
//     return resultado 
//     return n1 + n2 // assim dá também
// }
// console.log(soma(n1,n2))
console.log("--------------------------------------")


// Classificação de temperatura
let temperatura = Number(prompt("Qual é a temperatura agora?"))
function previsaoDoTempo(temperatura) {
    if (temperatura > 30) {
        return "Calor"
    } else if (temperatura < 12) {
        return "Frio"
    } else{
        return "Ok"
    }
}
console.log(previsaoDoTempo(temperatura))
console.log("--------------------------------------")

/*Pergunte um salário para o funcionário, se for menor que 2500 dê 500 reais de aumento e mostr o novo salário, senão, mostre "sem aumento" */

let salario = Number(prompt("Qual o valor do seu salário?"))
 
function SalarioMensal(salario) {
    if (salario < 2500) {
        return "Seu novo salário é " + (salario+500)
    } else{
        return "Sem aumento"
    }
}
console.log(SalarioMensal(salario))
console.log("--------------------------------------")

/*Peça um número para o usuário, e mostre uma porcentagem dele, se o número for menor ou igual a 100, mostre 10% do valor, se for menor ou igual a 1000, mostre 35% do valor, senão, mostre "sem porcentagem" */

let numero = Number(prompt("Digite um número"))

function porcentagem(numero) {
    if (numero <= 100) {
        return (numero*0.10)
    } else if (numero <=1000) {
        return (numero*0.35)
    } else{
        return "sem porcentagem"
    }
}
console.log(porcentagem(numero))

            
