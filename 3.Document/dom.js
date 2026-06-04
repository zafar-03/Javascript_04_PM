//DOM : 
// Document Object Model

// Document  : HTML Code
// Object  : key+value  pair  
/*
        student = {
            fname : "Raj",
            age : 12
        }
*/ 

// How to Access HTML COde in a JS : 
// console.log(document);

// How to Access Head Tag : 
// console.log(document.head);


// How to Access Body Tag : 
// console.log(document.body);



// How to Access HTML Element in a JS :
//1. using Id :
// console.log(document.getElementById("id1"));


//2. using Class : 
// console.log(document.getElementsByClassName("class1")[2]);


//3. using TagName:
// console.log(document.getElementsByTagName("h1")[1]);

// console.log(document.getElementsByTagName("style")[0]);


//4. using QuerySelector :  
// console.log(document.querySelector('h1'));//tagname

// console.log(document.querySelector('.class1'));//class
// console.log(document.querySelector('span.class1')); //tag+class

// console.log(document.querySelector('#id1'));



//5. using querySelectorAll : 
// console.log(document.querySelectorAll(".class1")[1]);




//How to Add New Text/Tag using JS : 
document.write("<h3>Hello Everyone</h3>");
