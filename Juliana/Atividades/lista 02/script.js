//1

let n1 = 10
let n2 = 20
console.log(n1 > n2)
console.log(n1 <= n2)
console.log(n1 == n2)

//2

let idade = Number(prompt("Qual a sua idade?"))
console.log(idade >= 16)

//3

let idade2 = Number(prompt("Qual a sua idade?"))
console.log(idade2 >= 18)
console.log(idade2 >= 60)

//4

let login = prompt("Digite seu login: ")
console.log(login == "admin")

//5
let saldo = Number(prompt("Qual o saldo da conta?"))
let saque = Number(prompt("e o valor disponível para saque?"))
console.log(saldo >= saque)
console.log(saldo > 100)

//6

let nota1 = Number(prompt("Qual a primeira nota?"))
let nota2 = Number(prompt("Qual a segunda nota?"))
let media = (nota1 + nota2) / 2
console.log(media >= 6)

//7

let produto = Number(prompt("Qual o valor do produto?"))
console.log(produto > 50)
console.log(produto <= 20)

//8

let velocidade = Number(prompt("Qual a velocidade do carro?"))
console.log(velocidade > 80)
console.log(velocidade > 120)

//9 

let altura = Number(prompt("Qual a sua altura?"))
console.log(altura >= 1.40)

//10

let nome = prompt("Qual o seu nome? ")
console.log(nome == "Maria")
console.log(nome == "João")

//11

let senha = Number(prompt("Qual a senha?"))
console.log(senha == "1234")

//12

let valorCompra = Number(prompt("Qual o valor da compra? "))
let parcela = Number(prompt("Qual o valor da parcela?"))
let total = valorCompra / parcela
console.log(total <= 200)

//13

let idade3 = Number(prompt("Qual a sua idade? ")) 
let meses = idade3 * 12
console.log(meses >= 200)


