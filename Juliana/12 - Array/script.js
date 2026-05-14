//Array - Vetor

let frutas = ["Maçã", "Banana" , "Laranja"]
//             0         1           2
console.log(frutas) // mostra todos 
console.log("--------------------")
console.log(frutas[0]) // mostra o valor específico
console.log("--------------------")

//Medir
console.log(frutas.length) //3
//length = tamanho
console.log(frutas)
console.log(frutas[1].length) // a banana tem 6 letras, pois qnd vc específica oq deseja, ele le a palavra toda 
let nome = "Curso Técnico em Desenvolvimento de Sistemas"
console.log(nome.length)

//Adicionar 

//push = adiciona no final = Fila
frutas.push("Uva")
frutas.push("Morango")
console.log(frutas)

//unshift = adiciona no começo = Pilha
frutas.unshift("Abacaxi")
frutas.unshift("MAnga")
console.log(frutas)

//Remover 
//pop = remove do final
frutas.pop()
console.log(frutas)

//shift = remove do início
frutas.shift()
console.log(frutas)

//Splice = remove no meio
frutas.splice(1,1) // splice (posição, quantidade)

console.log(frutas)

//Editar
frutas[2] = "Limão"
console.log(frutas)

//Encontrar uma posição
console.log(frutas.indexOf("Abacaxi")) //0
console.log(frutas.indexOf("Limão")) //2
console.log(frutas.indexOf("Morango")) //-1

console.log("---------------------------")

//Varrer um vetor
let amigos = ["Luana", "Rebeca", "Tatiane", "Felipe", "Ana"]

for(let i = 0; i < amigos.length; i++){
    console.log(amigos[i])
}
console.log("---------------------------")

for(let i = 0; i < amigos.length; i ++) {
    if(amigos[i].length >= 6) {
        console.log("O nome tem 6 letras ou mais")
    } else {
        console.log("O nome tem 5 letras ou menos")
    }
}
console.log("---------------------------")

let alunos = []
for(let i = 0; i < 5; i++) { // gravar os nomes 
    alunos[i] = prompt("Qual o nome do aluno?")
    // let nome = pormpt("Qual o nome do aluno?")
    //alunos.push(nome) também da certo
}
for (let i = 0; i < alunos.length; i++) { // mostrar no console
    console.log(alunos[i])
}
console.log("---------------------------")


/*Crie um vetor de cores com 4 posições, depois coloque mais 2 valores no final, tire o primeiro e mostre com for*/

let cores = ["Vermelho", "Azul", "Amarelo", "Laranja"] 
cores.push("Roxo")
cores.push("Verde")
cores.shift()

for (let i = 0 ; i < cores.length; i ++) [
    console.log(cores[i])
]

/*Crie um vetor vazio de 5 notas, peça para o usuário preencher usando for, depois em outro for, mostre apenas as notas maiores que 7 */
let notas = []
for(let i = 0; i < 5; i++) {
    notas[i] = Number(prompt("Digite sua nota abaixo:"))
}

for (let i = 0 ; i < notas.length; i++) {
    if(notas[i] > 7) {
    console.log(notas[i])
    }
}

