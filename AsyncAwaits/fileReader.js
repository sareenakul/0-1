const fs = require("fs");
//file systum Module

fs.readFile("./AsyncAwaits/notes.txt", "utf-8", function(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})