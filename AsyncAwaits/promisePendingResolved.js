
var pro = new Promise(function(resolve){
    resolve();
})

function callBack(){
    console.log(pro);
}

pro.then(callBack)