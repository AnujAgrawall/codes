const beer = () => {
  let  i = 99;
    while (i >= 0) {
        if (i <= 99 && i > 1) {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
            console.log("Take one down and pass it around, " + (i - 1) + "  bottles of beer on the wall.");
        } else if (i === 1) {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        } else if (i < 1) {
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        } else {
            return (i);
        }

        i--;
      
    }
}

console.log(beer());
