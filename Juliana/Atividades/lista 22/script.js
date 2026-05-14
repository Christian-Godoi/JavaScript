//1

let item = document.querySelectorAll(".item")

item.forEach(function(item) {
    item.addEventListener("click", function() {
        item.classList.toggle("troca")
    })
})


//2

let ex2 = document.querySelectorAll(".ex2")

ex2.forEach(function(ex2) {
    ex2.addEventListener("click", function() {
        ex2.classList.toggle("troca")
    })
})

//3

let ex3 = document.querySelectorAll(".ex3")

ex3.forEach(function(ex3) {
    ex3.addEventListener("click", function() {
        console.log("clicou")
    })
})

//4

let rosa = document.querySelectorAll(".rosa")

rosa.forEach(function(rosa) {
    rosa.addEventListener("click", function() {
        rosa.classList.toggle("rosa2")
    })
})

//5

/*FEITO NO EXERCÍCIO 4*/

//6

let ex6 = document.querySelectorAll(".ex6")

ex6.forEach(function(ex6) {
    ex6.addEventListener("click", function() {
        ex6.classList.toggle("ex6Mudado")
    })
})

//7

/*FEITO NO EXERCÍCIO 6*/

//8

let caixaEx8 = document.querySelectorAll(".caixas5")
caixaEx8.forEach(function(caixas5){
    caixas5.addEventListener("click", function(){
        caixaEx8.forEach(function(caixas5){
            caixas5.classList.remove("troca")
        })
        caixas5.classList.add("troca")
    })
})

//9

let caixaEx9 = document.querySelectorAll(".ex9")
caixaEx9.forEach(function(ex9){
    ex9.addEventListener("click", function(){
        caixaEx9.forEach(function(ex9){
            ex9.classList.remove("troca2")
        })
        ex9.classList.add("troca2")
    })
})

