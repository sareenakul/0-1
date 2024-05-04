
function promiseKrenge(){
    let fam = new Promise(function(resolve){
        setTimeout(resolve, 10000);
    });
    return fam;
}

const value = promiseKrenge();

value.then(function(){
    console.log("The promise has been reached");
});