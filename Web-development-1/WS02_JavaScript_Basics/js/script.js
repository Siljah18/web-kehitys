console.log("Hello World!");



alert("tervetuloa hienolle nettisivulleni!")

const userName = "Silja";
let age = 21;
const FavoriteAnimal = "Axolotl";

console.log(userName);
console.log(age);
console.log(FavoriteAnimal);

console.log("Hello! My name is " + userName + " and my favourite animal is the " + FavoriteAnimal + ".");

const visitorName = prompt("Mikä on nimesi?");
console.log(visitorName);
console.log("Terve " + visitorName + "! Tervetuloa javascriptin pariin!");

const visitorFavoriteAnimal = prompt("Mikä on lempieläimesi?");
console.log("Hello, " + visitorName + "! Lempieläimesi on " + visitorFavoriteAnimal);

const visitorAge = prompt("How old are you?");

if (visitorAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

function greetUser(name) {
    console.log("Hello " + name + "!");
}

greetUser("Silja");
greetUser("Nita");
greetUser("Nette");

// Exercise 6 – Button

const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    alert("JavaScript works!");
});