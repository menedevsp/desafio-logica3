class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.defineAtaque()
    }

    defineAtaque(){
        if(this.tipo == "mago"){
            this.ataque = "magia"
        } else if(this.tipo == "guerreiro"){
            this.ataque = "espada"
        } else if(this.tipo == "monge"){
            this.ataque = "artes marciais"
        } else if(this.tipo == "ninja"){
            this.ataque = "shuriken"
        } else {
            this.ataque = "arma"
        }
    }

    mensagem(){
        return `O ${this.tipo} atacou usando ${this.ataque}`
    }
}

let heroi = new Heroi("Guilherme", 30, "mago")

console.log(heroi.mensagem())