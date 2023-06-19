// process of using a function
// function nameOfFunction (parameter) {
//     // process
// } 
// nameOfFunction()
function Addition(num1, num2) {
    let result = num1 + num2
    return result;
}

let calculationOf100and300 = Addition(100,200);
let calculationOf500and500 = Addition(500,500);
console.log(calculationOf100and300);
console.log(calculationOf500and500);



function Subtraction(num1, num2) {
    let process = num1 - num2;
    return process;
}

let calSubtractionOf10and7 = Subtraction(10,7)
let calSubtractionOf100and20 = Subtraction(100,20)
console.log(calSubtractionOf10and7);
console.log(calSubtractionOf100and20);


function Multiplication(num1, num2) {
    let multiply  = num1 * num2;
    return multiply;
}

let multiplyCalulation = Multiplication(5,5);
let multiplyCalulationOf7and7 = Multiplication(7,7);
console.log(multiplyCalulation);
console.log(multiplyCalulationOf7and7);



function Division(num1, num2) {
    let divisionCal = num1 / num2;
    return divisionCal;
}

let totalAnswer = Division(20,5);
let totalAnswerOf100and2 = Division(100,2);
console.log(totalAnswer);
console.log(totalAnswerOf100and2);


// Expression or Resource:this is when a variable is assigned to an anonymous function.

function areaOfCircle(radius) {
    const pie = 3.142;
    let result = pie * radius * radius;
    return result;

}

let calAreaOfCircle = areaOfCircle(20);
console.log(calAreaOfCircle);

function areaRt(base,height) {
    const half = 0.5;
    let rtCal = half * base * height;
    return rtCal;
}

let rtCalculation = areaRt(6,12);
console.log(rtCalculation);


//*************** callbacks function ***********
// function loginUser(username) {
//     return `${username} you have login successfully`;
//     
// }

// function sendSms(reciever,message) {
//     return `hello ${reciever}, A mail has been sent to you successfully ${message}`

// }

// function sendMail(message) {
//     return `${message}please check your mail to verify your login`;
// }



// function testLoginWithCallBacks(name) {
//     let testSms = sendSms(name, "check your mail")
//     let testMail = sendMail("please check your mail to verify your login");
//     let testUser = loginUser(name);
//     console.log(testSms);
//     console.log(testMail);
//     console.log(testUser);

// }
// let userName = prompt("what's your name")
// testLoginWithCallBacks(userName);

// A function that detect if a person is an admin

// function checkAdmin(username) {
//     let adminName = "Admin";
//     if(username == adminName) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// let checker = prompt("Enter your admin name");
// let test  = checkAdmin(checker);
// console.log(test);

// if(test) {
//     alert("you can enter the app")
// }else {
//     alert("you can't enter the app")
// }


// write a function that determine if a username and password of a user is correct

// write a function that would determine if a number is even or odd
// write a function that will do any multiplication table

// function checkUserName(username) {
//     let typeName = "adminName";
//     if(username == typeName ) {
//         return true;
//     }else {
//         return false;
//     }
// }

// function checkUserPassword(password) {
//     let typePassword = "adminPass";
//     if(password == typePassword) {
//         return true;
//     }else {
//         return false;
//     }
// }

// let checker = prompt("Enter your name");
// let checkName = checkUserName(checker);

// let checkPass = prompt("Enter password");
// let checkPassCheck = checkUserPassword(checkPass);

// if(checkName && checkPassCheck) {
//     alert("you can use the app");
// }else {
//     alert("wrong input credentials");
// }

// write a function that would determine if a number is even or odd


// function isEvenOrOdd(num) {
//     if(num % 2 == 0) {
//         return true;
//     }else {
//         return false;
//     }
// }

// function isOdd(num) {
//     if(num % 2 != 0) {
//         return true;
//     }
// }

// let number = prompt("Enter a number");
// if(number) {
//     let checkerIs = isEvenOrOdd((number))

//     if(checkerIs) {
//     alert("Number is even")
//     }else {
//     alert("Number is odd")
//     }

// }else {
//     alert("please Enter a number")
// }

// multiplication table with a function
// function multiplication(num, stopper) {
//     for(let i = 1; i <= stopper; i++) {
//         let result = `${num} x ${i} = ${num*i}`;
//         console.log(result);
//     }
// }

// multiplication(3,15);

 


// ************ Function practice ****************
// write a function that check if a student pay for school fees and hostel fees and also
// tally with the minimum amount to be paid.
// write a function that check if a worker is present at work for the week
// write a callbacks function that check if a student paid departmental dues,napes,metsa,nasu
// write a function that check if the student did  not pay any departmental dues
// write a function that check if 
// write a function that can do any multiplication table

// ******** 1 *********
// let schoolFees = 35000;
// let hostelFees = 30000;

// function schoolPayment(pay) {
//     if(pay >= 35000) {
//         return true;
//     }else {
//         return false;
//     }

// }

// function hostelPayment(hostel) {
//     if(hostel >= 20000) {
//         return true;
//     }else {
//         return false;
//     }
// }

// let checkHostel = prompt("Enter your hostel amount")
// let hostelFunction = hostelPayment(checkHostel)

// let checkPayment = prompt("Enter school payment amount")
// let schoolFunction = schoolPayment(checkPayment);
// if(schoolFunction && hostelFunction) {
//     alert("you can proceed to print your document")
// }else {
//     alert("please make correct fees payment")
// }


// ******* 2 *******

// function mondaySignIn(monday) {
//     return `you are present on ${monday}`;
// }

// function tuesdaySignIn(tuesday) {
//     return `you are present on ${tuesday}`;
// }

// function wednessdaySignIn(wednessday) {
//     return `you are present on ${wednessday}`;
// }

// function thursdaySignIn(thursday) {
//     return `you are present on ${thursday}`;
// }

// function fridaySignIn(friday) {
//     return `you are present on ${friday}`;
// }

// function presentDays() {
//     let testday1 = mondaySignIn(monday);
//     let testday2 = tuesdaySignIn(tuesday);
//     let testday3 = wednessdaySignIn(wednessday);
//     let testday4 = thursday(thursday);
//     let testday5 = friday(friday);
//     console.log(testday1);
//     console.log(testday2);
//     console.log(testday3);
//     console.log(testday4);
//     console.log(testday5);
// }


// let testday = prompt("Enter your present day");
// let testMonday = mondaySignIn(testday);
// let testTuesday = tuesdaySignIn(testday);
// let testWednessday = wednessdaySignIn(testday);
// let testthursday = thursdaySignIn(testday);
// let testfriday = fridaySignIn(testday);
// console.log(testMonday);
// console.log(testTuesday);
// console.log(testWednessday);
// console.log(testthursday);
// console.log(testfriday);


// Arrow function
const add = (x,y)=> {
    return x + y;


}

console.log(add(200,200));

const multiplication = (num,last) => {
    for (let i = 0; i <= last; i++) {
        let result = `${num} x ${i} = ${num*i}`;
        console.log(result);

    }

}

// console.log(multiplication(3,12));
let check = multiplication(3,12);
// console.log(check);

const division = (a,b) => {
    return a/b

    
}

console.log(division(100,2));

// arrow function 2
// const add = (a,b)=> a+b;






