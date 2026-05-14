//Anõnima 
let soma = function(n,n4) {
    return n + n4
}

let n = 5
let n4 = 7
console.log(soma(n  ,n4))

//Saudação

let bomDia = function(nome) {
    return "Bom dia " + nome
}

let nome = prompt("Qual o seu nome?")
console.log(bomDia(nome))

//Multiplicar três números

let  multiplicar = function (n1,n2,n3) {
    return n1*n2*n3
}
let n1 = Number(prompt("Informe um número"))
let n2 = Number(prompt("Informe um número"))
let n3 = Number(prompt("Informe um número"))
console.log(multiplicar(n1,n2,n3))

//Peça uma temperatura, se tiver acima de 30 diga "calor", se tiver abaixo de 12 diga "frio", senão, diga "ok"

let temp = Number(prompt("Qual é a temperatura?"))
let previsaoDoTempo = function(temp) {
    if (temp > 30) {
        return "Calor"
    } else if (temp < 12) {
        return "Frio"
    } else{
        return "Ok"
    }
}
console.log(previsaoDoTempo(temp))


/*Peça um salário,se ele for menor ou igual a 2500 dê 700 reais de aumento, senão se for menor ou igual a 3200, dê 300 reais de aumento, senão mostre "sem aumento"*/

let salario = Number(prompt("Qual o seu salário?"))
let aumento = function(salario) {
    if (salario <= 2500) {
        return "seu novo salário é: " + (salario+700) + " R$" 
    } else if (salario <= 3200) {
        return "seu novo salário é: " + (salario+300) + " R$"
    } else{
        return "Sem aumento"
    }
}
console.log(aumento(salario))

