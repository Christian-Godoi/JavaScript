// Estrutura Condicional

let nota = 7
if(nota >= 7) {
    console.log("Aprovado")
} else{
    console.log("Reprovado")
}

console.log("------------------------------------------")
let idade =Number(prompt("Qual a sua idade?"))
if (idade >= 18) {
    console.log("Pode tirar a habilitação")
} else {
    console.log("Idade Insuficiente")
}

console.log("------------------------------------------")
let salario = Number(prompt("Qual o seu salário?"))
let anos = Number(prompt("Você trabalha na esmpresa a quantos anos?"))

if(salario <= 3000 && anos >= 2) {
console.log("Você terá um aumento")
} else {
    console.log("Ainda não")
}

console.log("------------------------------------------")
let chuva = false
if (chuva) {
    console.log("Leve um guarda-chuva")
} else {
    console.log("Não precisa levar guarda-chuva")
}

console.log("------------------------------------------")

/*Peça dois números para o usuário e veja se o primeiro é menor que os segundo, se sim mostre "o primeiro é menor", senão mostre "o segundo é menor ou eles são iguais" */

let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Agora, digite outro número"))

if (n1 < n2){
    console.log("O primeiro número é menor")
} else{
    console.log("O segundo é maior, ou eles são iguais")
}

console.log("------------------------------------------")

/*Peça um número para o usuário e diga se o número é impar ou par */


let n3 = Number(prompt("Digite um número:"))
let aux = n3 % 2
if (aux == 0) { //  if((numero % 2) == 0) , se colocar isso dentro da chave, funciona da mesma maneira
    console.log("O número é par")
} else {
    console.log("O número é impar")
}

console.log("------------------------------------------")

/*Uma loja da descontos para clientes com base no valor da compra, peça o valor da compra, se ele for maior ou igaul a R$ 250, de R$ 50 de desconto, e mostre o novo valor que será pago, senão, mostre apenas "sem descontos" */

let compra = Number(prompt("Qual o valor da compra?"))
if(compra >= 250) {
    desconto = compra - 50
    console.log("A compra com o desconto ficou em R$", desconto)
} else{
    console.log("Sem descontos")
}