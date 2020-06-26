class Aluno{
    constructor(nome, idade, turma){
        this.nome = nome
        this.idade = idade
        this.turma = turma

        this.bomAluno = () =>{
            console.log("eh bom aluno viu")
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

// PILAR DA HERANÇA EM OBJETOS CLASS
class AlunoDeOutraEscola extends Aluno{
    constructor(nome, idade, turma, escolaAntiga){
        super(nome, idade, turma)// O SUPER É QUEM ACESSA OS PARAMETROS DA CLASSE PAI
        this.escolaAntiga = escolaAntiga;
    }
}

bruna = new AlunoDeOutraEscola("bruna", 18, '3E', 'CEF31')
console.log(bruna)


