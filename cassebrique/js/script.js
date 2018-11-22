var canvas = document.getElementById("myCanvas");


// on passe a notre balise canvas le context de rendu 2d
var ctx = canvas.getContext("2d");

// Point de départ
var x = canvas.width/2;
var y = canvas.height-30;
var ballRadius = 10;


// mouvement
var dx = 2;
var dy = -2;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// pour gardé constament a jour le dessin du canvas
function draw() {
    // drawing code

    // efface le canvas avant chaque frame
    // en parametre coord x,y superieur gauche et inférieur droit
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    // Prise en compte des collisions
    // si la balle touche le bord supérieur du Canvas on inverse son mouvement
    if(y + dy < 0) {
        dy = -dy;
    }

}
// la fonction draw sera executé intervalle de 10
setInterval(draw, 10);

