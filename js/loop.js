// loop in programming is the way of iterating through data
// types of loop
// for loop
// while loop
// do while loop

// starter
// conditions
// process
// let x = 0;
// while (x < 10) {
//     x++;
//     console.log(x);
// }

// let x = 0;
// while (x < 20) {
//     x += 2;
//     console.log(x);
// }

// let i = 0;
// while (i < 20) {
//     i++;
//     console.log(i);
    
// }

// ********** For loop in javascript **************
// for (y = 0; y <= 20; y++) {
//     console.log(y);
// }

// for (x = 0; x <= 10; x++) {
//     let output = `2 x ${x} = ${2*x}`;
//     console.log(output);
// }

// let w = 1;
// while (w <= 10) {
//     let result = `3 x ${w} = ${3*w}`;
//     w++;
//     console.log(result);
    
// }

// for (let name  = 1; name <= 5; name++) {
//     let nameOutput = `my name is olaoluwa ${name}`;
//     console.log(nameOutput);
// }

// for (let t = 1; t <= 10; t++) {
//     let myResult = `5 x ${t} = ${5*t}`;
//     console.log(myResult);
// }

// let a = 1;
// while (a <= 10) {
//     let myput = `10 x ${a} = ${10*a}`;
//     a++;
//     console.log(myput);

// };


// ************* looping through an array ***********
let states = ["lagos","oyo","kano","bornu","kebbi","uyo"];

for(let s = 0; s < states.length; s++) {
    console.log(states[s]);
}

let lGA = ["Ikeja","Mushin","Ifako","Shomolu"," Bariga"];

// const [,,ola] = lGA;
// console.log(ola);

// for (let l = 0; l < lGA.length; l++) {
//     console.log(lGA[l]);
// }

// console.log(lGA[lGA.length-1]);

// *************** For Of loop *******************
for(l of lGA) {
   console.log(l); 
}



