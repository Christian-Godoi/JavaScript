//Switch Case

let opcao = 1
switch(opcao){
    case 1:
        console.log("Cadastrar")
        break
    case 2: 
    console.log("Editar")
    break
    default: 
        console.log("Opção inválida")
}

console.log("---------------------------------------------------")

let acesso = prompt("Qual o seu acesso?")
switch (acesso){
    case "admin":
        console.log("Acesso total")
        break
        case "professor":
            console.log("Pode lançar notas")
            break
        case "aluno":
            console.log("Pode vizualizar")
            break
            default:
                console.log("Acesso negado")
}

console.log("---------------------------------------------------")

/*Pergunte para o usuário que dia da semana é hoje,s e for quinta ouu sexta, mostre "Dia de ir para o SENAI", para qualqer outro, mostre "Não é dia de ir para o SENAI" */

let dia = prompt("Qual é o dia da semana?")
switch (dia) {
    case "quinta":  
    case "sexta" :
        console.log("É Dia de ir para o SENAI")
        break
        default:
            console.log("Não é dia de ir pro SENAI")
}

console.log("---------------------------------------------------")

/* Um cardápio organiza os itens por número
1 = Pizza
2 = Salada
3 = Macarrão
4 = Bebida*/

let cardapio = Number(prompt("Esses são os itens disponíveis no cardápio: \n 1 = Pizza \n 2 = Salada \n 3 = Macarrão \n 4 = Bebida \n Qual das opções você gostaria?"))
switch (cardapio) {
    case 1 :
        console.log("Pizza")
        break
         case 2 :
        console.log("Salada")
        break
         case 3 :
        console.log("Macarrão")
        break
         case 4 :
        console.log("Bebida")
        break
        default:
            console.log("Opção inválida")
}

console.log("---------------------------------------------------")

