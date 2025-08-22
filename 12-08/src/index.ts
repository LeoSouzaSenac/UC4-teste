import { Cachorro } from "./Cachorro";
import { Calculadora } from "./Calculadora";

// Para podermos criar um objeto da nossa classe 'Cachorro', primeiro criamos uma variável que deve ser do tipo Cachorro
// Depois, atribuimos valor a esta variável usando a palavra reservada 'new' seguida do nome da classe junto de parênteses. Assim chamamos o construtor da classe e devemos, dentro dos parênteses, passar TODOS os valores que nós definimos

// Quando criamos um objeto, chamamos isso de INSTANCIAR O OBJETO DA CLASSE
const meuCachorro:Cachorro = new Cachorro("Bob", "Vira-Lata", 5)
const meuOutroCachorro:Cachorro = new Cachorro("Tobby", "Pinscher", 2)

// Para chamarmos os métodos destes objetos, chamamos o nome da variável + . + o nome do método + ()
meuCachorro.correr()
meuCachorro.latir()

meuOutroCachorro.correr()
meuOutroCachorro.latir()

// Para acessarmos o valor do atributo de um objeto, chamamos o nome da variável + . + o nome do atributo
console.log(meuOutroCachorro.idade)

// Para trocarmos o valor do atributo de um objeto, chamamos o nome da variável + . + o nome do atributo, depois '=' e passamos o novo valor
meuCachorro.nome = 'Bobbyson'
console.log(meuCachorro.nome)


// Crie um novo arquivo chamado Calculadora
// dentro deste arquivo crie a classe Calculadora
// crie os atributos numeroUm e numeroDois
// faça o construtor
// depois, faça os métodos somar, subtrair, multiplicar e dividir
// Após isso, NO ARQUIVO 'index.ts', instancie a calculadora e chame seus métodos

const calculadora:Calculadora = new Calculadora(10,5)
console.log(
'Soma: ', calculadora.somar(),
'\nSubtração: ',calculadora.subtrair(),
'\nMultiplicação:',calculadora.multiplicar(),
'\nDivisão: ', calculadora.dividir()
)