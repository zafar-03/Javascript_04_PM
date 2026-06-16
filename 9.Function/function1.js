console.log("Function :");

// There are two Types : 
// 1. In-Built Functions 
    //   i. prompt
    //  ii. confirm
    // iii. alert 

// 2. User-define Function

//Normal Functions/ Name Functions
/*syntax : 

// Function Declaration + Initialization
function functionname(){
    //code
}

// function calling / invoked Function
functionname();
*/ 

// i. without argument and without return type
// function greeting(){
//     console.log("Hello Everyone");
//     document.write("Text");
// }

// greeting();// function calling /invoked


// ii. with argument and without return type
// function addition(n1,n2){   //  n1,n2    Parameter
//     console.log("Addition : ",n1+n2);
// }

// addition(11,12); // 11,12   argument

// iii. without argument and with return type
// function pi(){
//     return 3.14;
// }

// // use 
// console.log(pi());

// // store then use
// var output = pi();
// console.log(output);

// iv. with argument and with return type

// function result(marks){
//     if(marks>=35){
//         return "Pass";
//     }else{
//         return "Fail";
//     }
// }

// console.log(result(5));




function arithmetic(n1,n2,op){
    switch (op) {
        case '+' :
            return n1+n2;
            
        case '-' :
            return n1-n2;
              
        default:
            return "Please Enter Valid Choice!!";     
    }
}

console.log(arithmetic(1,2,'+'));

/* 
1. normal switch :
    use break keyword 
    continue (rare)
    return X

2. normal if-else :
    break X
    continue X
    return X

3. switch+function   OR if-else+function :
    - use return keyword

4. loop > if / switch :
    use break
    use continue
*/



// function peli(){

//     while(){
//         if(){
//             break;
//         }
//     }
// }