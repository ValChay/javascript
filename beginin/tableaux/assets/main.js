'use strict'


var myArray = {

    1: "premier valeur",
    false: "deuxieme valeur",
    "trois": "troixieme valeur"

};

console.log(myArray);

var monTableau = {

    0 : {
        "titre" : "super ce tableau",
        "commentaire" : " whoaouuu"
    },
    1 : {
        "titre" : "super ce tableau",
        "commentaire" : " whoaouuu"
    },
    2 : {
        "titre" : "super ce tableau",
        "commentaire" : " whoaouuu"
    },
};

console.log(monTableau['0']["commentaire"]);

var array= [1,"2",3];
console.log(array);
array.splice(1,0, ["toto", "titi"]);
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.push(true);
console.log(array);


console.log("for of");
for (var i of array){

    console.log(i);
}

var x = 1 ;
{

    console.log()
}
