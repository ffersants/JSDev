class Aluno{
    constructor(nome, idade, turma){
        this.nome = nome
        this.idade = idade
        this.turma = turma

        this.bomAluno = () =>{
            console.log("o cara eh bom aluno viu")
        }

        //or

        /*
        return{
            nome,
            idade,
            turma
        }
        WHY is "this." necessary? 
        */
    }
}


fernando = new Aluno('Fernando S. Ferreira', 19, '3E')

console.log(fernando)

fernando.bomAluno()



