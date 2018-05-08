// Protypical Inheritance

// function that use new are constructors
// new operator generates a new empty object for the new instance, and give access to empty object in constructor function via the 'this' value
// new operator creates a new object and uses it as return value implicitly
// still use es5 function because arrow functions don't bind 'this'

const Person = function(firstName, lastName, age, likes = []) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.likes = likes;
};

// An prototype object that got everything we want to share via contructor function
Person.prototype.getBio = function() {
	let bio = `${this.firstName} is ${this.age}.`;

	this.likes.forEach(like => {
		bio += ` ${this.firstName} likes ${like}.`;
	});

	return bio;
};

Person.prototype.setName = function(fullName) {
	const names = fullName.split(' ');
	this.firstName = names[0];
	this.lastName = names[1];
};

const me = new Person('Oliver', 'Mead', 27, ['Teaching', 'Biking']);
me.setName('Alexis Turner');

console.log(me.getBio());

const person2 = new Person('Tom', 'Smith', 20);
console.log(person2.getBio());
