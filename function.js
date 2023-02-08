let message = "Hello developer";
console.log(message);

//This is one line commment//
/*This 
is 
olon line comment */
let nickName;
nickName = "Eric";
//or
let nickName2 = "Eric2" 
//Taslalaar zaaglan olon huwisagch zaaj ugch bolno.
let nickName3 = "Alex", sex = "male";
//Utga uurchlugduj bolno.
let changing = "Hi";
changing = 100;

let msg1 = "Hello"; //string
console.log(typeof(msg1)); //"string"
msg2 = true; //boolean
console.log(typeof(msg2)); //boolean
msg3 = 100;  //number
console.log(typeof(msg3)); //number
//Tuhain huwisagch ymar turliinh gedgiig medehiig huswel typeOf ashiglana.

//Arithmetic operators
// let sum = 10 + 20;
// console.log(sum) //30

let une = 10000;
noat = 1000;
let niitune = une + noat;
console.log(niitune);

// 
let result = '30' - 10;
console.log(result); //20

let age = 20;
if (age >= 18) {
    console.log("Tanii nas:", age)
    console.log("Ta nasand hursen bna")
} else {
    console.log("Ta nasand hureegui baina.")
}

const str = "Life, the universe and everything. ";
console.log(str.charAt(0)); //L
console.log(str[1]); //i

let str1 = "Javascript String";
console.log(str1.substring(0, 10));
console.log(str1.substring(11, 6));

// let count = 1;

// while (count <= 10){
//     console.log(count);
//     count = count + 1;
// }

// for (let i = 1; i>=100; i-- ){
//     if(i%3===0 && i%5===0){
//         console.log(i);
//         break;
//     }
// }
// let studentNames = ['boldo', 'dorjoo', 'tsetsgee'];
// let i = 0;
// while (i<studentNames.length){
//     if (studentNames[i][0] === "d"){
//         console.log(studentNames[i])
//     }
//     i++;
// }//output dorjoo
let studentAges = [10, 20, 15, 19, 18,19 ,19];
let i = 0;
let sum = 0;
while (i < studentAges.length) {
sum+=studentAges[i]
i++;
}
let avarage = sum/studentAges.length
console.log(avarage);
let userBalance = [1000, 2000, 2500, 4000000];
    let i1 = 0;
    while (i1 < userBalance.length) {
    userBalance[i1] *= 1.15;
    i1++;
    }
    console.log(userBalance);

function greetName(name){   
    alert("Hello " + name + ":)")
}
let input = prompt("Enter a name: ");
greetName(input);