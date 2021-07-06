// July 6th 2021


//  Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]

function capitalizeAllNames() {
    var names = ["bob", "seth", "tofu", "toyota"];
    return names.map(a => a.toUpperCase());
}

// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]

function capitalizeFirstLetter() {
    let names = ["bob", "seth", "tofu", "toyota"];
    let letter = names[0].toUpperCase();
    console.log(letter);
}