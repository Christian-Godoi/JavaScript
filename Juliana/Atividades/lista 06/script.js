//1

let idade = Number(prompt("Qual a sua idade?"))
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(resultado)
console.log("----------------------------------------------")

//2

let n1 = Number(prompt("Digite um número"))
let resultado2 = n1 > 0 ? "par" : n1 < 0 ? "ímpar" : "O número é zero"
console.log(resultado2)
console.log("----------------------------------------------")

//3

let nota = Number(prompt("Qual foi sua nota?"))
let resultado3 = nota >= 6 ? "Aprovado" : "Reprovado"
console.log(resultado3)
console.log("----------------------------------------------")

//4

let saldo = Number(prompt("Qual o saldo?"))
let resultado4 = saldo > 0 ? "Saldo positivo" : "Saldo negativo"
console.log(resultado4)
console.log("----------------------------------------------")

//5

let valorCompra = Number(prompt("Qual o valor da compra?"))
desconto = valorCompra * 10 / 100
let resultado5 = valorCompra >= 100 ? "O valor com o desconto é de R$" + desconto : "Você não receberá desconto"
console.log(resultado5)
console.log("----------------------------------------------")

//6

let idade2 = Number(prompt("Qual a sua idade?"))
let resultado6 = idade2 >= 18 ? "Entrada permitida" : "Entrada proibida"
console.log(resultado6)
console.log("----------------------------------------------")

//7

let usuario = prompt("Qual o seu nome de usuário?")
let resultado7 = usuario == "admin" ? "Acesso liberado" : "Acesso negado"
console.log(resultado7)
console.log("----------------------------------------------")

//8

let temp = Number(prompt("Qual a temperatura?"))
let resultado8 = temp > 30 ? "Está quente" : "Temperatura normal"
console.log(resultado8)
console.log("----------------------------------------------")

//9
console.log("----------------------------------------------")

let n2 = Number(prompt("Digite um número abaixo..."))
let resultado9 = n2 > 0 ? "O número é positivo" : "O número é negativo ou zero"
console.log(resultado9)
console.log("----------------------------------------------")

//10

let idade3 = Number(prompt("Qual a sua idade?"))
let resultado10 = idade3 < 12 ? "Criança" : idade3 < 18 ? "Adolescente" : idade3 < 60 ? "Adulto" : "Idoso"
console.log(resultado10)
console.log("----------------------------------------------")

//11

let velocidade = Number(prompt("Qual era sua velocidade nesse trecho?"))
let resultado11 = velocidade > 80 ? "Multado" : "Dentro do limite"
console.log(resultado11)
console.log("----------------------------------------------")

//12

let valorCartao = Number(prompt("Qual o valor da compra?"))
let limiteCartao = Number(prompt("Qual é o limite do cartão?"))
let resultado12 = limiteCartao >= valorCartao ? "Compra aprovada" : "Compra recusada"
console.log(resultado12)
console.log("----------------------------------------------")

//13

let pontuacao = Number(prompt("Qual foi a sua pontuação?"))
let resultado13 = pontuacao < 100 ? "Iniciante" : pontuacao < 500 ? "Intermediário" : pontuacao < 1000 ? "Avançado" : "Mestre"
console.log(resultado13)
console.log("----------------------------------------------")
