//Laço de Repetição - Do while

//Mostrando números de 1 a 5

// let n1 = 1 
// do {
//     console.log(n1)
//     n1++
// } while (n1 <= 5)

// console.log("--------------")
// let n2 = 6
// do{
//     console.log("Do While")
//     console.log(n2)
//     n2++
// } while (n2 <= 5)
// console.log("--------------")

// // let resposta
// // do {
// //     resposta = prompt("Deseja continuar?")
// // } while (resposta == "sim")

// let soma = 0 
// let num 
// let contador = 1
// do {
//     num = Number(prompt("Digite um número: "))
//     soma = soma + num 
//     console.log(soma)
//     contador++
// } while(contador <= 3)
// console.log("Resultado final: " , soma)
// console.log("----------------")

// let usuario 
// let senha 
// do {
//     usuario = prompt("Qual o usuário?")
//     senha = prompt("Qual a senha?")
// } while (usuario != "admin" || senha != "senha")

/*Mostre os números de 1 a 99 pulando de 2 em 2 */



// let contador = 1
// do {
//     console.log(contador)
//       contador+= 2
// } while(contador <= 99)
// console.log("----------------")

/*Uma pessoa é selecionada em um grupo dependendo da escola que estudou, pergunte para o usuário a escola até que ele responda "senai" */

let escola
do {
   escola = prompt("Em qual escola você estudou?")
} while( escola != "senai")
    console.log("Você é Senaiano")

