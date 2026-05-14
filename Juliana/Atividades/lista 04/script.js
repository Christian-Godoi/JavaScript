//1

let idade = Number(prompt("Qual a sua idade?"))
if (idade >= 18) {
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}
console.log("------------------------------------------")


//2

let n1 = Number(prompt("Digite um número:"))
let aux = n1 % 2
if((n1 % 2) == 0) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}
console.log("------------------------------------------")

//3

let nota = Number(prompt("Qual foi a sua nota?"))
if (nota >= 7) {
    console.log("Aprovado")
} else{
    console.log("Reprovado")
}
console.log("------------------------------------------")

//4

let idadeEvento = Number(prompt("Qual a sua idade?"))
if (idadeEvento >= 18){
    console.log("Entrada permitida")
} else{
    console.log("Entrada proibida")
}
console.log("------------------------------------------")

//5

let senha = Number(prompt("Insira a senha:"))
if (senha == "1234") {
    console.log("Senha correta")
} else {
    console.log("Senha incorreta")
}
console.log("------------------------------------------")

//6

let temp = Number(prompt("Qual a temperatura agora?"))
if (temp >= 30) {
    console.log("Está quente!")
} else {
    console.log("Está frio!")
}
console.log("------------------------------------------")

//7

let n2 = Number(prompt("Digite um número abaixo:"))
if (n2 > 0) {
    console.log("O número é positivo")
} else {
    console.log("O número é negativo")
}
console.log("------------------------------------------")

//8

let saldo = Number(prompt("Qual o saldo da sua conta?"))
let saque = Number(prompt("E qual o valor que você deseja sacar?"))

if (saldo >= saque) {
    console.log("Saque realizado")
} else {
    console.log("Saldo insuficiente")
}
console.log("------------------------------------------")

//9

let valor = Number(prompt("Qual foi o valor da compra?"))
if (valor >= 200) {
    console.log("Desconto aplicado")
} else{
    console.log("Sem desconto")
}
console.log("------------------------------------------")

//10

let n3 = Number(prompt("Digite um número..."))
let n4 = Number(prompt("Agora, digite outro..."))
if (n3 > n4) {
    console.log("O primeiro número é maior")
} else{
    console.log("O segundo número é maior, ou ambos são iguais")
}
console.log("------------------------------------------")

//11

let nome = prompt("Qual o seu nome de usuário?")
if (nome == "admin") {
    console.log("Acesso permitido")
} else{
    console.log("Acesso negado")
}
console.log("------------------------------------------")

//12

let nota2 = Number(prompt("Digite sua nota abaixo..."))
if (nota2 >= 9) {
    console.log("Excelente")
} else{
    console.log("Pode melhorar")
}
console.log("------------------------------------------")

//13
let horario = Number(prompt("Qual o horário?"))
if (horario >8 && horario <18){
    console.log("Horário de funcionamento")
} else{
    console.log("Fora do horário")
}
console.log("------------------------------------------")

//14

let cadastro = prompt("Você tem cadastro?")
if (cadastro == true) {
    console.log("Usuário cadastrado")
} else{
    console.log("Cadastro necessesário")
}
