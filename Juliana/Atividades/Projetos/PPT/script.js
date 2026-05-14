//JS

function jogar(escolhaUsuario) {
    let opcoes = ["Pedra" , "Papel" , "Tesoura"]
    let escolhaComputador = opcoes[Math.floor(Math.random()*3)]

    let final = ""
    if (escolhaUsuario == escolhaComputador) {
        final = "Empate"
    } else if (
    (escolhaUsuario == "Pedra" && escolhaComputador == "Tesoura") || (escolhaUsuario == "Papel" && escolhaComputador == "Pedra") || (escolhaUsuario == "Tesoura" && escolhaComputador == "Papel")
    ) {
        final = "Jogador Ganhou!"
    } else {
        final = "Computador Ganhou!"
    }
    let resultado = document.getElementById("resultado")
    resultado.innerText = "Jogador: " + escolhaUsuario + "| Computador: " + escolhaComputador + " = " + final
}