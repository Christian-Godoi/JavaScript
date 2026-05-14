function adicionar() {
    let tarefa = document.getElementById("tarefa").value 
    let lista = document.getElementById("lista")
    let tarefaInput = document.getElementById("tarefa")

    // Avisar se a tarefa tiver vazia
    
    if(tarefa == "") {
        alert("Digite uma tarefa")
        return // para cancelar a função, fazendo com que nao crie um <li> vazio
    }

    //Criar o <li>

    let novoItem = document.createElement("li")
    novoItem.innerText = tarefa

    //Adicionando o <li> no site
    lista.appendChild(novoItem)

    //Limpar o input
    tarefaInput.value = ""

    //Apagar a tarefa

    novoItem.onclick = function() {
        lista.removeChild(novoItem)
    }



}

