// Operador Ternário
let idade = 18
let situacao
if(idade >=18){
    situacao = "Maior de idade"
}else{
    situacao = "Menor de idade"
}
console.log(situacao)

console.log("--------------------------")

let idade2 = 20
let situacao2 = idade2 >= 18? "Maior de Idade" : "Menor de Idade"
console.log(situacao2)

console.log("---------------------------")

let nota = Number(prompt("Qual sua nota? "))
let resultado = nota >=7 ? "Aprovado" : "Reprovado"
/* 
    if(nota >= 7){
        resultado = "Aprovado"
    }else{
        resultado = "Reprovado"
    } 
    */

console.log("---------------------------")
let acesso = prompt("Qual seu acesso?")
let entrada = acesso == "admin" ? "Acesso total" : acesso == "prof" ? "pode lançar notas" : "apenas leitura"

//if (acesso == "admin")
// entrada = "acesso total"
// } else if (acesso == "prof") {
// entrada = "pode lançar notas"
// } else {
// entrada = "apenas leitura"}

console.log("---------------------------")

/*Peça uma temperatura para o usuário, se ela for maior ou igual a 30, mostre "Está calor", senão, "Não está calor" */

let temp = Number(prompt("Qual a temperatura?"))
let clima = temp >= 30 ? "Está calor" : "Está frio" 
console.log(clima)
console.log("---------------------------")

/*Peça um número para o usuário e diga se ele é positivo, negativo ou se é zero */

let numero = Number(prompt("DIgite um número"))
let condicao = numero > 0 ? "É Positivo" : numero <0 ? "É Negativo" : "É zero"
console.log(condicao)
console.log("---------------------------")

/*Peça um media para o usuário e classifique, 
- Excelente, para nota maior ou igual a 9
- Bom, para nota maior ou igual a 7
- Regular, para nota maior ou igual a 5
- Reprovado, caso contrário*/

let media = Number(prompt("Qual foi a sua nota na média?"))
let resultado2 = media >= 9 ? "Excelente" : media >= 7 ? "Bom" : media >=5 ? "Regular" : "Reprovado"
console.log(resultado2)
