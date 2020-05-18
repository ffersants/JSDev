///////////////////////////////////////////////////////////// O B J E C T S //////////////////////////////////////////////////////////////////

// 1. Creating an object. There are three ways of doing it by now:

emptyObject = {};

literalNotation = {
    name: 'Fernando',
    age: 19,
    ninckNames: ['Xaropinho', 'Novinho', 'Polenguinho'],
    greetings: function(){
        console.log(`Hi ${literalNotation.name}!`);
    }
};

sandalia = new Object();
sandalia.cor = 'Preta';
sandalia.tamanho = 39;
sandalia['marca'] = 'Havaianas';

                                                //2. Accessing an object:
//a. Notação de ponto - It can access properties and methods of an object.
nomeInLiteralNotaion = literalNotation.name;//
greetings = literalNotation.greetings();
//the dot is what divides the object on left and the propertie of the object on the right, his name'OPERADOR DE MEMBRO'

//b. Sintaxe de colchetes - It can access only the properties of an object.
corDaSandalia = sandalia['cor'];

                                                //3. Dealing w/ object and its properties:
//a- Changing values.
newName = literalNotation.name = 'Felipe';
newColor = sandalia.cor = 'blue';
emptyMarca = sandalia.marca = '';

//b- Deleting a propertie.
delete literalNotation.ninckNames;




////////////////////////////////////////// F U N C T I O N   C O N S T R U C T O R ////////////////////////////////////////////////////

/* it's a constructor function, it can defines an object and creates when necessary with properties and methods specifieded here.*/
function Hotel(name, rooms, roomTypes, booked){
    //'this.' is used to link the values passed as arguments (when the function is called) to the properties of the object
    this.name = name;
    this.rooms = rooms;
    this.roomTypes= roomTypes;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };   
}
//the key word "new", followed by the calling of the constructor function, creates the object by using the constructor function
var quayHotel = new Hotel('Quay', 40,['twin', 'double', 'suite', 'presidencial'], 25);
console.log(quayHotel)
//the properties of this object 'Hotel' are passed as arguments to the function