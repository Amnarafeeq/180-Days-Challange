// example 2: custom error with throw

function divide(a,b){
    if (b === 0){
        throw new Error ("Zero se divide nahi kar sakte!")
    }
    return a / b
}
try{
    console.log(divide(10, 0))
} catch(err){
    console.log("Error:", err.message);
    
}