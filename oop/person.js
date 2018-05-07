const Person = function(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
};

const me = new Person('Oliver', 'Mead', 27);

console.log(me);

// function that use new are constructors
// new operator generates a new empty object for the new instance, and give access to empty object in constructor function via the 'this' value
// new operator creates a new object and uses it as return value implicitly
// still use es5 function because arrow functions don't bind 'this'

const person2 = new Person('Tom', 'Smith', 20);
console.log(person2);
