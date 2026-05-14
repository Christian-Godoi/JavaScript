const fs = require('fs')

fs.writeFileSync(
    "mensagem.txt",
    "Criei um bloco do notas com node.js"
)
console.log("Arquivo criado com sucesso!")

/*Crie um bloco de notas com seu nome, turma, curso e filme favorito*/

fs.writeFileSync(
    "informacoes.txt",
    "Christian Godoi; \n 3°A - Técnico em desenvolvimento de sistemas; \n Projeto Almanaque"
)
console.log("Arquivo criado com sucesso!")

// criação de arquivo JSON

const pessoa = {
    nome: "Christian",
    idade: "17",
    cidade: "Ferraz"
}

fs.writeFileSync(
    "pessoa.json",
    JSON.stringify(pessoa)
)
console.log("Json criado com sucesso")

/*Crie um arquivo JSON chamado informações com seu nome, idade, telefone e email*/

const informacoes = {
    nome: "Christian",
    idade: "17",
    telefone : "11972973615", 
    email : "christiangodoi3@gmail.com"
}

fs.writeFileSync(
    "informacoes.json",
    JSON.stringify(informacoes)
)
console.log("Json criado com sucesso")

//npm install docx -> baixa a biblioteca do word


//Importar partes específicas da biblioteca word-
const {
    Document, //Criar o word 
    Packer, //trasnformar o documento em word
    Paragraph, //Cria parágrafos
    TextRun, //Adicionar textos
} = require("docx")


//Criando um documento do word
const doc = new Document({
    //página -> seção -> parágrafo -> textos
    sections: [
    {
        //configurações da seção (margem, tamanho da página...)
        properties: {},
        // filhos da seção - funciona como o body, tudo que fica dentro dele, irá aparecer como: textos, tabelas, imagens, etc
        children: [
            new Paragraph({
                children: [ //titulo do word
                    new TextRun("Arquivo Word")
                ]
            }),
            new Paragraph({
                children: [
                    new TextRun("Textos importantes")
                ]
            })
        ]
    }
    ]
})
Packer.toBuffer(doc)
.then((buffer) => {
    fs.writeFileSync(
        "relatorio.docx",
        buffer
    )
    console.log("O word foi criado")
})
