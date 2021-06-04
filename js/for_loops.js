//alert("practing for loops")

function showMultiplicationTable (x) {
    for (let index = 1; index < 10; index++) {

        console.log(x + "x" + index + "=" + (x * index));
    }
}
showMultiplicationTable(7);


for (let y = 0; y <10; y++) {
        let random = Math.ceil(Math.random() * 200 - 20) + 20;
        if (random % 2 !== 0) {
            console.log(random + " is even");}
        else{
            console.log(random + "is odd")
        }
}

for (var index = 1, number = ""; index < 10; index++){
    number +="1";
    console.log(index * number)
}

var z = 0;
for (var z = 100; z >= 5; z = z -5) {
    console.log(z);


}
