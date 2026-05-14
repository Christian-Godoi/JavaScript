//1

function mensagemInicial() {
    console.log("Aprendendo funções com JS")
}
mensagemInicial()
console.log("--------------------------")

//2

function boasVindas() {
    console.log("Desenvolvimento de sistemas")
}
boasVindas()
boasVindas()
console.log("--------------------------")

//3

function contarAteDez() {
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
}
contarAteDez()
console.log("--------------------------")

//4

function contagemRegressiva() {
    for (let i = 10; i >= 1; i--)
        console.log(i)
}
contagemRegressiva()
console.log("--------------------------")

//5

function mensagemRepetida() {
    for( let i = 1; i <= 5; i++) {
     console.log("Eu gosto de JavaScript")
    }
}
mensagemRepetida()
console.log("--------------------------")

//6

function numerosPares() {
    for (let i = 2; i <=20 ; i+= 2) {
        console.log(i)
    }
}
numerosPares()
console.log("--------------------------")

//7

let tabuada = 18
function tabuadaDodois() {
for(let i = 1; i <= 10; i++) {
    let resultado = tabuada * i
    console.log(tabuada , " x ", i , " = ", resultado) 
}
}
tabuadaDodois()
console.log("--------------------------")

//8

function mostrarSoma() {
    let n1 = Number(prompt("Informe um número"))
    let n2 = Number(prompt("Informe outro número"))
    console.log(n1+n2)
}
mostrarSoma()
console.log("--------------------------")

//9

function alertaSistema() {
    for (let i = 1; i <= 3; i ++) {
        console.log("Atenção! Verifique as informações")
    }
}
alertaSistema()
console.log("--------------------------")

//10

function mensagem1() {
    console.log("Eu gosto de red hot")
}
function mensagem2() {
    console.log("Minha cor favorita é laranja")
}
function mensagem3() {
    console.log("EU gosto do big tasty do MC")
}
mensagem1()
mensagem2()
mensagem3()
console.log("--------------------------")
//11

let soma = 0
function soma2() {
    for (let i = 1; i <= 5; i++) {
let n2 = Number(prompt("Informe 5 números"))
soma = soma + n2
console.log("A soma desses números é: ", soma)
}
}
soma2()
console.log("--------------------------")

//12

function aumento() {
    let salario = Number(prompt("Qual o valor do seu salário?"))
    if (salario <= 3500) {
        console.log("Seu salário agora é: " + salario+500)
    } else {
        console.log("Você não tem aumento de salário")
    }
} 
aumento()
console.log("--------------------------")

//13
let soma1 = 0
function notas() {
    for (let i = 1; i <= 3; i ++) {
        let numero = Number(prompt("Digite aqui suas três notas: "))
        soma = soma + numero 
    }
    let media = soma / 3 
  if (media > 6) {
    console.log("Aprovado")
  }else if (media >= 5) {
    console.log("Recuperação")
  } else {
    console.log("Reprovado")
  }
}
notas()
console.log("--------------------------")

//14

function avalicao() {
    let nota = Number(prompt("Que nota você atribuiria ao atendimento?"))
    if (nota == 9 || nota == 10) {
        console.log("Excelente")
    } else if (nota == 8) {
        console.log("Ótimo")
    } else if (nota == 7 ||nota == 6) {
        console.log("Bom")
    } else if (nota == 5) {
        console.log("Regular")
    } else {
        console.log("Ruim")
    }
}
avalicao()
console.log("--------------------------")
