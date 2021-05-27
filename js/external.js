"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var userInput = prompt("What is your favorite color?");
console.log("The user entered:" + userInput);
alert("Great, " + userInput + " is my favorite color too!");
// Answer for exercise 3
alert("The price for the movies is: " + (4+5+1))

alert("I am getting paid:" + (400 * 6) + (380 * 4) + (350 * 10))

alert("Is the class full?");
var full = confirm("Is the class full?");
var conflict = confirm("Is there a conflict");


var premium = confirm("Are you a premium member? ");
var quantity = Number(prompt("How many items did you buy?"));
var expired = confirm( "Is the coupon expired? ")


var username = 'codeup';
var password = 'notastrongpassword';

var password_is_five_characters = password.length >= 5;
var password_does_not_contain_username = !password.includes(username);
var username_less_than_20_characters = username.length <= 20;
var contains_no_whitespace = password === password.trim() && username === username.trim()


