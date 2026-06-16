// Scope : 
// 1. Global Scope
// 2. Local Scope 
// 3. Function Scope  : Temp Scope
// 4. Lexical Scope   (remaining   after array)

// block :  { }

// var a = 12;
// let b = 14;
// const c = 13;


// console.log(a);
// console.log(b);
// console.log(c);

// if(1){
//   console.log(a);
//   console.log(b);
//   console.log(c);  
// }

// function add(){
//     console.log(a);
// }
// add();


// {
//     let a = 12;
//     console.log(a);
// }
//  console.log(a);


// {
//     var a = 12;
//     console.log(a);
// }
//  console.log(a);



// global :  var  
// local :  let,const


// let a = 100;
// {
//     var a = 1000;
//     console.log(a);
// }



function add(){
    var a = 12;
    console.log(a);
}
add();
    console.log(a);
