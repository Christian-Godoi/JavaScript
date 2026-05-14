// Funções com Parâmetro

//Declarativa
function saudacao() {
    let nome = prompt("Qual o seu nome?")
    console.log("Bom dia", nome)
}
// saudacao() //chamando a função

//Declarativa com parâmetro
function saudacao2() {
    console.log("Bom dia", nome)
}
// let nome2 = prompt("Qual seu nome?")
// saudacao2(nome2)

//Somar dois números 
function soma(num1, num2) {
    let soma = num1 + num2
    console.log("A soma é: ", soma)
}

// let num1 = Number(prompt("Informe um número"))
// let num2 = Number(prompt("Informe outro número"))
// soma(num1,num2)

function maioridade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade")
    }else {
        console.log("Menor de idade")
    }
}
maioridade(18)
maioridade(2)
maioridade(60)

/*Peça um número para o usuário, crie uma função que calcule o dobro e mstre o resultado */

function numero(numero2) {
    console.log("O dobro do número é: ",numero2*2)
}
let numero2 = Number(prompt("Digite um número..."))
numero(numero2)

/*Uma empresa solicitou um sistema de aumento para os funcionários, crie uma função que recebe um salário,se ele for menor que 2500, dê 500 reais de aumento e mostre o novo salário, senão, apenas mostre, "sem aumento"*/

function aumento(salario) {
    if (salario < 2500) {
        console.log("Seu salário agora é de: ", salario+500)
    } else {
        console.log("Sem aumento")
    }
}
let salario = Number(prompt("Qual o valor do seu salário?"))
aumento(salario)

/*Crie um função para controle de alunos, a função deve mostrar o nome, a idade e o curso que faz no Senai*/

function controle(nome2, idade, curso) {
    console.log("Informações: \n nome: " ,nome2, " \n idade: ", idade , "  \n curso: ", curso)
}
let nome2 = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")
let curso = prompt("E qual seu curso no Senai?")
controle(nome2, idade, curso)



