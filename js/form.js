let aBtn = document.getElementById("submit-btn");
let myEmail = document.getElementById("email")
let errorMail = document.getElementById("error-email") 

// aBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log(myEmail.value);
    // console.log(event.target.id);
    // console.log(event.target.className);

//     if(myEmail.value == "") {
//         myEmail.style.borderColor = "red"
//         errorMail.innerHTML = "Enter Email";
//         
       
//     }
// })
let selectedValue = "";
let myRadio = document.querySelector("input[type=radio]")

for (const items of myRadio)  {
    if(items.checked) {
        selectedValue = items.value;
    }

}
alert(selectedValue)
   

    
