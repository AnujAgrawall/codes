
function bmiCalculator (weight, height) {
    
     bmiCalculator = Math.floor(weight / (Math.pow(height,2)));
  // bmiCalculator = Math.floor(bmiCalculator);
   // return interpretation;
  if (bmiCalculator < 18.5) {
    return("Your BMI is "+ bmiCalculator +", so you are underweight.")
  } else if (bmiCalculator <= 18.5 || bmiCalculator < 24.9) {
    return("Your BMI is "+ bmiCalculator +", so you have a normal weight.")
  } else  {
    return( "Your BMI is "+ bmiCalculator+", so you are overweight.")
  }
  // return bmiCalculator;
}
bmiCalculator(65,1.8);

function loveCalculator() {
let firstName = prompt("enter your name");
let crushName = prompt("enter your crush name");
let n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
alert("congrats "+ crushName + " loves you " + n + "% "); 
     }

// loveCalculator();

// function bmiCalculator(weight,height){
//   height = Math.pow(height,2);
//    bmiCalculator = Math.round(weight / height);
//   return bmiCalculator;
// }