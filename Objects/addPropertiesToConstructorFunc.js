
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person('Lydia', 'Hallie');
  //WWRRROOOOOOOOOOOOOONGG!!!
  Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  //EEEERRROOOOOOORR!!!!!!!!!
  console.log(member.getFullName());

/*You CAN'T add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, 
you have to use the prototype instead. 
So in this case......
*/
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

/*would have made member.getFullName() work. 

Why is this beneficial? Say that we added this method to the constructor itself. 

Maybe not every Person instance needed this method. 
This would waste a lot of memory space, since they would still have that property, which takes of memory space for each instance. 
Instead, if we only add it to the prototype, we just have it at one spot in memory, yet they all have access to it!

Credits: https://github.com/lydiahallie/javascript-questions/tree/master/en-EN
*/