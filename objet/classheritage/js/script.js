'use strict'

/*
const object1 = {

    prenom: "Val",
    nom: "Chay",
};

const object2 = Object.assign({ville: "Nantes"}, object1);

console.log(object1);
console.log(object2);
*/

class Figure {

    constructor(name) {
        this.name = name;

    }

    air() {

        return ` Ne possède pas de calcul d'air`;
    }
}


class Rectangle extends Figure {

    constructor(name, hauteur, largeur) {

        //REcupère le nom de la figure
        super(name);
        this.hauteur = hauteur;
        this.largeur = largeur;
    }

    air() {
        return this.hauteur * this.largeur;
    }
}



class Cercle extends Figure {
    constructor(name, rayon) {
        super(name);
        this.rayon = rayon;
    }


    air() {
        return (this.rayon * this.rayon) * Math.PI;
    }
}

var figure = new Figure("figure");
var rectangle = new Rectangle("rectangle", 10, 5);
var cercle = new Cercle("cercle", 5);

console.log(figure.air());
console.log(rectangle.air());
console.log(cercle.air());
