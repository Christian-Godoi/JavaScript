
//1

let n1 = 20
let n2 = 2

let soma = n1 + n2
let subtracao = n1 - n2
let divisao = n1 / n2
let multiplicacao = n1 * n2
let modulo = n1 % n2

console.log("A soma é: " , soma)
console.log("A subtração é: " , subtracao)
console.log("A divisão é: " , divisao)
console.log("A multiplicação é: " , multiplicacao)
console.log("O resto da divisão é ", modulo)

//2

let largura = Number(prompt("Qual a largura do retângulo? "))
let altura = Number(prompt("Qual a altura do retângulo? "))
let área = largura * altura
console.log("A área total do retângulo é: ", área)

//3

let numeroQualquer = Number(prompt("Digite um número aleatório: "))
let dobro = numeroQualquer * 2
let metade = numeroQualquer / 2
console.log("A metade desse número é" , metade , "e o dobro é " , dobro)

//4

let n3 = Number(prompt("Escreva um número aleatório abaixo: "))
let n4 = Number(prompt("Escreva um número aleatório abaixo: "))
let n5 = Number(prompt("Escreva um número aleatório abaixo: "))
let media = (n3 + n4 + n5) /3
console.log("A média dos três números é: " , media)

//5

let celcius = Number(prompt("Qual é a temperatura em Celcius agora? "))
let fahrenheit = (celcius * 9/5) + 32
console.log("A temperatura em fahrenheit é de: ", fahrenheit)

//6

let valor = Number(prompt("Qual o valor do produto? "))
let quantidade = Number(prompt("Qual a quantidade comprada? "))
let valorTotal = valor * quantidade
console.log("Você deve pagar: ", valorTotal , " reais")

//7 

let pessoas = Number(prompt("Qual a quantidade de pessoas? "))
let conta = Number(prompt("Qual o valor total da conta? "))
let pagamento = conta / pessoas
console.log("Cada um irá pagar ", pagamento, " reais")

//8
let idade = Number(prompt("Qual a sua idade?"))
let meses = idade * 12
console.log("Você tem " , meses , " meses de vida")

//9

let n6 = Number(prompt("Digite um número"))
let n7 = Number(prompt("Agora, digite outro"))
let divisao2 = n6 / n7
let modulo2 = n6 % n7
console.log("A multiplicação é: " , multiplicacao, ", e resto da divisão é: ", modulo)

//10 

let hora = Number(prompt("Que horas são? "))
let minutos = hora * 60
console.log("Isso equivale a ", minutos , " minutos")