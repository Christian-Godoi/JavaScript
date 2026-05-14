//Operadores Aritméticos

let numero1 = 5
let numero2 = 7
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let divisao = numero1 / numero2
let multiplicacao = numero1 * numero2
let modulo = numero1 % numero2 //resto da divisão

console.log("A soma é: " + soma)
console.log("A subtração é: " + subtracao)
console.log("A divisão é: " + divisao)
console.log("A multiplicação é: " , multiplicacao)
console.log(`O resto da divisão é ${modulo}`) // outra forma de concatenar da versão atualizada

//incremento e decremento
let contador = 10
contador++ // +1
console.log(contador) //11
contador-- // -1
console.log(contador) 
contador +=5 // 15
contador -=2 //13


//-----------------------------------

let salario = Number(prompt("Qual seu salário? "))
let total = salario + 100
console.log(total)

/*Um grupo de amigos foi a um restaurante, no final eles decidiram dividir a conta. 
Faça um programa que peça a quantidade de amigos e o valor da compra e mostre quanto cada um deve pagar*/ 

let amigosQuantidade = Number(prompt("Qual a quantidade de amigos? "))
let valorConta = Number(prompt("Qual o valor total da conta? "))
let pagamento = valorConta / amigosQuantidade
console.log("cada amigo vai pagar: ", pagamento)

/*Um grupo de três amigos quer juntos comprar uma pizza, cada um irá contribuir com uma quantia de valor. Faça um programa que receba quanto cada amigo irá contribuir e mostre quanto eles tem juntos*/

let contribuir = Number(prompt("Com quanto você irá contribuir? "))
let contribuir2 = Number(prompt("Com quanto você irá contribuir? "))
let contribuir3 = Number(prompt("Com quanto você irá contribuir? "))
let totalJuntos = contribuir + contribuir2 + contribuir3
console.log("Os três juntos possuem:" , totalJuntos)

/*Uma loja de doces vende produtos em grande quantidade. Faça um programa que peça a quantidade do produto comprado, o valor unitario e mostre quanto ele vai pagar.*/

let produto = Number(prompt("Qual a quantidade do produto? "))
let unitario = Number(prompt("Qual o valor da unidade desse produto? "))
let pagar = produto * unitario
console.log("Você irá pagar " , pagar , " pelo seu produto")




