// alert('hello world');
// statement in javascript
// comment in javascript

// Variable in javascript:variable is a container that store data

// defining a variable
let myName = "ola";
let age = 200;
let secondarySchool = "jubilee";
let myCar = "Venza";
const pi = 3.142;
const dateofBirth = 5/2/2003;
const learningJs = true //boolean;
let todayIsSunday = true;
let skyIsBlue = true;

console.log(myName);
let myLog;
// document.write(myName);

// let first_name = ola // snake casing
// let firstName = ola // camel casing
// let FirstName = ola // pascal casing


// ************Data type in javascript *********

// primitive data type:string,number,boolean,null,undefined

// non-primitive data type:

console.log(myLog);

// CONCATENATION IN JAVASCRIPT:is the joining of two of more data type or entities
document.write("my name is "+ myName);
let firstName = "olaoluwa";
let lastName = "Alayande";
const NewAge = 20;
let hobbies = "coding";

console.log("my first name is " +firstName +" and my last name is "+ lastName+ " and my age is "+NewAge +" i like "+hobbies );

let nameOfSchool = "yabatech";
let locationName  = "yaba";
let course = "mechatronics Engineering";
console.log("the name of my school is "+nameOfSchool+" it is located in "+locationName+" i'm studing "+course);

let sisterName = "tolu";
let brotherName = "bola";
let school = "unilag";
let hobby  = "reading";
console.log("the name of my sister's is "+sisterName+" and the name of my brother's is "+brotherName+" they both went to "+school+" they both like "+hobby);


// *************** Template literals in javascript ***********************
console.log(`my name is ${myName} and my age is ${age}, the name of my school is ${school}`);

// *********** Arithmetic Operators ************
// + - / * %

let number1 = 5;
let number2 = 7;
console.log(number1 + number2);

let cal1 = 20;
let cal2 = 30;
let cal3 = 2;

let totalCal = (cal1 + cal2)/cal3;
console.log(totalCal);

let base = 6;
let height = 12;
let half  = 0.5;

let cal = (6 * 12)*half;
console.log(cal);

// ********** Type coersion in javascript*********
console.log("2" + 5);
console.log("10" - 5);

console.log(base > height);

// ************* Comparison Operation in Javascript**************
// >,<,>=,<=,==,===

console.log( (base < height) && (half > base));
console.log( (base < height) || (half > base));

let test1 = 10;
let test2 = "10";
console.log(test1 !== test2);

/**
 true && true = true;
 true || true = true;
 true || false = false;
 */

 console.log(typeof half);


