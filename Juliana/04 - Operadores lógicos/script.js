//04 - Operadores Lógicos 
// && - e - tudo tem que ser verdade
// || - ou - apenas uma coisa deve ser verdade
// ! - não - inverte o resultado

let idade = 18
let convite = true
console.log(idade >= 18 && convite == true); // true 

console.log("-------------------------------------")
let dia = "quinta"
console.log(dia == "sabado" || dia == "domingo") // false

console.log("-------------------------------------")
let valor = 20
console.log(valor >= 10 && valor <= 99) // true 

console.log("-------------------------------------")
let bloqueado = false
console.log(!bloqueado) // só aceita a ! sozinha nesse caso, quando a variavel é boleana

console.log("-------------------------------------")
let numero = Number(prompt("Informe um número"))
console.log(!(numero >= 100))

console.log("-------------------------------------")


/* Para fazer login em um computador do Senai, o usuário deve ser "TDS2" e a senha "senai2026". Faça o código que pergunte as credenciais para o usuario e mostre se ele consegue ou nao acessar*/

let user = prompt("Qual o seu número de usuário? ")
let senha = prompt("E qual a sua senha?")
console.log(user == "TDS2" && senha == "senai2026") 

console.log("-------------------------------------")

/*Para ser aprovado o aluno precisa ter nota maior ou igual a 50 e ter a frequência maior ou igual a 75. Peça as informações para o usuário e veja se ele será aprovado */

let nota = Number(prompt("Qual foi a sua nota?"))
let frequencia = Number(prompt("Qual a sua frequência?"))
console.log(nota >= 50 && frequencia >= 75)

console.log("-------------------------------------")

/*Para assistir um filme de terror no cinema, é preciso ter idade maior ou igual a 14 e ou estar acompanhado do responsável */

let idade2 = Number(prompt("Qual a sua idade?"))
let responsavel = prompt("Você está acompanhado do seu responsável?")
console.log(idade >= 14 || responsavel == "sim")

console.log("-------------------------------------")

/*Para fazer academia do Sesi você deve ser aluno do sesi ou do senai e pagar a mensalidade */

let aluno = prompt("Você é aluno Sesi?")
let aluno2 = prompt("Você é aluno Senai?")
let mensalidade = prompt("Sua mensalidade está em dia?")
console.log((aluno == "sim" || aluno2 == "sim") & mensalidade == "sim") // *o java le primeiro o !, depois o && e por fim o ||*

console.log("-------------------------------------")

/*Pergunte para o usuário se ele tem internet (true/false) e mostre */

let internet = prompt("Você tem internet?")
console.log(internet) // quando é boleana, não é necessário declarar se é true ou false, pq de natureza, ela já abriga os dois valores









