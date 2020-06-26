//https://pt.stackoverflow.com/questions/42962/o-que-%C3%A9-prot%C3%B3tipo-javascript
//https://medium.com/trainingcenter/heran%C3%A7a-e-prot%C3%B3tipos-no-javascript-2c1e60e005a2

// var x = Object.create(null); // O [[Prototype]] de x é nulo...
// x.a = 10;                    // ...e ele possui uma propriedade "a" valendo 10
// var y = Object.create(x);    // O [[Prototype]] de y é x...
// y.b = 20;                    // ...e ele possui uma propriedade "b" valendo 20

// console.log(y.a); // 10
// Object.getPrototypeOf(y) == x;

function ClasseDeX() { // Desnecessário...
    this.a = 10;
}
var x = new ClasseDeX();


function ClasseDeY() {
    this.b = 20;
}
ClasseDeY.prototype = x; // Aqui estou instruindo o construtor a usar x como protótipo de
                         // todo objeto criado via "new ClasseDeY()"

var y = new ClasseDeY(); // O campo especial [[Prototype]] de y agora contém referência pra x

console.log(y.c); // 10
Object.getPrototypeOf(y) == x; // true

/*
isso tudo é basicamente pro objeto filho ir buscar no pai aquele determinado atributo ou método que não encontrar em sua estrutura


Imagine que queremos pegar uma propriedade qualquer de um objeto. Quando fizermos a requisição desta propriedade, o engine vai 
primeiramente olhar no objeto em si e ver se ela existe, se ela não existir então ele vai olhar no __proto__ deste objeto, 
que é o protótipo, se não existir ali também, então ele vai olhar no __proto__ deste __proto__ e assim vai até ele encontrar um 
objeto com uma propriedade __proto__ igual a null . ASSIM COMO EM console.log(y.c)
*/

//////////////outro exemplo........
var obj = {}
obj.__proto__.foo = 'Olá'

console.log(obj) //
console.log(obj.foo) // Olá
/*
Todos os objetos tem um método chamado hasOwnProperty , esse método retorna true ou false dependendo se o objeto em si 
contém uma determinada propriedade. Testar em cima do __proto__ vai sempre retornar false .
*/

console.log(obj.hasOwnProperty(foo))

//Como já falamos antes, toda função tem uma propriedade prototype que é diferente da sua outra propriedade __proto__ . 
//Isto porque prototype é um objeto que contém outros objetos, incluindo o __proto__ . 
//Portanto o __proto__ de um prototype de uma função é igual ao nosso Object.prototype , 
//o que é razoavelmente complicado de entender só em palavras, mas em códigos temos algo assim:
function func() {}
console.log(func.prototype.__proto__ === Object.prototype) // true
console.log(func.prototype === func.__proto__) // false