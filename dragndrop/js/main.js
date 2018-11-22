'use strict';

var dragImg = new Image(); // Il est conseillé de précharger l'image, sinon elle risque de ne pas s'afficher pendant le déplacement

dragImg.src = 'image/rick.jpeg';


// on recupere notre balise et on la rend draggable et pose une event dessus
document.querySelector('*[draggable="true"]').addEventListener('dragstart', function(e) {

    e.dataTransfer.setDragImage(dragImg, 80, 80); // Une position de 40x40 pixels centrera l'image (de 80x80 pixels) sous le curseur
});


// Il faudra également une balise ou l'on peut droppé

dropper.addEventListener('dragenter', function() {

    dropper.style.borderStyle = 'dashed';

});


dropper.addEventListener('dragleave', function() {

    dropper.style.borderStyle = 'solid';

});

document.querySelector('#dropper').addEventListener('dragover', function(e) {
    e.preventDefault(); // Annule l'interdiction de "drop"
}, false);


dropper.addEventListener('drop', function(e) {

    e.preventDefault(); // Cette méthode est toujours nécessaire pour éviter une éventuelle redirection inattendue

    alert('Vous avez bien déposé votre élément !');

    console.log("hello");
    // Il est nécessaire d'ajouter cela car sinon le style appliqué par l'événement « dragenter » restera en place même après un drop :

    dropper.style.borderStyle = 'solid';

});

// Pour drop des fichiers

dropper.addEventListener('drop', function(e) {

    e.preventDefault();


    var files = e.dataTransfer.files,

        filesLen = files.length,

        filenames = "";


    for (var i = 0 ; i < filesLen ; i++) {

        filenames += '\n' + files[i].name;

    }


    alert(files.length + ' fichier(s) :\n' + filenames);

});


// Mise en pratique


(function() {


    var dndHandler = {


        // Cet objet est conçu pour être un namespace et va contenir les méthodes que nous allons créer pour notre système de drag & drop


    };


    // Ici se trouvera le code qui utilisera les méthodes de notre namespace « dndHandler »


})();
