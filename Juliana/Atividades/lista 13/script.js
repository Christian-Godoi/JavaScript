//1 

function dobro(numero) {
    console.log("O dobro desse número é: ", numero*2)
}
let numero = Number(prompt("Digite um número aleatório:"))
dobro(numero)
console.log("-------------------------------------------")

//2

function calcularArea(base,altura) {
    console.log("A área desse retângulo é: ", base*altura)
}
let base = Number(prompt("Qual o valor da base desse retângulo?"))
let altura = Number(prompt("Qual o valor da altura desse retãngulo?"))
calcularArea(base, altura)
console.log("-------------------------------------------")

//3

function converterParaFahrenheit(C) {
    F = C*1.8 + 32
    console.log("Essa temperatura convertida para Fahrenheit é de: ", F)
}

let C = Number(prompt("Qual é a temperatura?"))
converterParaFahrenheit(C)
console.log("-------------------------------------------")

//4

function verificarNota(nota) {
    if(nota >= 7) {
        console.log("Aprovado")
    }else if (nota >= 5 && nota < 7) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
}
let nota = Number(prompt("Qual foi a sua nota?"))
verificarNota(nota)
console.log("-------------------------------------------")

//5

function verificarNumero(n1) {
    if(n1 > 0) {
        console.log("Número positivo")
    } else if (n1 < 0) {
        console.log("Número negativo")
    } else{
        console.log("O número é zero")
    }
}
let n1 = Number(prompt("Digite um número: "))
verificarNumero(n1)
console.log("-------------------------------------------")

//6

function contarPares(n2) {
    for (i = 2; i <= n2; i+= 2) {
        console.log(i)
    }
} 
let n2 = Number(prompt("Informe um número: "))
contarPares(n2)
console.log("-------------------------------------------")

//7

function somarIntervalo() {
    let soma = 0
    if(n3 < n4){
for(i = n3; i <= n4; i++){
    soma = soma + i
    console.log(("A soma é: ", soma))
}
    } else if(n3 > n4) {
      for(i = n4; i <= n3; i++){
        soma = soma + i
    console.log(("A soma é: ", soma))
}  
    } else{
        console.log("Operação inválida")
    }
}
let n3 = Number(prompt("Informe um número:"))
let n4 = Number(prompt("Informe outro número"))
somarIntervalo()
console.log("-------------------------------------------")

//8

function repetirNome(nome,repeticao) {
for(i = 1; i <=repeticao; i++){
    console.log(nome)
}
} 
let nome = prompt("Qual o seu nome?")
let repeticao = Number(prompt("E a quantidade de vezes que deseja que seu nome apareça?"))
repetirNome(nome,repeticao)
console.log("-------------------------------------------")

//9

function tabuada() {
    let controlador = 1
while (controlador <= 10) {
    multi = num * controlador
    console.log(num, " x ", controlador , " = ", multi) 
    controlador++
}
}
let num = Number(prompt("Informe um número"))
tabuada()
console.log("-------------------------------------------")

//10

function contagemPersonalizada(contagem) {
    for(i = contagem; i >= 1; i--) {
        console.log(i)
    }
}
let contagem = Number(prompt("Informe um número aleatório: "))
contagemPersonalizada(contagem)
console.log("-------------------------------------------")

//11

function mediaAluno() {
    let mediaGeral = media + media2 + media3 / 3
    if (mediaGeral >= 7) {
        console.log("Aprovado")
    } else if (mediaGeral > 5 && mediaGeral < 7){
        console.log("Recuperação")
    } else{
        console.log("Reprovado")
    }
}
let media = Number(prompt("Digite um número para o cálculo de sua média"))
let media2= Number(prompt("Digite um número para o cálculo de sua média"))
let media3 = Number(prompt("Digite um número para o cálculo de sua média"))
mediaAluno()