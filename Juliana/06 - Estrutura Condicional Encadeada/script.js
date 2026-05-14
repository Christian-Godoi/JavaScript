// Estrutura Condicional Encadeada

let nota = 4
if (nota >= 7){
    console.logo("Aprovado")
} else if (nota >= 5) {
    console.log("Recuperação")
}
else {
    console.log("Reprovado")
}

// A ordem importa na hora de ler os valores cadastrados no let, então se a condição "nota >= 5" estivesse em cima, e a nota fosse 8 por exemplo, iria aparecer "Recuperação", pois ele le a primeira condição primeiro


console.log("--------------------------------------------")

let idade = Number(prompt("Qual a sua idade?"))
if (idade >= 0 && idade <= 12) {
    console.log("Criança")
} else if (idade >12 && idade <= 17) {
    console.log("Adulto")
} else if (idade > 17 && idade <= 55){
    console.log("Adulto")
} else if (idade > 55 && idade <=110) {
    console.log("Idoso")
} else {
    console.log("Idade inválida")
}

console.log("--------------------------------------------")

/* Em um passeio escolar, os alunos são separados por categoria, peça a categoria do aluno e: 
-Se for categoria "A", diga "Ala Leste"
-Se for categoria "B", diga "Ala Oeste"
-Se for categoria "C", diga "Ala Sul"
-Se for categoria "D", diga "Ala Norte"
Para qualquer  outra categoria, diga "Categoria inválida*/

let categoria = prompt("Qual a sua categoria? (A,B,C,D)")

if (categoria == "A") {
    console.log("Ala Leste")
} else if (categoria == "B") {
    console.log("Ala Oeste")
} else if (categoria == "C") {
    console.log("Ala Sul")
} else if (categoria == "D") {
    console.log("Ala Norte")
} else {
    console.log("Categoria inválida.")
}

console.log("--------------------------------------------")

/* Peça dois números para o usuário e verifique se 
- o primeiro é maior que o segundo
- o segundo é maior que o primeiro
- se eles são iguais */

let numero = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Agora, digite outro número"))

if (numero > numero2) {
    console.log("O primeiro é maior que o segundo")
} else if (numero2 > numero) {
    console.log("O segundo é maior que o primeiro")
} else {
    console.log("Eles são iguais")
}