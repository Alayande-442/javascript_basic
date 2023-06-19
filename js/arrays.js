// defining array
// store data
// retrive the data

let students = ["bintu", "ali", "john", "ola", "mike", true, 10, ["isaac","Ada"], "david"];
console.log(students[7][1]);
console.log('the fifth person in the array is '+ students[4]);
console.log("the third student in the array is "+students[2]);

// document.write("my name is olaoluwa");
let cars = ["venza","Hilux","EOD",["Brabus","Evogue"]]

console.log(cars[3][1])

// assignment
// cal area of square:length = 20
// area of circle:radius = 10
let fruits = ["orange", "mango", "pea", "pineapple", "apple"]
// add into the the array [cashew, guava, carrot]
fruits[5] = "cashew";
fruits[6] = "guava";
fruits[7] = "carrot";
console.log(fruits);

// ************* Array Method ************
// push:push add new element to the array
// pop:pop remove the last element from the array
// shift: shift remove the first element from the array
// unshift: unshift add element to the first position in the array
fruits.push("banana");
fruits.pop();
fruits.shift();
fruits.unshift("unshift");
let fruitValues = fruits.values();

console.log(fruitValues);

// *********** Array destructuring **********
let appleProduct = ["ipone11","iphone12","iphoneXR","ipone14"]

const [,,thirdProduct] = appleProduct;
console.log(thirdProduct);
const [,,,last] = appleProduct;
console.log(last);

// ******* Spread operator in javascript **********

// spread operator is denoted with three dot ...
let items = ["sugar", "milk","bouvita"]

let newItems = ["water","milo"]

// let totalItems = ["sugar","milk","bouvita", ...newItems];
let totalItems = [...items, ...newItems];
console.log(totalItems);

let cal = items.concat(newItems);
console.log(cal);

let shape = ["rectangle","circle","oval"];
let color= ["red","black","blue","indigo"];

let shapeColor = [...shape, ...color];
console.log(shapeColor);

console.log(shapeColor["length"]);


// ********** Assignment ********
// make a list of your fav car and display all
// use destructuring method to get second and third
// add into the array your worst type of car using spread operator

let favCars = ["brabus","venza","bugatti","ferrari","rangerover","lexus"];

for(let f = 0; f < favCars.length; f++) {
    console.log(favCars[f]);
}

const [,second,third] = favCars;
console.log(second,third);

let worstCars = ["volswagen", "honda","jagua"];

let totalCars = [...favCars,...worstCars];
console.log(totalCars); 


