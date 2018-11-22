

function successCallback(resultat){
    
    console.log("Lopération à réussi: " + resultat );
}

function fallureCallback(resultat){
    
    console.log("Lopération à échoué: " + resultat );
}

function newPromise(){
    
    return newPromise((resolve, reject)=>{
        
        setTimeout(function(){
            resolve('foo');
            
        }, 300);
    })
}

var promise = newPromise();
    
    promise.then(function(value){
console.log(value);
})

console.log(promise);

