const person = function(firstName) {
	this.firstName = firstName;
};

const me = new person('Oliver');

console.log(me);

// function that use new are constructors
// new operator generates a new empty object for the new instance, and give access to empty object in constructor fucntion via the 'this' value
