// default import (multiply function ko kisi bhi naam se import kar sakte ho)
import multiply from './math.js'; // default ko curly braces mein nahi likhte

// named imports – add aur subtract ko unke naam se la rahe hain
import { add, subtract } from './math.js';

// import * as – saare exports ko ek object (mathFunctions) mein la rahe hain
import * as mathFunctions from './math.js';

// named import with alias – kisi export ka naam change kar ke import
import { message as greeting } from './greet.js';


// console outputs
console.log(greeting);  // greet.js ka message

console.log("2 + 3 =", add(2, 3));           // named import
console.log("10 - 4 =", subtract(10, 4));    // named import
console.log("3 × 5 =", multiply(3, 5));      // default import

// mathFunctions ka use
console.log("mathFunctions.add(6, 7) =", mathFunctions.add(6, 7));  // object style access
