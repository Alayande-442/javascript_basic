document.write("welcome to dom from javascript")
let aDocument = document.body.children;

// const[, script] = aDocument
// console.log(script);

console.log(aDocument[0]);

for(let i = 0; i < aDocument.length; i++) {
    console.log(aDocument[i]);
}

let checker = aDocument[0].parentElement;
let checker2 = aDocument[0].parentNode.childNodes;
let checker3= aDocument[0].childNodes;
console.log(checker3);

for(let c = 0; c < checker3.length; c++) {
    console.log(checker3[c]);
}

console.log(checker);
console.log(checker2);


// ********* Node2 **********//

// create an array of object
const questions = [{
    question : "what's your name?", 
    option1:"josh",
    option2:"olaoluwa",
    answer:"option2",
},
{
    question : "what's your favorite food?", 
    option1:"Rice",
    option2:"Yam",
    answer:"option2",
},

];

// console.log(questions[0].question);
function loadQuestion(first) {
    console.log(questions[first].question);
    console.log(questions[first].option1);
    console.log(questions[first].option2);
    console.log(questions[first].answer);

}

loadQuestion(0);
loadQuestion(1);


let documentCheckerHeader1 = document.body.children[0].children[0]
let documentCheckerParagraph = document.body.children[0].children[1]

let secondParent = document.body.children[1].children[1];
let mainElementChecker = document.body.children[2].children[0];
let mainElementSiblings = document.body.children[2].children[0].nextElementSibling;
console.log(mainElementSiblings);
console.log(mainElementChecker);
console.log(secondParent);
console.log(documentCheckerParagraph);
console.log(documentCheckerHeader1);


// ******* Document APIs ***********//

let tagChecker = document.getElementsByTagName("p");
let tagChecker2  = document.getElementsByTagName("div")
console.log(tagChecker2);
console.log(tagChecker);

let tagChecker3 = document.getElementsByClassName("paraforme")
console.log(tagChecker3);


let idChecker = document.getElementById("header-one")
console.log(idChecker);



// ******* overiding html document *******//
const divId = document.getElementById("div-id")
const sectionId = document.getElementById("section-id")
// const spanChanger = document.getElementById("section-id").children[1];

const spanChanger = document.getElementsByTagName("span")
const sectionClass = document.getElementsByClassName("section-class");
for (item of sectionClass) {
    item.innerHTML = "The section element has been change by javascript"
}

for(item of spanChanger)  {
    item.innerHTML = "the span element has been change by looping through the tag name" 
}
console.log(spanChanger);
console.log(sectionId);
console.log(divId);

// overiding method

sectionId.innerHTML = "<h3>my section element has been change from javascript</h3>"


// spanChanger.innerHTML = "<h2>The element inside my span element has been change to header two tag</h2>"
// console.log(spanChanger);

// console.log(sectionId);


let lastSection = document.getElementsByClassName("drill-class")

for(items of lastSection) {
    items.innerHTML = `
        <h4>the last section element has been change by inner html</h4>
        <h2>i have another header 2 beside me</h2>
        <span>i also have a span tag inside me</span>
    `
}


