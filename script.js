class Aluno {
 
  constructor(nome, cpf, codTurma) {
    this._nome = nome;
    this._cpf = cpf;
    this._codTurma = codTurma;
  }
  //Criando GETTER e SETTER
  get nome() {
    return this._nome;
  }
  get cpf() {
    return this._cpf;
  }
  get codTurma() {
    return this._codTurma;
  }

  imprimirDados() {
    console.log(`Nome do Aluno ${this._nome}, com cpf ${this._cpf} e o codigo da turma ${this._codTurma}`)
  }
}
const aluno = new Aluno('Gustavo', 123546789, 'axx-dd')

aluno.imprimirDados()

