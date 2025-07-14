// example 4: user input ke saath graceful handling

function getAge(input){
    try{
        const age = Number(input)
        if (isNaN(age)){
            throw new Error ("Please enter a valid number for age.")
        }
        if (age < 0){
            throw new Error("Age cannot be negative.")
        }
        console.log(`Your age is ${age}`);
    } catch(err){
        console.log("Input error:", err.message);
    }
}
getAge("Amna");    // Invalid input
getAge(-5);        // Negative number
getAge(21);        // Valid