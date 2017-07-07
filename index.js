'use strict';

//function statement
/*function greet(){
	console.log('Dye');
}
//greet();

//functions are first class
function logGreeting(fn){
	fn();
}
logGreeting(greet);

var greetme = function(){
	console.log('GET GREETED TWICE');
}
greetme();
logGreeting(greetme);

//functions on the fly
logGreeting(function(){
	console.log('BASICALLY YOU CAN USE FUNCTION ANYWHERE LIKE STRING INTEGER SIMPLE ANYTHING.');
});*/

/*------------------------------------------------------*/
//var greet = require('./greet.js');

//greet();
/*------------------------------------------------------*/

/*var person = {
	firstname:'Moan',
	lastname:'Does',
	greet:function(){
		console.log('What' + ' ' + this.firstname + ' ' + this.lastname + '?');
	}
}
person.greet();
console.log(person['firstname'] + ' ' + person['lastname']);*/

/*----------------------------------------------------------------*/

/*function Person(firstname, lastname){
	this.firstname	= firstname;
	this.lastname	= lastname;
}
var john = new Person('Dawn', 'Doe');
console.log(john.firstname + ' ' + john.lastname);

Person.prototype.greet = function(){
	console.log(this.firstname + ' ' + this.lastname + ' What Is The Meaning Of Doe Is It Something Related To Hoe.');
}
john.greet();

var jane = new Person('Wan', 'Goe');
jane.greet();*/

/*------------------------Pass By Reference-----------------------*/

//Pass By Reference
/*function changeObj(d){
	d.prop1 = function(){};
	d.prop2 = {};
}
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);*/

/*---------------------------- Immediately Invoked Function ----------------------------------*/

/*(function(lastname){
	var firstname = 'Fan';
	console.log(firstname + ' ' + lastname);
}('Doe'));

var firstname = 'John Doe';
console.log(firstname);*/

/*--------------------------------------------------- Node Event Emitter ---------------------------------------------*/

/*var Emitter = require('./greet.js');

var emtr = new Emitter();

emtr.on('greet', function(){
	console.log('Greet Function Emitted 1');
});

emtr.on('greet', function(){
	console.log('Greet Function Emitted 2');
});
console.log('Hello');
emtr.emit('greet');*/

/*------------------------------------------------ Template Literals -------------------------------------------------*/

/*var name = 'Kaun Doe';
var greet = 'Arey John Doe ' + name;
var greet2 = `Waun Doe ${ name }`;

console.log(greet);
console.log(greet2);*/

/*-------------------------------------------------- Classes --------------------------------------------------*/

/*class Person{
	constructor(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
	}

	greet(){
		console.log('What ' + this.firstname + ' ' + this.lastname);
	}
}

var john = new Person('John', 'Does');
john.greet();*/

/*-------------------------------------------------- Files or FS --------------------------------------*/
/*var fs = require('fs');

var pack = fs.readFileSync(__dirname + '/package.json', 'utf8');
console.log('Synchoronous');

var pack = fs.readFile(__dirname + '/package.json', 'utf8', function(err, data){
	console.log(data);
	console.log('Asynchoronous');
});
console.log('Desi Code');*/

/*--------------------------------------------------- Stream ----------------------------------------------*/

/*var fs = require('fs');

var file = fs.createReadStream(__dirname + '/lorem.txt', {encoding:'utf8'});
file.on('data', function(chunk){
	console.log(chunk.length);
});
console.log('Lorem ipsum dolor sit amet amet');*/

/*--------------------------------------------------- Web Server ----------------------------------------*/

var http = require('http');
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello Worldwa\n');
}).listen(3000, '127.0.0.1');