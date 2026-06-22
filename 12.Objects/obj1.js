// Object :  
// It's a Collection of Properties or Methods.
// property :  key + value pair
// Method : inner Functionality (function)

// How to Create an Object : 

// 1. using Object Literal  :  {}
// var obj  = {};
// console.log(obj,typeof obj);

// 2. Using Object.create :
// var obj = Object.create({});
// console.log(obj,typeof obj);


// 3. Using Object.assign :
// var obj = Object.assign({});
// console.log(obj,typeof obj);

// 4.  Using Object class :
// var obj = new Object();
// console.log(obj,typeof obj);

// 5. Using Function Object


// =====================================
// var user = {
//     // key    value     =   property
//     fname : "Raj",
//     lname : "shah",
//     age : 20
// };

// How to Access Object : 
// console.log(user);

// How to Access Property Values : 
// 1. using dot Notation 
// console.log(user.lname);
// 2. using Bracket Notation 
// console.log(user["lname"]);

// How to Change/Modify Property Values : 
// 1. using dot Notation 
// user.fname = "Rajveer";
// 2. using Bracket Notation 
// user['age'] = 30;
// console.log(user);


// How to Add a New Property : 
// 1. using dot Notation 
// user.gender = "Male";
// 2. using Bracket Notation 
// user["contactno"]= 1234567890;

// console.log(user);


// How to Remove Property :
// 1. using dot Notation 
// delete user.age;
// // 2. using Bracket Notation 
// delete user['lname'];

// console.log(user);


// =========================

// var user = {
//     fname : "Raj",
//     lname : "shah",
//     age : 20,
//     printdata : function (){
//         console.log(`Your name is ${this.fname} ${this.lname}.your age is ${this.age}.`);
//     }
// };
// console.log(user);

// user.printdata();

// this new    props and properties

// ====================================
// Loop  basic For loop
// var emp = {
//     "first name" : "Sahil",
//     lname : "patel",
//     company : "ABC",
//     position : "CEO",
//     123 : 4
// }

// // console.log(emp["first name"]);

// for (const key in emp) {
//     // console.log(key,emp[key]);
//     console.log(key,typeof key);
// }
