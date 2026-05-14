// // Laço de Repetição
// let i = 1
// while(i <=5){
//     console.log(i)
//     i++//Atualizador da condição
// }

// console.log("---------------------------------------")

// let resposta = prompt("Deseja acessar o sistema?")
// while(resposta = "sim"){
//     console.log("Bem vindo ao sistema")
//     resposta = prompt("Deseja acessar o sistema?")
// }

// console.log("-------------------------------------------")

// let senha = prompt("Digite sua senha")
// while (senha != "senai2026") {
//     senha = prompt("Senha incorreta. Tente novamente")
// }
// console.log("Acesso liberado")

// console.log("-------------------------------------------")

// //usando && e ||
// let nota = Number(prompt("Digite uma nota de 0 a 10: "))
// while (nota <0 || nota >10) {
//     nota = Number(prompt("Valor inválido. Digite novamente:"))
// }
// console.log("Nota válida: ", nota)

// /*Peça para o usuário 3 números, some eles e mostre o resultado da soma */

// let soma = 0
// let aux = 1
// while (aux <= 3) {
//     let numero = Number(prompt("Digite um número"))
//     soma = soma + numero
//     aux++
// }
// console.log("O resultado é: ", soma)
// console.log("-------------------------------------------")


/*Peça para o usuário as credenciais de acesso, enquanto as credenciais não forem iguais a login == "TDS2" e a senha == "senai", continue perguntando */

// let senha2 = prompt("Qual a sua senha?")
// let login = prompt("Qual o seu login?")
// while (login != "TDS2" || senha2 != "senai") {
//     senha2 = prompt("Qual a sua senha?")
//      login = prompt("Qual o seu login?")
// }
// console.log("Carregando seu acesso...")
// console.log("-------------------------------------------")

// let x = 1
// while (x <= 10) {
//     console.log(x)
//     x++
// }
// console.log("-------------------------------------------")

// let magica = prompt("Qual a palavra mágica?")
// while (magica != "abracadabra") {
//     console.log("Errou")
//     magica = prompt("Errou. Qual a palavra mágica?")
// }
// console.log("Acertou")
console.log("-------------------------------------------")

//Peça três números e mostre a multiplicação deles 
let controlador = 1
let multi = 1
let num 
while (controlador <= 3) {
    num = Number(prompt("Informe o " + controlador + "° número"))
    multi = multi * num
    //__2__ = 1 * 2
    //__6__ = 2 * 3
    //__18__ = 6 * 3
    console.log(multi)
    controlador++
}
console.log("O resultado é:" , multi)
