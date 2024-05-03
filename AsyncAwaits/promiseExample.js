const fs = require("fs");

function asyncFunc(){
    return new Promise(function(resolve){
        fs.readFile("./AsyncAwaits/notes.txt", "utf-8", function(err, data){
            resolve(data);
        })
    })
}

function readData(data){
    console.log(data);
}

// asyncFunc() makes sure data is ready and afterwards then makes sure data upon ready
// is passed to readData.
asyncFunc().then(readData);