(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,


        getArea: function () {

           let area = (Math.PI * Math.pow(this.radius,2));

            return area;


        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding === true){
                return doRounding
            } else {
                return Math.floor(doRounding);
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    console.log(circle.getArea());


})();
