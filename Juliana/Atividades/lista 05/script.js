//1

let nota = Number(prompt("Qual a sua nota?"))
if (nota >= 9) {
    console.log("Excelente")
} else if (nota >= 7) {
    console.log("Bom")
} else if (nota >= 5) {
    console.log("Regular")
} else{
    console.log("Insuficiente")
}
console.log("--------------------------------------------")

//2

let nota2 = Number(prompt("Qual foi a sua nota?"))
let faltas = Number(prompt("Qual foi a sua quantidade de faltas?"))


if (nota2 >= 7 && faltas <= 10) {
    console.log("Aprovado")
} else if (nota2 >= 5 && faltas <= 10) {
    console.log("Recuperação")
} else{
    console.log("Reprovado")
}
console.log("--------------------------------------------")

//3

let idade = Number(prompt("Qual a sua idade?"))
if (idade >= 0 && idade <= 12) {
    console.log("Criança")
} else if (idade >12 && idade <= 17) {
    console.log("Adulto")
} else if (idade > 18 && idade <= 59){
    console.log("Adulto")
} else if (idade > 60 && idade <=110) {
    console.log("Idoso")
} else {
    console.log("Idade inválida")
}
console.log("--------------------------------------------")

//4
let temp = Number(prompt("Qual a temperatura?"))

if (temp >= 35) {
    console.log("Muito quente")
} else if (temp >= 25) {
    console.log("Quente")
} else if (temp >= 15){
    console.log("Agradável")
} else {
    console.log("Frio")
}
console.log("--------------------------------------------")

//5

let valor = Number(prompt("Qual foi o valor da compra"))

if (valor >= 500) {
    desconto = 500 * 20 / 100
    console.log("Com o desconto de 20%, sua compra ficou em R$ ", desconto)
} else if (valor >= 300){
    desconto2 = 300 * 15 / 100
    console.log("Com o desconto de 15%, sua compra ficou em R$ ", desconto2)
} else if (valor >= 100){
    desconto3 = 300 * 10 / 100
    console.log("Com o desconto de 10%, sua compra ficou em R$ ", desconto3)
} else{
    console.log("Sem desconto")
}
console.log("--------------------------------------------")

//6

let velocidade = Number(prompt("Qual a velocidade do veículo?"))

if (velocidade <=60 ){
    console.log("Dentro do limite")
} else if (velocidade <= 80) {
    console.log("Atenção")
} else if (velocidade <= 100) {
    console.log("Multa leve")
} else{
    console.log("Multa grave")
}
console.log("--------------------------------------------")

//7

let turno = prompt("QUal o seu turno?")

if (turno == "M") {
    console.log("Matutino")
} else if (turno == "V") {
    console.log("Vespertino")
} else if (turno == "N") {
    console.log("Noturno")
} else {
    console.log("Turno inválido.")
}
console.log("--------------------------------------------")

//8

let imc = Number(prompt("Qual o seu IMC?"))

if (imc <= 18.5){
    console.log("Abaixo do peso")
} else if (imc <= 25) {
    console.log("Peso normal")
} else if (imc <= 30) {
    console.log("Sobrepeso")
} else {
    console.log("Seu imc pode estar calculado errado!")
}
console.log("--------------------------------------------")

//9

let pontos = Number(prompt("Qual foi a sua pontuação?"))

if (pontos >= 1000) {
    console.log("Nível Mestre")
} else if (pontos >= 700) {
    console.log("Nível Avançado")
} else if(pontos >= 400) {
    console.log("Nível Intermediário")
} else {
    console.log("Iniciante")
}
console.log("--------------------------------------------")

//10

let hora = Number(prompt("Qual a hora?"))

if (hora >= 6 && hora <= 11) {
    console.log("Bom dia")
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde")
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite")
} else if (hora >= 0 && hora <= 5) {
    console.log("Boa madrugada")
} else {
    console.log("Horário inesistente")
}
console.log("--------------------------------------------")

//11

let codigo = Number(prompt("Qual o código do produto?"))

if (codigo == 1) {
    console.log("Alimento")
} else if (codigo == 2) {
    console.log("Eletrônico")
} else if (codigo == 3){
    console.log("Roupas")
} else if (codigo == 4) {
    console.log("Livros")
} else {
    console.log("Categoria Inválida")
}
console.log("--------------------------------------------")

//12

let saldo = Number(prompt("Qual o seu saldo?"))

if (saldo >= 2000) {
    console.log("Ótima")
} else if (saldo >= 1000) {
    console.log("Boa")
} else if (saldo >= 0) {
    console.log("Regular")
} else {
    console.log("Endividado")
}
console.log("--------------------------------------------")

//13

let idade2 = Number(prompt("Qual a sua idade?"))

if (idade2 < 18) {
    console.log("Não pode dirigir ")
} else if (idade2 >= 18 && idade < 65) {
    console.log("Pode dirigir")
} else if (idade2 >= 65) {
    console.log("Renovação especial")
} else {
    console.log("Idade inválida")
}
console.log("--------------------------------------------")

//14

let nota3 = Number(prompt("Qual foi a sua nota?"))

if (nota3 >= 9) {
    console.log("Excelente")
} else if (nota3 >= 7) {
    console.log("Bom")
} else if (nota3 >= 5) {
    console.log("Regular")
} else {
    console.log("Ruim")
}