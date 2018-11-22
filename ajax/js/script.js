/*
var req = new XMLHttpRequest();
var request = "file:///home/stagiaire/PhpstormProjects/js/ajax/js/tsconfig.json";

req.open('GET', request, false);

req.send(null);

console.log(req);

console.log(req.responseText);
var result = JSON.parse(req.responseText);

console.log(result.user.name);


*/
var req = new XMLHttpRequest();
req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Nantes&APPID=86606b015288f65482550734899d86a2', true);
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.send(null);
console.log(req);

setTimeout(function () {

    if(req.status === 200) {
        console.log("Reponse reçue :", req.status , req.responseText);
        var result = JSON.parse(req.responseText);
    }else{
        console.log("status de la réponse :" , req.status, req.statusText);

    }

},1000);

