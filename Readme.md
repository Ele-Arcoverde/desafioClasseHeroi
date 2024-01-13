https://github.com/Ele-Arcoverde/desafioClasseHeroi.git 

### Heroi é o nome da classe que está representando o herói (objeto) na aventura. 
A classe *organiza e estrutura o código*, nela estão contidos as propriedades e comportamentos do(s) objeto(s).

O **Constructor** é o responsável por determinar as *propriedades ou características* do objeto heroi:
- nome 
- idade
- tipo

O Construtor é um método especial dentro da classe, e é chamado automaticamente sempre que uma nova instância da classe é criada, usando a palavra `new + o nome da Classe`, para que se determine individualmente as novas propriedades de cada objeto, ou seja, objetos com valores diferentes. 

O **Método** é o comportamento do objeto, neste caso, **atacar**.

O ataque foi definido com base no tipo do heroi e forma de ataque.

Usei uma *Estrutura de Switch Case* para organizar as condições do ataque conforme o tipo do heroi.

A *Saída* exibiu a mensagem no terminal conforme o proposto no desafio. Ex: "`O (tipo) + (nome) atacou usando (ataque).`"
- O (monge) (Ivan Paziamore) atacou usando (artes marciais).

### Fora do escopo da Classe criei novas instâncias de heróis e chamei o método atacar para cada um deles. 
- `let heroi3 =  new Heroi("Ivan Paziamore", 33, "monge");`