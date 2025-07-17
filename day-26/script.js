// calculate function add button click pe run hoga
function calculate() {
  // input values le rahe hain (error: .value missing tha)
  let number1 = document.getElementById("num1").value;
  let number2 = document.getElementById("num2").value;

  // console log se check karo values aa rahi hain ya nahi
  console.log("Num1:", number1);
  console.log("Num2:", number2);

  // convert string to number (warna 2 + 2 = 22 ho jata hai)
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  // error: variable ka naam galat tha ("reslt" ki jagah "result")
  let sum = number1 + number2;

  // check karo result sahi print ho raha ya nahi
  console.log("Sum:", sum);

  // result id wale element mein result show karo
  document.getElementById("result").innerText = "Result: " + sum;
}
