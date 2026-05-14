//1

let dia = prompt("Que dia da semana é?")
switch (dia) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
        break
    case 7:
        console.log("Sábado")
        break
         default:
        console.log("Resposta inválida")
}
console.log("-------------------------------")
//2

let idade = Number(prompt("Qual a sua idade? (5,10,15,20 ou 30)"))
switch (idade) {
    case 5:
        console.log("Infantil A")
        break
    case 10:
        console.log("Infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20:
        console.log("Juvenil B")
        break
        case 30: 
        console.log("Adulto")
        break
         default:
        console.log("Resposta inválida")
}
console.log("-------------------------------")

//3

let turno = prompt("Qual o seu turno?")
switch (turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
        case "N": 
        console.log("Boa noite!")
        break
    default:
        console.log("Resposta inválida")
}
console.log("-------------------------------")

//4

let numero = Number(prompt("Digite um número entre 1 e 5"))
switch(numero) {
    case 1:
        console.log("Legal")
        break
    case 2:
        console.log("Chato")
        break
    case 3:
        console.log("Bacana")
        break
    case 4: 
    console.log("Estranho")
        break
    case 5:
        console.log("Diferente")
        break
    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
}
console.log("-------------------------------")

//5
let estacao = Number(prompt("Informe um número de 1 a 4, para eu corresponde-los a alguma estação"))
switch (estacao) {
    case 1:
        console.log("Primaveira")
        break
    case 2: 
    console.log("Verão")
        break
    case 3:
        console.log("Outono")
        break
    case 4: 
    console.log("Inverno")
        break
     default:
    console.log("Resposta inválida")
}
console.log("-------------------------------")

//6
let menu = Number(prompt("Escolha um das operações: \n 1 - Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4 - Dividir \n "))
let n1 = Number(prompt("Agora, digite um número qualquer para que eu possa calcular"))
let n2 = Number(prompt("Digite outro agora"))
switch(menu){
    case 1:
        soma = n1 + n2
        console.log("A soma deles é ", soma)
        break
    case 2:
        sub = n1 - n2
        console.log("A subtração deles é ", sub)
        break
    case 3:
        mult = n1 * n2
        console.log("A multiplicação deles é ", mult)
        break
    case 4:
        div = n1 / n2
        console.log("A divisão deles é ", div)
        break
    default:
        console.log("Operação inválida")

}
console.log("-------------------------------")

//7

let codigo = Number(prompt("Qual o código do produto?"))
switch(codigo) {
    case 100:
        console.log("Caneta")
        break
    case 200:
        console.log("Lápis")
        break
    case 300:
        console.log("Borracha")
        break
    case 400:
        console.log("Caderno")
        break
    default:
        console.log("Produto não encontrado")
}
console.log("-------------------------------")

//8

let letra = prompt("Qual é a letra?")
switch (letra) {
    case "A":
       console.log("Excelente")
        break
    case "B":
        console.log("Bom")
        break
    case "C":
        console.log("Regular")
        break
    case "D":
        console.log("Ruim")
        break
    case "F":
        console.log("Reprovado")
        break
    default:
        console.log("Conceito inválido")
}
console.log("-------------------------------")

//9

let opcao = Number(prompt("Qual é a opção? (de 1 a 4)"))
switch (opcao) {
    case "1":
       console.log("Atacar")
        break
    case "2":
        console.log("Defender")
        break
    case "3":
        console.log("Curar")
        break
    case "4":
        console.log("Fugir")
        break
    default:
        console.log("Opção inválida. Você perdeu a vez.")
}
console.log("-------------------------------")

//10

let conversao = Number(prompt("Qual das opções você deseja? \n 1 - Real para Dólar \n 2 - Dólar para Real \n 3 - Real para Euro"))
let valor = Number(prompt("Qual o valor que você deseja converter?"))
switch (opcao) {
    case "1":
        dolar = valor / 5.21
       console.log("Você tem ", dolar, " dólares")
        break
    case "2":
        real = valor * 5.21
        console.log("Você tem ", real, " reais")
        break
    case "3":
        euro = valor / 6.18
        console.log("Você tem ", euro, " euros")
        break
    default:
        console.log("Opção inválida")
}
console.log("-------------------------------")

//11

let setor = Number(prompt("De qual setor você participa?"))
switch (setor){
    case 1:
        console.log("Suporte Técnico")
        break
    case 2:
        console.log("Financeiro")
        break
    case 3:
        console.log("Comercial")
        break
    case 4:
        console.log("Cancelamento")
        break
    default:
        console.log("Setor inválido")
}
console.log("-------------------------------")

//12

let cardapio = Number(prompt("Qual das opções você deseja? (de 1 a 4)"))
switch (cardapio) {
    case 1:
        console.log("Hambúrguer")
        break
    case 2:
        console.log("Pizza")
        break
    case 3:
        console.log("Suco")
        break
    case 4:
        console.log("Sorvete")
        break
    default:
        console.log("Pedido inválido")
}
console.log("-------------------------------")

//13

let nota = Number(prompt("Qual foi sua nota de 1 a 5?"))
switch(nota) {
    case 1:
        console.log("Péssimo")
        break
    case 2:
        console.log("Ruim")
        break
    case 3:
        console.log("Regular")
        break 
    case 4: 
        console.log("Bom")
        break
    case 5:
        console.log("Excelente")
    default:
        console.log("Nota inválida")
}
console.log("-------------------------------")

//14

let usuario = Number(prompt("Qual o seu número de usuário de 1 a 4?"))
switch (usuario) {
    case 1:
        console.log("Administrador")
        break
    case 2:
        console.log("Professor")
        break
    case 3:
        console.log("Aluno")
        break
    case 4:
        console.log("Visitante")
        break
    default:
        console.log("Usuário inválido")
}
console.log("-------------------------------")

//15

let filme = Number(prompt("Qual a categoria que você mais gosta de filmes?(de 1 a 5)"))
switch (filme) {
    case 1:
        console.log("Ação")
        break
    case 2:
        console.log("Comédia")
        break
    case 3:
        console.log("Drama")
        break
    case 4:
        console.log("Terror")
        break
    case 5:
        console.log("Animação")
    default:
        console.log("Categoria inválida")
}
