'use strict';

/*var divTitle = document.querySelector("#title");
console.log(divTitle.firstElementChild.innerHTML);*/
var titre = document.querySelector("#titre h2");

var link = document.querySelectorAll("div img");
console.log(link);

titre.innerText = " mon nouveau titre c'est saaaaaa";

for (let img of link) {
    img.setAttribute("src", "img/fallout.jpeg");
}

var div = document.createElement("div");
//Créer balise
div.setAttribute("id", "paragraphe");

// valeur
var content = `
                
                <p> Super parapgraphe</p>
                <p> Super parapgraphe</p>
                <p> Super parapgraphe</p>
                `;

// attribution valeur dans balise créer
div.innerHTML = content;

// pour inserer le nouveau contenu on doit récupéré
// l'élemeent ds lequel on veut le placé
var body = document.querySelector("body");
body.appendChild(div);

var divLink = document.querySelector("#link");
body.insertBefore(div, divLink);

var lien = document.querySelector('#lien');

/*for (let ii = 0; ii <= 10 ; ii++) {

}*/

