let str = "look"

// (.)\1 ka mtlb ha koi bhi ek character jo 2 ya usse ziada bar repeat ho

let repeat = /(.)\1/
console.log(repeat.test(str));
