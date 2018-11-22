'use strict'
/*Nous définissons un objet game à l'aide du constructeur Phaser.Game. Ce constructeur prend 5
paramètres*/

//largeur, hauteur, style daffichage, dans l'id content
var game = new Phaser.Game(800,600,Phaser.AUTO,'content',{
    preload: preload, create:
    create,update:update});
//les élements qui sont chargés avant le début du jeux
function preload(){
    console.log("hello");
    game.load.image("zero","/assets/image/zero.png");

}
//les élements créer
function create(){
    // on créer un objet sprite avec 3 paramêtre coordonnée x,y et le nom de limage
    /*monSprite=game.add.sprite(0.5,0.5,'rick');*/
    this.logo=game.add.sprite(0,0,"zero");
    console.log("create");
}

//nombre d'image par seconde
function update(){
}


/*
var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {preload: preload, create: create, update: update});

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#303b98';
}

function create() {}
function update() {}


*/
