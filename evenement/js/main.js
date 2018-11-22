'use strict'

window.addEventListener("load", function(){
   var button = document.querySelector("#button");

   button.addEventListener("click", function () {
       var inpuText = document.querySelector("div input");
           console.log(inpuText.value);
   });
    var buttonList = document.querySelectorAll("#buttonList");

   for (var buttonType of buttonList){
       buttonType.addEventListener("click",function (event) {
           var divDisplay = document.querySelectorAll("#display");
           console.log(event.target);

           switch(this.innerText){
               case "Vert":
                   divDisplay.style.backgroundColor = "green";
                   break;
               case "Rouge":
                   divDisplay.style.backgroundColor = "red";
                   break;
               case "Noir":
                   divDisplay.style.backgroundColor = "black";
                   break;
               case "Rose":
                   divDisplay.style.backgroundColor = "pink";
                   break;
           }

       })

    }

});