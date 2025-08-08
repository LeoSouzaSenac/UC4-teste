let nomeTurma:string = "25-1N"
let numeroAlunos:number = 20

let nomes:string[] = ["Fulano", "Beltrano"]

function mensagem():void {
    console.log("Olá")
}

function calcula(num1:number, num2:number):number {
    return num1 + num2
}
console.log(calcula(10, 90))

// Exercicio 1
function alunoInfo(nomeAluno:string, idadeAluno:number, estaMatriculado:boolean):void{
    console.log(`Aluno ${nomeAluno}, ${idadeAluno} anos, está matriculado: ${estaMatriculado}`)
}

alunoInfo("Leo", 30, true)




//Exercicio 2
let alunos:string[] = ["Leo", "Ana", "Bob", "John", "Ross"]

function listaAlunos(alunos:string[]):string {
    let lista:string = "Alunos:"
    for(let i = 0; i < alunos.length; i++){
        lista += "\n" + alunos[i]
    }
    return lista
}
console.log(listaAlunos(alunos))

// Exercicio 3
function saudacao(nomeAluno:string):void{
    console.log(`Olá, ${nomeAluno}! Bem-vindo(a) à turma.`)
}

saudacao('Leonardo')


// Exercicio 4
function calcularMedia(nota1:number, nota2:number, nota3:number):number {
    return (nota1 + nota2 + nota3)/3
}
console.log("Média final: ",calcularMedia(10,9,5))

//Exercicio 5

function contarAlunos(nomesAlunos:string[]):void{
    console.log("Total de alunos: ", nomesAlunos.length)
} 

contarAlunos(["Fulano", "Ciclano", "Beltrano"])

