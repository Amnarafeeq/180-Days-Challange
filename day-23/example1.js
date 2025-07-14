// avaScript mein jab koi runtime error hoti hai (jaise undefined variable ya invalid input), to pura program crash ho jata hai.
// isliye hum try...catch use karte hain taake error hone par program rukhe na, balki usko gracefully handle karein.

try{
    console.log(userName); 
} catch (error){
    console.log("Error:", error.message);
}