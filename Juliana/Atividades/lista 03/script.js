//1

let idade = Number(prompt("Qual a sua idade?"))
let cnh = prompt("Você possui CNH?")
console.log(idade >= 18 && cnh == "sim")

//2

let nota = Number(prompt("Qual a sua nota?"))
let faltas = Number(prompt("Qual a sua quantidade de dias faltados?"))
console.log(nota >= 6 && faltas <= 10)

//3
let idade2 = Number(prompt("Qual a sua idade?"))
let convite = prompt("Você possui convite?")
console.log(idade2 >= 18 && convite == "sim")

//4

let salario = Number(prompt("De quanto é o seu salário? "))
let nome = prompt("Seu nome está limpo?")
console.log(salario >= 2500 && nome)

//5

let convite2 = prompt("Você possui um convite?")
let lista = prompt("Seu nome está na lista?")
console.log(convite2 || lista)

//6

let valor = Number(prompt("Qual foi o valor da compra?"))
let vip = prompt("Você é cliente VIP?")
console.log(valor > 80 || vip)

//7

let nota2 = Number(prompt("Qual foi a sua nota?"))
let trabalho = prompt("Você fez trabalhos extras?")
console.log(nota2 > 5 && trabalho == "sim")

//8

let senha = Number(prompt("Qual a sua senha?"))
let digital = prompt("Coloque sua digital...")
console.log(senha == "1998" && digital)

//9

let bloqueado = ("Sua conta esta bloqueada?")
console.log(bloqueado)

//10

let temCadastro = print("Você tem cadastro?")
console.log(temCadastro)

//11

let login = prompt("Digite aqui seu login...")
let senha2 = prompt("Agora digite sua senha...")
console.log(login == "ADMIN" || senha2 == "senai2026")

//12

let compra = Number(prompt("Qual foi o valor da compra?"))
let cartao = prompt("Você possui o cartão da loja?")
let nomeLimpo = prompt("Seu nome está limpo?")
console.log(compra > 300 && cartao && nomeLimpo)

//13

let idade3 = Number(prompt("Qual a sua idade?"))
let documentos = prompt("Você entregou os documentos e pagou a matricula?")
console.log(idade3 >= 17 && documentos == "sim")

//14

let idade4 = Number(prompt("Qual a sua idade?"))
let socio = prompt("Você é sócio?")
let convidado = prompt("Então você é convidado?")
console.log(idade4 >= 15 && socio || convidado)