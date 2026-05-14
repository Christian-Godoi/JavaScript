//Arrow Function - Função da Seta

let somar3 = (n5,n6) => { // o "=>" é a mesma coisa que a palavra function
    return n5+n6
}
console.log(somar3(1,2))
console.log("-----------------------------------------------")

//Peça um número e verifique se é positivo, negativo ou zero

// let numero = Number(prompt("Informe um número aleatório"))
// let classificar = (numero) => {
//     if(numero < 0)
//         return "Negativo"
//     else if(numero > 0)
//         return "Positivo"
//     else{
//         return "Zero"
//     }
// }
// console.log(classificar(numero))
// console.log("-----------------------------------------------")

//Ímpar ou Par

let ImparOuPar = (num) =>{
    let aux = num % 2
    if (aux ==0) 
        return "Par"
    else {
        return "Impar"
    }
}
let num = Number(prompt("Qual o número?"))
console.log(ImparOuPar(num))
console.log("-----------------------------------------------")

//Outro jeito de escrever

let dobro2 = n => n*2
console.log(dobro2(5))
console.log("-----------------------------------------------")

/* Peça um número para o usuário, se for menor ou igual a 10, retorne (numero + 3 * 6 - 1) senão, retorne (numero / 2 + 3 * 19*/

let n1 = Number(prompt("Informe um número"))

let igual = (n1) => {
    if (n1 <= 10)
        return "O número com a expressão é " + (n1 + 3 * 6 - 1)
    else{
        return "O número com a expressão é " + (n1 / 2 + 3 * 19)
    }
}
console.log(igual(n1))







