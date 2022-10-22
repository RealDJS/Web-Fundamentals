console.log("It worked!")
// practically a PRINT statement in python
const favoriteFoods = [" steak", " ginger beer", " german pancakes"];

const newP = document.createElement("p");

newP.textContent = `My Favorite foods: ${favoriteFoods}`;

document.body.appendChild(newP);


const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

console.log(weekday);
const today = new Date();
console.log(today);
const day = today.getDay();
console.log(day);
const todayElement = document.querySelector("#displayToday");
todayElement.textContent = weekday[day];