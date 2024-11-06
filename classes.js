class heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    ataque() {
      let ataque;
      
      if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }

const herois = [
    new heroi('Lauri', 40, "guerreiro"),
    new heroi('Felipe', 5000, "mago")
];

for (let aux = 0; aux < herois.length; aux++) {
    herois[aux].ataque();
}