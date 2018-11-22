'use strict'

var personne = {

    name:'chaillon',
    firstName : 'Val',
    city : "Nantes",
};

console.log(personne);
console.log(personne.firstName);

var personne2 = {

};

var pseudo = "Val";
var age = 31;

var humain = {

    pseudo,
    age,
};

console.log(humain);
console.log(humain.pseudo);

function Person(name, firstName, city){

    this.name = name;
    this.firstName = firstName;
    this.city = city;

    this.showCity  = function(){
        console.log(" j'habite à " + this.city);
    }
}

var val = new Person("chaillon","Valentin", "Nantes");
console.log(val.firstName);

val.showCity();

var paul = new Person("personne","Paul", "Lilles");
paul.showCity();
console.log(val.firstName);

Person.prototype.fullName = function(){

    return "Je m'appelle " + this.firstName + " " + this.name;
};

console.log(val.fullName());

// class static DAte

 var date = new Date();
/* console.log(date.toLocaleDateString("fr-French"));*/

// class static string

var string = new String("super chaine");
console.log(string);

var person = {

    nom: "chay",
    prenom: "val",
}


var rand = Math.random() * 10;
console.log(rand);
console.log(rand);