var artista1 = {
    nome: "Manoel Gomes",
    anoDeLançametoPrimeiroCd: 2020,
    listaDeMelhoresMusicas: ["Caneta azul", "Lá ele", "Eu vou deixar de ser besta"],
    informacaoDosIntegrantes: [
        {
        nomeCompleto: "Manoel Gomes",
        paísDeOrigem: "Brasil",
        idade: 53
        },
    ],
    estiloDoArtista: "Brega"
}

var artista2 = {
    nome: "Joelma",
    anoDeLançametoPrimeiroCd: 2016,
    listaDeMelhoresMusicas: ["Não teve amor", "Dançando Calypso", "Meu amor chegou"],
    informacaoDosIntegrantes: [
        {
        nomeCompleto: "Joelma da Silva Mendes",
        paísDeOrigem: "Brasil",
        idade: 48
        },
    ],
    estiloDoArtista: "Forró"
    }
    
var artista3 = {
    nome: "Ivete Sangalo",
    anoDeLançametoPrimeiroCd: 1999,
    listaDeMelhoresMusicas: ["Quando a chuva passar", "Se eu não te amasse tanto assim", "Não precisa mudar"],
    informacaoDosIntegrantes: [
        {
            nomeCompleto: "Ivete Sangalo",
            paísDeOrigem: "Brasil",
            idade: 50
        }
    ],
    estiloDoArtista: "Axé"
}

var database = []

database.push(artista1)
database.push(artista2)
database.push(artista3)
console.log(database)

database.sort()
console.log(database)

database.pop()
console.log(database)

