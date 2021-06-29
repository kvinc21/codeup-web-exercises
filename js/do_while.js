//Do While Loop
//


let allCones = Math.ceil(Math.random() * (100 - 50) + 50);
console.log("Cones available for sale today " + allCones);

let totalSold = 0;

do {
    let conesBought = Math.ceil(Math.random() * (5 - 1) + 1);

    if ((totalSold + conesBought) > allCones) {
        console.log("I cannot sell you " + conesBought);
        continue;
    }
        totalSold = totalSold + conesBought
        console.log("I have already sold " + totalSold)
        break;
}
while (totalSold < allCones);
console.log("Yay, I sold all my cones ");
// break;

