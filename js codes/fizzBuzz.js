let output = [];
 // let count = 1;
function fizzBuzz() {
    for (let count = 1; count <= 100; count++) {
        if (count % 3 == 0 && count % 5 == 0) {
        output.push("Fizz Buzz")
    }else if (count % 5 == 0) {
        output.push("Buzz")
    }else if (count % 3 == 0) {
       output.push("Fizz");
    }else{
          output.push(count);
    }
         
    }
      
    
    // count++;

console.log(output);
}
console.log(fizzBuzz());
