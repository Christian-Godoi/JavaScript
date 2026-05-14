//1

let n1 = 1
while (n1 <= 10) {
    console.log(n1)
    n1++
}
console.log("-----------------------------------")

//2

let controlador = 1
let num = Number(prompt("Informe um número"))
while (controlador <= 10) {
    multi = num * controlador
    console.log(num, " x ", controlador , " = ", multi) 
    controlador++
}
console.log("-----------------------------------")

//3

let n2 = 10
while (n2 >= 1) {
    console.log(n2)
    n2--
}
console.log("-----------------------------------")

//4

let senha = prompt("Qual a senha?")
while (senha!= 12345 ) {
    senha = prompt("Errou. Qual a senha?")
}
console.log("Acertou")
console.log("-----------------------------------")

//5
let n3 = 50
while (n3 <= 100) {
    console.log(n3)
    n3++
}
console.log("-----------------------------------")

//6
 
let n4 = 5
while (n4 <= 100) {
    console.log(n4)
    n4+= 5
}
console.log("-----------------------------------")

//7

let n5 = 1
while (n5 <= 5) {
    console.log("Eu gosto de JavaScript")
    n5++
}
console.log("-----------------------------------")

//8

//?
console.log("-----------------------------------")
//9

let nota = Number(prompt("Digite a nota entre 0 e 10"))
while (nota > 10 || nota < 0) {
    alert("Nota errada")
    nota = Number(prompt("Digite uma nota que esteja entre 0 e 10!"))
}
console.log("Nota registrada com sucesso")
console.log("-----------------------------------")

//10

let contador = 1
let n6 
let soma = 0
n6 = Number(prompt("Informe um número"))
while (n6 >= 0) {
    soma = soma + n6
    console.log(soma)
    n6 = Number(prompt("Informe um número"))
}
console.log("O resultado é:" , soma)
console.log("-----------------------------------")

//11

let menu = prompt("1 - Cadastrar \n 2 - Consultar \n 3 - Sair")
while (menu != 3) {
    alert("Erro. Selecione a opção novamente")
    menu = prompt("1 - Cadastrar \n 2 - Consultar \n 3 - Sair")
}

console.log("Você optou por sair...")
console.log("-----------------------------------")

//12
let n7 = 2
while (n7 <= 100) {
    console.log(n7)
    n7+= 2
}
console.log("-----------------------------------")

//13

let login = prompt("Qual o seu login?")
let senha2 = prompt("Qual a sua senha?") 
while (login != "admin" || senha2 != 123) {
    login = prompt("Qual o seu login?")
    senha2 = prompt("Qual a sua senha?")
}
console.log("Bem-vindo ao sistema!")
console.log("-----------------------------------")

//14
let NumSecreto= 7
let advinha = Number(prompt("Em qual número entre 1 a 10 eu estou pensando?")) 
while (advinha != NumSecreto) {
alert("Número errado, tente novamente")
advinha = Number(prompt("Em qual número entre 1 a 10 eu estou pensando?")) 
}
console.log("Você acertou!!! o número correto era " , NumSecreto)