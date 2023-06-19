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

// let questionContainer = document.getElementById
// let questionLoader = document.getElementById("question-container");
// let questionLoader2 = document.getElementById("question-container2");
// let optionLoader2 = document.getElementById("option-container2");
// let optionLoader = document.getElementById("option-container");
// let buttonPara = document.getElementById("button-para")

// function loader(load) {
//     questionLoader.innerHTML = `
// 1. ${questions[load].question}
// `
// questionLoader2.innerHTML = `
// 2. ${questions[load].question}
// `

// }

// function questionLoad(quest) {
//     optionLoader.innerHTML = `
//     <input  type = 'radio' name = 'option'/> ${questions[quest].option1}
//     <input  type = 'radio' name = 'option'/> ${questions[quest].option2}
// `
// optionLoader2.innerHTML = `
// <input  type = 'radio' name = 'option'/> ${questions[quest].option1}
// <input  type = 'radio' name = 'option'/> ${questions[quest].option2}<br><br> 

// `

// }

// buttonPara.innerHTML = `<button id="next">submit</button>`




// questionLoad(0)
// questionLoad(1)

// loader(0)
// loader(1)
// // console.log(questionLoader);
// // console.log(optionLoader);
// // console.log(optionLoader2);

// document.body.style.backgroundColor = "blue";
// document.getElementById("question-container").style.color = "cyan";
// document.getElementById("question-container2").style.color = "black";


// // let questionLoader =  document.body.style.color = "cyan";
// buttonPara.style.padding = "20px";


//*************** drill ************//

let questionBank = [{
    question1 : "who is the president of Nigeria",
    option1 : "Tinubu",
    option2 : "Buhari",
    option3 : "Sanusi",
    option4 : "Gbajabiamila",
    answer : "option1",

},

{
    question2 : "Nigeria got independence in what year",
    option1 : "October 2nd 1960",
    option2 : "October 1st 1961",
    option3 : "October 1st 1960",
    option4 : "October 3rd 1960",
    answer : "option3"
},

{
    question3 : "who is the first indigenious president among the listed options",
    option1 : "Alh Aliyu Mai Bornu and Dr Clement Isong",
    option2 : "Sanusi Lamido and Abubarkar Tafawa Balewa",
    option3 : "Atiku Abubarkar and Dr Emefiele",
    option4 : "Ernest Shonekan and Dele Momodu",
    answer : "option1",
},

{
    question4 : "In what year did Nigeria gain independence",
    option1 : "October 2st 1963",
    option2 : "October 1st 1963",
    option3 : "October 4th 1962",
    option4 : "October 1st 1965",
    answer : "option2"
},

{
    question5 : "who is the first woman to drive a car in Nigeria",
    option1 : "Mrs Tawakalitu Ashiru",
    option2 : "Mrs Olufunmilayo Ransom kuti",
    option3 : "Mrs Kalejaiye Williams",
    option4 : "Mrs Bimbo Adebimpe",
    answer : "option2",
}
];


let questionLoader1 = document.getElementById("question-container1");
let questionLoade = document.getElementById("question-container2");
let optionLoader1 = document.getElementById("option-container");
let buttonClick = document.getElementById("button-para");



function optionBankLoader(opt) {
    optionLoader1.innerHTML = `
   <input type = "radio" name="option"/> ${questionBank[opt].option1}
   <input type = "radio" name="option"/> ${questionBank[opt].option2}
   <input type = "radio" name="option"/> ${questionBank[opt].option3}
   <input type = "radio" name="option"/> ${questionBank[opt].option4}

    `
    buttonClick.innerHTML = `<button>Click</button>`
}

// questionBankLoader(1)


// optionBankLoader(1)
// // questionBankLoader(1)

// document.body.style.backgroundColor = "cyan";
// buttonPara.style.padding = "10px";


let aBtn = document.getElementById("btn-test");

aBtn.addEventListener("click", function() {
    ++opt
    optionBankLoader(opt)
})
