/////////////////////////////////////////////////////////// O B J E C T S //////////////////////////////////////////////////////////////////

// 1. Creating an object. There are three ways of doing it by now:

//First
emptyObject = {};

//Second
literalNotation = {
    name: 'Fernando',
    age: 19,
    ninckNames: ['Xaropinho', 'Novinho', 'Polenguinho'],
    greetings: function(){
        console.log(`Hi ${literalNotation.name}!`);
    }
};//the literal notation is most used for that kind of object that's unic, that's necessary a lot of object in with those propeties and methods

//Third
sandalia = new Object();
sandalia.cor = 'Preta';
sandalia.tamanho = 39;
sandalia['marca'] = 'Havaianas';

//Fourth
function createPerson(nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const fernando = createPerson("Fernando", "Ferreira", 20);


                                                //2. Accessing an object:

//a. Notação de ponto - It can access properties and methods of an object.
nomeInLiteralNotation = literalNotation.name;//
greetings = literalNotation.greetings();
//the dot is what divides the object on left and the propertie of the object on the right, his name'OPERADOR DE MEMBRO'

//b. Sintaxe de colchetes - !!!!!! IT CAN ACCESS ONLY THE PROPERTIES OF AN OBJECT  !!!!!.
corDaSandalia = sandalia['cor'].toUpperCase();

                                                //3. Dealing w/ object and its properties:
//a- Changing values.
newName = literalNotation.name = 'Felipe';
newColor = sandalia.cor = 'blue';
emptyMarca = sandalia.marca = '';

//b- Deleting a propertie.
delete literalNotation.ninckNames;




////////////////////////////////////////// C O N S T R U C T O R  F U N C T I O N   ////////////////////////////////////////////////////

/* it's a constructor function, it can defines an object and creates when necessary with properties and methods specifieded here.*/
function Hotel(name, rooms, roomTypes, booked){
    //'this.' is used to link the values passed as arguments (when the function is called) to the properties of the object
    //so I'm creating a propertie that deserves to the method itself and will receive the value that's passed as argument
    this.name = 'balaranga';
    this.rooms = rooms;
    this.roomTypes= roomTypes;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };   
}




//the key word "new", followed by the calling of the constructor function, creates the object by using the constructor function
//the properties of this object 'Hotel' are passed as arguments to the function
var quayHotel = new Hotel('Quay', 40,['twin', 'double', 'suite', 'presidencial'], 25);
console.log(quayHotel)
console.log(quayHotel.checkAvailability())


////////////////////////////////////////// F A C T O R Y  F U N C T I O N   ////////////////////////////////////////////////////

//new way of writing a constructor function
class Hoteis{
    constructor(nome, quartos, tiposDeQuartos, quartosReservados){
        this.nome = nome;  
        this.quartos = quartos;
        this.tiposDeQuartos = tiposDeQuartos;
        this.quartosReservados = quartosReservados;
    }

    checarDisponibilidade(){
        return this.quartos - this.quartosReservados
    }
}

milEumaNoites = new Hoteis('Mil e uma noites', 80, ['Casal', 'Solteiro', 'Família', 'Bolo Doido'], 37);
console.log(milEumaNoites)
console.log(milEumaNoites.checarDisponibilidade())
