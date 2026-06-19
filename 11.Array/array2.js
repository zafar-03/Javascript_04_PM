// var arr = [34,53,67,11,23,90];

//  foreach,  method > foreach  loop     : array

// console.log("ForEach : ");
// arr.forEach((element)=>{
//     return element;
// });

// map ,
// console.log("Map : ");
// var output2 =  arr.map((element)=>{
//     return element>50;
// });

// filter,
// console.log("Filter : ");
// var output3 =  arr.filter((element)=>{
//     return element>50;
// });
// console.log(output2);
// console.log(output3);


// var arr = [34,53,67,11,23,90,11];

//  indexof,  : starting
// console.log(arr.indexOf(11));

// console.log(arr.lastIndexOf(11));



//  includes, 
// console.log(arr.includes(23));

//  every,  true/false
// var ans1 = arr.every((element)=>{
//     console.log(element);
//     return element>20;
// });
// console.log(ans1);
//   some,   true/false
// var ans1 = arr.some((element)=>{
//     console.log(element);
//     return element>20;
// });
// console.log(ans1);

/////////////////////////
//   sort 
// console.log(arr);

// arr.sort((a,b)=>{return a-b});
// arr.sort((a,b)=>{return b-a});

// console.log(arr);

///////////////////////////////

var arr = [11,10001,1010101,1000000001,111,11101];

console.log(arr);

// arr.sort();
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[i] > arr[j]){
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr);

arr.sort((num1,num2)=>{
    return num2 - num1;
})
console.log(arr);