//1
 
for (let i = 1; i <= 30; i++) {
    console.log(i)
}
console.log("----------------------------------------------")

//2

for (let i = 30; i >= 1; i--) {
    console.log(i)
}
console.log("----------------------------------------------")

//3

for(let i = 1; i <= 5; i++) {
    let numero = Number(prompt("Informe um número"))
     if (numero >= 50) {
        console.log("Acima da média")
    } else {
        console.log("Abaixo da média")
     } 
 }
 console.log("----------------------------------------------")

 //4

 let tabuada = Number(prompt("Digite um número"))
 for (let i = 1; i <= 10; i++) {
let resultado = tabuada * i
console.log(tabuada , " x ", i , " = ", resultado) 
 }
console.log("----------------------------------------------")

//5

let n1 = Number(prompt("Digite um número inteiro positivo, para que eu adeque a música"))
for (let i = n1; i >= 1; i--) {
    console.log(i , "patinhos foram passear, além das montanhas para brincar A mamãe gritou: Quá, quá, quá, quá Mas só", i-- ,"patinhos voltaram de lá.")
}
console.log("----------------------------------------------")

//6

let idade = Number(prompt("Informe sua idade"))
for (let i = 1; i <= 1; i++) {
    if (idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}
console.log("----------------------------------------------")

//7

let codigo = Number(prompt("Qual foi o código digitado por você na eleição? (De 1 a 6)"))
for (let i = 1; i <= 1; i++) {
    switch(codigo) {
        case 1:
        case 2:
        case 3:
        case 4:
            console.log("Candidatos")
            break
        case 5:
            console.log("Voto nulo")
            break
        case 6:
            console.log("Voto em branco")
        break
        default:
            console.log("Número inválido")
    } 
}
console.log("----------------------------------------------")

//8

let soma = 0
for (let i = 1; i <= 5; i++) {
let n2 = Number(prompt("Informe 5 números"))
soma = soma + n2
console.log("A soma desses números é: ", soma)
}
console.log("----------------------------------------------")

//9

for (let i = 2; i <= 50; i+= 2){
console.log(i)
}

console.log("----------------------------------------------")

//10

let n3 = Number(prompt("Digite um número inicial"))
let n4 = Number(prompt("Digite agora o número final"))
for (let i = n3; i <=n4; i++) {
console.log("Os números entre eles são: ", i)
}


