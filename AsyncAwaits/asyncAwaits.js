function asyncKrenge(){
    setTimeout(function(){
        console.log("AsyncKrenge is loaded");
    }, 2000)
}

async function main(){
    let value = await asyncKrenge();
    console.log("Runs after main is called/ parallel meanwhile value awaits asyncKrenge");
}

main();
console.log("Runs first/ parallel meanwhile main is being called");