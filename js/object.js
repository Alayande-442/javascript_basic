// objects enable us to store data in key and value form
// object are modify variable that stores data with associated keys
// they represent thier data in key and value pairs
// the value can be of any data type

// ***** process of using object
// declaration,storing,retrieving


let players = {
    player1 : "messi", 
    player2 : "Ronaldo",
    player3 : "Pogba",
    player4 : "Fernandes",
    player5 : "Mount",
    player6 : "Lukaku",
    player7 : "Rashford",
    player8 : "shaw",
    player9 : "Halland",
    player10 : "mbape",
}

// console.log(players.player6);
players["player11"] = "Debruyn"
players["player12"] = "Neyma"
players.player13 = "Aguero"
players["type of language learnt"] = "javascript"
console.log(players);

// for(items of players) {
//     console.log(items)
// }

console.log("player12" in players);
if("player14" in players) {
    alert("player14 is present")
}else {
    players["player14"] = "matinez"
}

// using a function inside an object

const Dog = {
    eyes : 2,
    leg : 4,
    hind : 4,
    tail : 1,
    speak : ()=>{
        return ("speaking......")
    }  
}

console.log(`A dog can ${Dog.speak()}`);

// const calculator = {
//     add : "yellow",
//     sub : "blue",
//     div : "red",
//     clickButton : ()=> {
//         return ("clicking")
//     }
// }

// console.log(`i have add 2 and 5 by ${calculator.clickButton()} my calculator`);

const calculator = {
    add : function(a,b) {
        return a + b;
    },
    sub : (c,d)=>c - d,
    div : (c,d)=>c / d,
    mult : (a,b)=>a * b,
}

console.log(calculator.add(100,100));
console.log(calculator.sub(300,100));
console.log(calculator.div(50,2));
console.log(calculator.mult(5,5));


const fastCars = {
    fast1 : "Benz",
    fast2 : "Range",
    fast3 : "lambo",
    fast4 : "ferrari",
}

const slowCars = {
    slowCars : "volswagen",
    slowCars : "hummer",
}

// destructuring object
const {fast3} = fastCars;
console.log(fast3)

// const allCars = {...fastCars, ...slowCars};
// console.log(allCars);

// object.assign() it is a method
let allCars = Object.assign(fastCars,slowCars)
console.log(allCars);


// Assignment
// creat an empty object called user: add into the user the firstname,surname,age and 
// a method that return the full name of the user

// create another object called book:that have author, name of the books
// display all about the book
// create a function that check the user: if a key exist in the user 

const user = {
    firstName : "Olaoluwa",
    lastName : "Alayande",
    age : "200",
    fullName : ()=> {
        return `my full name is ${user.firstName} ${user.lastName} and age is ${user.age}`;

    }
}

// let usercheck = user.firstName()
// console.log(usercheck);
console.log(user.fullName());

const book = {}
book.author = "Dr TD Jakes";
book.title = "Soar like eagle";

console.log(book);


let bookAndAuthor = {...user, ...book}
console.log(bookAndAuthor);

let join = Object.assign(book,user);
console.log(join);

if("date of birth" in user) {
    alert("key is present")
}else {
    user["date of birth"] = "21-21-2022"
}

console.log(user);


// ************* Drill ******************

let rooms = ["room1", "room2", "room3", "room4","room5"]
for(let i = 0; i < rooms.length; i++) {
    console.log(rooms[i]);
}
const[,,room3] = rooms;
console.log(room3);
console.log(rooms[3]);

// ********* to check if a data is in an array ************

if(rooms.includes("room12")) {
    alert("yes")
}else {
    rooms[5] = "room12"
    console.log(rooms);
}
 
let luxuryRooms = {
    room6 : "oriental room",
    room7 : "radinson blue",
    room8 : "lekki garden",
    room9 : "highland hotel",
    room10 : "banana highland",
}

console.log(luxuryRooms)
console.log(luxuryRooms.room7);

if("room12" in luxuryRooms) {
    alert("yes")
}else {
    luxuryRooms.room12 = "Added room"
}

console.log(luxuryRooms)

const animals = {
    animal4:(action)=> {
        return `all a animal has four leg with fast ${action}`
    }
}
animals.animal1 = "cat"
animals.animal2 = "dog"
animals.animal3 = "lion"


console.log(animals)


//******************///// looping through an object//////// ****************
for(items in luxuryRooms) {
    console.log(items,luxuryRooms[items]);
}

