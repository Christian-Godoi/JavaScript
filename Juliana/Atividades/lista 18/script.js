//1

let texto = document.getElementById("texto")
function arredondar() {
    let numero = document.getElementById("numero").value
   texto.innerText = "O número arredondado é " + Math.round(numero)
}

//2

let texto2 = document.getElementById("texto2")
function arredondarBaixo() {
    let numero2 = document.getElementById("numero2").value
   texto2.innerText = "O número arredondado é " + Math.floor(numero2)
}

//3

let texto3 = document.getElementById("texto3")
function arredondarCima() {
    let numero3 = document.getElementById("numero3").value
   texto3.innerText = "O número arredondado é " + Math.ceil(numero3)
}
//4

let texto4 = document.getElementById("texto4")
function Raiz() {
    let numero4 = document.getElementById("numero4").value
   texto4.innerText = "O número arredondado é " + Math.sqrt(numero4)
}

//5

function calcular() {
    let base = document.getElementById("base").value
    let expoente = document.getElementById("expoente").value
    let resultado = document.getElementById("resultado")
    resultado.innerText = "O valor da potência é: " + Math.pow(base, expoente)
}

//6
function MaiorNumero() {
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let n3 = document.getElementById("n3").value
    resultado2.innerText = "O maior número é: " + Math.max(n1,n2,n3)
}

//7

function MaiorNumero() {
    let n4 = document.getElementById("n4").value
    let n5 = document.getElementById("n5").value
    let n6 = document.getElementById("n6").value
    resultado3.innerText = "O menor número é: " + Math.min(n4,n5,n6)
}

//8

function sortear(){
   resultado4.innerText = "O número aleatório é " + Math.round(Math.random() *10)
}

//9

function dado(){
   resultado5.innerText = "O número aleatório é " + Math.round(Math.random() *6)
}
