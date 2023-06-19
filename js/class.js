// classes are syntatic object

// class Animal {
//     constructor(name,isAlive, canBreath) {
//         this.name = name;
//         this.isAlive = isAlive;
//         this.canBreath = canBreath;

//     }
//     // property
//     numberOfEyes = 2;
//     numberOfHears = 2;
//     hasMouth = true;

//     // method
//     speak = ()=> {
//         return `speaking`
//     };

//     walk = ()=> {
//         return "animal can walk"
//     };

//     eat = ()=> {
//         return "animal can eat"
//     }

//     run = ()=> {
//         return "animal can run"
//     }

//     setNumberOfEyes = (num)=> {
//         this.numberOfEyes = num
//     }

//     setNumberOfEars = (num)=> {
//         this.numberOfHears = num;

//     }
// }

// const Dog = new Animal("Bull dog", true, "yes");

// console.log(this.numberOfEyes = 16);
// console.log(this.numberOfHears = 20);
// console.log(Dog.setNumberOfEyes())

//  const Goat = new Animal;

//  console.log(Dog.canBreath);
//  console.log(Goat.numberOfEyes);
//  console.log(Dog.speak());
//  console.log(Goat.eat());

//  class Bird {
//     constructor(fly, isAlive, hasNail) {
//         this.fly = fly;
//         this.isAlive = isAlive;
//         this.hasNail = hasNail;
//     }

//     numberOfEyes = 2;
//     numberOfLegs = 2;
//     hasBeak = true;
//     hasFeather = true;

//     fly = ()=>{
//         return "my bird can fly";
//     }

//     eat = ()=> {
//         return "my bird can eat";
//     }
//  }

//  const eagle = new Bird("fly high","yes", true);
//  eagle.numberOfEyes = 4;
//  console.log(eagle)
//  console.log(Bird)

//  console.log(eagle.hasNail);


// // ******* creating a class from another class

// class Rabbit extends Animal {

// }

// let newSpecies = new Rabbit
// console.log(newSpecies);

// // ************ Drill *************

// class GadgetStore {
//     constructor(paidDues,hasRiders) {
//         this.payment = paidDues;
//         this.riders = hasRiders;

//     }
//     iphon12 = 3;
//     iphon11 = 4;
//     smartwatch = true;
//     charger = 5;

//     ios = ()=> {
//         return "my iphone version is ios 15"
//     }

//     setNumberOfGadget = (num)=> {
//         this.iphon11 = num;
//     }

//     setSmartWatch = (condition)=> {
//         this.smartwatch = condition;
//     }

//    getNumberOfCharger = (charge)=> {
//         this.charger = charge;
//    }
// }

// const chitechStore = new GadgetStore("20000", "badru qadri");
// console.log(GadgetStore);
// console.log(chitechStore)
// console.log(chitechStore.iphon12);

// chitechStore.ordinaryCordCharger = "iphone cord";

// console.log(chitechStore);

// chitechStore.setNumberOfGadget(50);
// console.log(chitechStore);

// chitechStore.setSmartWatch(false);
// console.log(chitechStore);

// chitechStore.getNumberOfCharger(20)
// console.log(chitechStore);

// class RolandStore extends GadgetStore {

//     iphoneXR = 20;
//     iphoneX = 15;
    
// }

// let emekaStore = new RolandStore
// console.log(emekaStore);


// ******** DRILL ****************//
class BuildingInLagos {
    constructor(brown,twoStorey) {
        this.color = brown;
        this.level = twoStorey;

    }
    cement = "200 bags";
    sand = "100 truks";
    paints = "30 drums";
    gate = 2;
    isBungalow = true;
    flat = 15;
    hasCarPark = true;

    color = (yellow)=> {
        return `the color of the house in lagos is ${yellow}`
    }

}

console.log(BuildingInLagos);

const BuildingInOyo  = new BuildingInLagos;
const BuildingInAbeokuta = new BuildingInLagos("brown","two storey building");
console.log(BuildingInAbeokuta);

console.log(BuildingInOyo);