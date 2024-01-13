// Definindo a classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades
       constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    } 

    // Método
    atacar() {
        // Definindo o ataque com base no tipo
        let atacar;
        switch (this.tipo) {
            case "mago":    
                atacar = "magia";
                break;
            case "guerreiro":
                atacar = "espada";
                break;
            case "monge":
                atacar = "artes marciais";
                break;
            case "ninja":
                atacar = "shuriken";
                break;
            default:
                atacar = "ataque genérico";
        }

                // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${atacar}.`);
    }
}
// Criando novos heróis
let heroi1 =  new Heroi("Pedro Pedreira", 35, "guerreiro");
let heroi2 =  new Heroi("Harry Talentoso", 21, "mago");
let heroi3 =  new Heroi("Ivan Paziamore", 33, "monge");
let heroi4 =  new Heroi("Naruto Shutu Ucho", 28, "ninja");

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();


