'use strict'

window.addEventListener("load", function(){

    var inputText = document.querySelector("input");
    inputText.addEventListener("keypress", function(event){


        var regex = new RegExp("[0-9A-Z]");

        if(!regex.test(event.key)){
            console.log(event);
        }else{

            event.preventDefault();
            console.log("Interdit");
        }

        })
})