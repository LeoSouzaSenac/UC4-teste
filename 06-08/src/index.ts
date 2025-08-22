// 1 - Você tem uma lista dos membros da Sociedade do Anel. Use um for para imprimir somente os hobbits (se você não sabe quais são hobbits ou nem o que é um hobbit, pesquisa né).

const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir']

for (let i = 0; i < sociedade.length; i++) {
    if (sociedade[i] === 'Frodo'
        || sociedade[i] === 'Sam'
        || sociedade[i] === 'Merry'
        || sociedade[i] === 'Pippin') {
        console.log(`Hobbit encontrado: ${sociedade[i]}`)
    }
}


// 2 - Você tem uma lista de personagens de Star Wars. Use for...of para imprimir todos os personagens que são jedis.

const personagensSW = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
];

for (let personagem of personagensSW) {
    if (personagem.jedi == true) {
        console.log(`Jedi encontrado: ${personagem.nome}`)
    }
}

// 3 - Você tem um objeto com personagens de Naruto e seus clãs. Use for...in para imprimir todos os clãs e seus membros.

const personagensNaruto = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
};

for (let personagem in personagensNaruto) {
    console.log(`${personagem} pertence ao clã ${personagensNaruto[personagem as keyof typeof personagensNaruto]}`)
}


// 4 - Você tem uma lista de personagens de Dragon Ball e seus níveis de poder. Use forEach para imprimir somente aqueles com nível de poder maior que 8000.

const personagensDBZ = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
];

personagensDBZ.forEach((personagem, i) => {
    if (personagem.poder > 8000) {
        console.log(`O poder de ${personagem.nome} é de mais de 8000!`)
    }
})

// 5 - Você tem uma lista de Pokémon. Use while para capturar Pokémon até encontrar um Pokémon lendário.

const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];

let contador = 0

while (contador < pokemons.length) {
    if (pokemons[contador] === 'Mewtwo') {
        console.log('Pokémon lendário encontrado: Mewtwo!')
        break
    }
    console.log(`Capturando ${pokemons[contador]}`)
    contador++
}

// 6 - Você está jogando um jogo de aventura e precisa andar pela Terra Média até chegar em Mordor. Use do...while para simular os passos.

let passos = 0;
const passosParaMordor = 5;

do {
    console.log(`Dando passo ${passos}`)
    passos++
} while(passos < passosParaMordor) {
    console.log('Chegamos em Mordor!')
}

