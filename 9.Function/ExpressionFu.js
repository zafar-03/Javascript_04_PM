// Expression Function : 

// i. without argument and without return type
var greeting = function (){
    console.log("Hello Everyone");
    document.write("Text");
}

// greeting();// function calling /invoked


// ii. with argument and without return type
// var addition = function (n1,n2){   //  n1,n2    Parameter
//     console.log("Addition : ",n1+n2);
// }

// addition(11,12); // 11,12   argument

// iii. without argument and with return type
// const pi = function (){
//     return 3.14;
// }

// // use 
// console.log(pi());

// // store then use
// var output = pi();
// console.log(output);

// iv. with argument and with return type

let result =  function (marks){
    if(marks>=35){
        return "Pass";
    }else{
        return "Fail";
    }
}

// console.log(result(45));