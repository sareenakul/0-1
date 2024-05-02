function findSum(n){
    let res = 0;
    for(let i = 0; i < n; i++){
        res += i;
    }
    return res;
}


function callFunc(){
    return findSum(100);
}


setTimeout(callFunc, 2000)
console.log("Async is working here 2 seconds late");