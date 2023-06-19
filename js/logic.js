// logic is a conditional statement

// let answer = prompt("what should i buy?");
// if(answer == "chicken") {
//     alert("buy chicken");

// }else {
//     alert("buy egg");
// }

// let question = prompt("what is my favourite food?");

// if(question == "beans") {
//     alert("correct");
// }else {
//     alert("wrong");
// }



// let age = prompt("How old are you?");

// if(age < 16) {
//     alert("you are not allowed into the bar");
// }else if(age <= 18) {
//     alert("take coke");
// }else if(age <= 30) {
//     alert("take malt");
// }else if(age <= 40) {
//     alert("take chamgpane");
// }else if(age <= 50) {
//     alert("take water");
// }else {
//     alert("Are you human?");
// }

// ******** using logic operator *******
// if (age < 16) {
//     alert("you are not welcome into the bar");
// }else if (age > 16 && age <= 18) {
//     alert("take coke")

// }else if (age > 18 && age <= 30) {
//     alert("take malt")
// }else if (age > 30 && age <= 40) {
//     alert("take chamgpane")
// } else if (age > 40 && age <=50) {
//     alert("take water")
// }else {
//     alert("Are you human?")
// };

// ********* Ternary operation ********

// (age < 16)? alert("you are not allowed into the bar") : alert("go into the bar");


// ************** Assignment *******************
alert("begins");
let question = prompt("who's there?");
let password = prompt("Enter password");
if (question == 'Admin') {
    // alert("Enter your password")

    if (password == 'TheMaster') {
        alert("welcome")
    } else {
        alert("wrong password details")
    }
}else {
    alert("wrong credentials");
}

