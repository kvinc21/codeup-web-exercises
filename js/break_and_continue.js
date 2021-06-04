

var z = parseInt(prompt("Pick a odd number 1-50"));
    if (z % 2 != 0){
        // number isn't even


}
console.log("Number to skip is: " + 27);
for (let index = 1; index < 50; index++) {
    if(index === z ) {
        console.log("Yikes! Skipping number: " + 27);
        continue
    }
    if (index %2 !==0) {
        console.log("Here is an odd number: " + index);
    }
}

