//1

let n1 = 1 
do {
    console.log(n1)
    n1++
} while (n1 <=10)
console.log("--------------------------------")

//2

let resposta
 do {
     resposta = prompt("Deseja continuar? (s ou n)")
 } while (resposta != "n")
console.log("--------------------------------")

//3

let contador = 1
let n2 = Number(prompt("Informe um número: "))
do {
    console.log(contador)
    contador++
} while(contador <= n2)
console.log("--------------------------------")

//4

let contador2 = 1
do {
    console.log(contador2)
      contador2+= 2
} while(contador2 <= 31)
console.log("----------------")

//5

let n3 
let contador3 = 1
do{
    n3 = Number(prompt("Digite um número"))
    if( n3 > 0) {
        console.log("Número positivo")
    } else if (n3 < 0) {
        console.log("Número negativo")
    } else {
        console.log("O número é zero")
    }
    contador3++
} while (contador3 <= 5)
console.log("--------------------------------")

//6

let resposta2;

do {
    resposta2 = prompt("Você deseja fazer uma conta? (s ou n)");

    if (resposta2 === "s") {

        let numero1 = Number(prompt("Digite o primeiro número:"));
        let numero2 = Number(prompt("Digite o segundo número:"));
        let soma = numero1 + numero2;
        console.log("A soma desses números é: " + soma);
    }
} while (resposta == "s");
console.log("Programa encerrado...");
console.log("--------------------------------")

//7

let n4 = 1 
do {
    console.log("Estudando JavaScript")
    n4++
} while (n4 <=10)
console.log("--------------------------------")

//8

let n5
let contador4 = 1
do {
    n5 = Number(prompt("Digite um número:"))
    contador4++
} while (n5 <= 0)
console.log("-------------------------------------")

//9

let senha 
do{
    senha = prompt("Digite sua senha")
} while(senha != "senai2026")
console.log("Acesso liberado!") 

//10

let total = 0
let numero
let resposta3

do {
    numero = Number(prompt("Digite um número inteiro:"))
    total += numero
    resposta = prompt("Deseja continuar? (s ou n)")
} while (resposta3 == "s")

console.log("A soma total é: " + total)
