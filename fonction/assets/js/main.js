'use strict';
function paramDefault(par1,par2,par3 = 10){

    return par1 + par2 + par3;
}

console.log(paramDefault(5,5));



//permet de définir une fontion qui va additionné les valeurs passé en param lors de l'appel
// sans préciser le nombre d'argument au moment de créer la fonction
function useRest(...rest){
    var resultat = 0;
    for (var i = 0; i < rest.length ; i++) {
        resultat += rest[i];

    }
    return resultat;
}

/*console.log(useRest(2));
console.log(useRest(2, 2));
console.log(useRest(2, 2,2));
console.log(useRest(2, 2,2,2));*/

// Spread

function useSpread(x,y,z){

    return x + y + z ;
}

var mesArgs = [2,2,2,2,2];
console.log(useSpread(...mesArgs));


// Les closures

// permet d'acceder a la variable let via les fonctions fille

function init(){

    let local = "variable local";
    var afficherLocal = function(){
        console.log(local);
    }
    afficherLocal();
}

init();

// Les callback, fonction passé en param dautre fonction

var arrayString = ["un","deux","trois"];

arrayString.forEach(function (element) {

});

var tab = [1,2,3,4,5,6,7,8,9,10];

function nbrePaire(tabNbre){

    for (var i of tabNbre){

        if (i % 2 === 0){

            console.log(i);
        }
    }
};



nbrePaire(tab);






