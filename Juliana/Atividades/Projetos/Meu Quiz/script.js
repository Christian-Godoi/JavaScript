let perguntas = [
    {
        pergunta: "Em Que Ano Grand Theft Auto V (GTA V) Foi Lançado? ",
        respostas: ["2011", "2012", "2013", "2015"],
        correta: 2
    },
    {
        pergunta: "Qual o nome dos personagens principais do jogo?",
        respostas: ["Dave, Steve e Anderson", "Franklin, Michael e Trevor", "Brad, Michael e Trevor", "John, Chad, Josh"],
        correta: 1
    },
    {
        pergunta: "Qual Missão O Trevor É Introduzido Pela Segunda Vez Na História De GTA V?",
        respostas: ["O golpe da joalheria", "Leve turbulência", "Ron noiado", "Sr. Philips"],
        correta: 3 
    },
    {
        pergunta: "De todos os personagens, quem é conhecido por ser mais 'louco?'",
        respostas: ["Franklin", "Michael", "Trevor", "John"],
        correta: 2
    },

    {
        pergunta: "Qual a cor do carro inicial do Franklin",
        respostas: ["Azul", "Branco", "Vermelho", "Preto"],
        correta: 1
    },
    {
        pergunta: "Quantos assaltantes morrem na primeira missão?",
        respostas: ["1", "2", "3", "0"],
        correta: 1
    },
    {
        pergunta: "Qual o último golpe do jogo?",
        respostas: ["Assalto ao Banco", "Assalto a joalheria", "Roubo do ouro", "Roubo dos carros"],
        correta: 2
    },
    {
        pergunta: " Qual o Nome do Cachorro de Franklin? ",
        respostas: ["Franklin2", "Chopper", "Mel", "Chop"],
        correta: 3
    },
     {
        pergunta: "O gta V se inspirou em qual cidade real para construir o jogo?",
        respostas: ["Los angeles", "Nova York", "Washington", "Texas"],
        correta: 0
    },
    {
        pergunta: "Qual o nome do filho do Michael?",
        respostas: ["Jason", "Jimmy", "Connor", "Lamar"],
        correta: 1
    }
    
]

//Variáveis de controle
let perguntaAtual = 0
//Qual pergunta está sendo exibida
//Começa na posição 0 //Primeira pergunta
let pontuacao = 0 //Quantas respostas certas 

function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]
    //Pega a pergunta atual dentro do array


    document.getElementById("pergunta").innerText = pergunta.pergunta

    let respostasDiv = document.getElementById("respostas")
    respostasDiv.innerHTML = ""
    //Limpa a div antes de adicionar novas respotas
    pergunta.respostas.forEach(function(resposta, index){
        respostasDiv.innerHTML += `<button onclick="verificarResposta(${index})">${resposta}</button>`
    })
}
function verificarResposta(index) {
    let pergunta = perguntas[perguntaAtual]
    let resultado = document.getElementById("resultado")
    if(index == pergunta.correta) {
            resultado.innerText = "Acertou"
            pontuacao++
    } else{
        resultado.innerText = "Errou"
    }
}

function proximaPergunta() {
    perguntaAtual++
    //vai para a próxima pergunta
    if(perguntaAtual < perguntas.length) {
        mostrarPergunta()
        document.getElementById("resultado").innerText = ""
    } else{
        mostrarResultadoFinal()
    }
}

function mostrarResultadoFinal() {
    document.getElementById("container").innerHTML = `
    <h2>Quiz Finalizado!</h2>
    <p>Sua pontuação foi: ${pontuacao}</p>
    <button onclick="location.reload()">Jogar novamente</button>`
    //acento agudo ao lado do p
    //location.reload() recarrega a página
}
mostrarPergunta()