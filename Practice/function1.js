// Q2. Write a named function to display numbers 1 to 5.(for loop)

// function printData(){
//     //code
//     for (let i = 1; i <= 5; i++) {
//        console.log(i);
//     }
// }

// printData();

// function printData(){
//     var n1 = Number(prompt("Enter Starting Number :")); 
//     var n2 = Number(prompt("Enter Ending Number :")); 

//     for (let i = n1; i <= n2; i++) {
//        console.log(i);
//     }
// }

// printData();


// function printData() {
//     var n1 = Number(prompt("Enter  Number1 :")); //10
//     var n2 = Number(prompt("Enter  Number2 :")); //8

//     if (n1 <= n2) {
//         for (let i = n1; i <= n2; i++) {
//             console.log(i);
//         }
//     }else{
//         // for (let i = n1; i >= n2; i--) {
//         //     console.log(i);
//         // }
//         for (let i = n2; i <= n1; i++) {
//             console.log(i);
//         }
//     }
// }

// printData();



// Q3. Write a named function that prints a given name.

// function numberPrint(n1){
//     console.log(n1);
// }

// numberPrint(12);


// Q5. Write a named function that returns today's date.


// function today(){
//     return Date();   //Date Module -> In-built
// }


// console.log(today());


// console.log(Date.now());


// Q8. Write a named function that returns the square of a given number.

// function square(num){
//     return num*num;
// }

// console.log(square(4));
// console.log(square(14));


// Q10. Write a named function that checks whether a string is a palindrome
// and returns true or false.


// function isPeli(str) {
//     var revstr = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         revstr += str[i];
//     }
//     if (revstr == str)
//         return true; 
//     else
//         return false;

// }

// console.log(isPeli('madredam'));


// var str = "Java";

// console.log(str == str.split('').reverse().join(''));


// function isPeli(str){
//     return str == str.split('').reverse().join('');
// }

// console.log(isPeli("madam"));