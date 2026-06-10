console.log("Control Statement ");
// There 3 Types. 
//1. Conditional Control Statement.
        //1. if statement 
        // if(condition){
        //     //code     condition true
        // }


        //2. if-else statement
        // if(condition){
        //     //code     condition true
        // }else{
        //     //code     condition false
        // }

        //3. Ladder statement / else-if Statement
        // if(condition1){
        //     //code     condition1 true
        // }else if(condition2){
        //     //code     condtion2 true
        // }else{
        //     //code    both condition false
        // }


        //4. Nested if-else Statement
        // if(condition1){
        //     //code     condition true
        //     if(condition2){
        //         //code    condition1 and condition2 both true
        //     }else{
        //         //code    condition1 true condition2 false
        //     }
        // }else{
        //     //code     condition false
        // }

var n1 = Number(prompt("Enter the Value of N1 : "));
var n2 = Number(prompt("Enter the Value of N2 : "));
var n3 = Number(prompt("Enter the Value of N3 : "));

document.querySelectorAll('p')[0].innerHTML = "Value of N1 : " + n1;
document.querySelectorAll('p')[1].innerHTML = "Value of N2 : " + n2;
document.querySelectorAll('p')[2].innerHTML = "Value of N3 : " + n3;

if(n1>n2){
    if(n1>n3){
        document.querySelector('h1').innerHTML = "N1 is Greater";
    }else if(n1==n3){
        document.querySelector('h1').innerHTML = "N1 and N3 are Equal and Greater";
    }else{
        document.querySelector('h1').innerHTML = "N3 is Greater";
    }
}else if(n1==n2){
    if(n1>n3){
        document.querySelector('h1').innerHTML = "N1 and N2 are Equal and Greater";
    }else if(n1==n3){
        document.querySelector('h1').innerHTML = "All Are Equal";
    }else{
        document.querySelector('h1').innerHTML = "N3 is Greater";
    }
}else{
    if(n2>n3){
        document.querySelector('h1').innerHTML = "N2 is Greater";
    }else if(n2==n3){
        document.querySelector('h1').innerHTML = "N2 and N3 are Equal and Greater";
    }else{
        document.querySelector('h1').innerHTML = "N3 is Greater";
    }
}


// 4 Numbers


//2. Case Control Statement
        // 1. switch Statement
        // 2. Nested Switch 

//3. Loop Control Statement
        //a. Entry Control Loop
                //1. basic for loop
                //2. while loop

        //b. Exit Control Loop
                //3. do-while loop
