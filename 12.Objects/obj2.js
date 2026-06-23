// var user = {
//     fname : "Raj",
//     lname : "shah",
//     age : 12,
//     gender : "Male",
//     address : {
//         city : "RJK",
//         state : "Gujarat",
//         nation : "India"
//     }
// };
// console.log(user);

//1. Nested Object :
// console.log(user.address);
// console.log(user["address"]);
// console.log(user["address"]["city"]);
// console.log(user["address"].city);
// console.log(user.address.city);
// console.log(user.address["city"]);







//2. Object with Array :
// var user = {
//     fname : "Raj",
//     lname : "shah",
//     age : 12,
//     Hobbies : ["Playing Games","Reading Books"],
//     gender : "Male",
//     address : {
//         city : "RJK",
//         state : "Gujarat",
//         nation : "India"
//     }
// }; 

// console.log(user.Hobbies[1]);

// var users = [
//     {
//     fname : "Raj",
//     lname : "shah",
//     age : 12,
//     Hobbies : ["Playing Games","Reading Books"],
//     gender : "Male",
//     address : {
//         city : "RJK",
//         state : "Gujarat",
//         nation : "India"
//     }
//     },
//     {
//     fname : "Sahil",
//     lname : "Patel",
//     age : 20,
//     Hobbies : ["Watcing Series","Sleeping"],
//     gender : "Male",
//     address : {
//         city : "AMD",
//         state : "Gujarat",
//         nation : "India"
//     }
//     }
// ];

// console.log(users[1]["address"]["city"]);



//3. Computed Properties :
// var key1 = "fname";
// var key2 = "email";

// var value1 = "Raj";
// var value2 = "raj@gmail.com";

/*
{
    fname : "Raj",
    email : "raj@gmail.com"
}

*/
// var user = {
//     [key1] : value1,
//     key2 : value2
// };
// console.log(user);

//4. Nested Array : (rare)
// var arr = [
//     [],
//     [],
//     []
// ];
// var arr = [
//     [11,34,67,8],
//     [22,57,99]
// ];
// console.log(arr[0][1])

//5. Array De-structuring :
// var arr = [11,34,67,23];
//          0 1  

// var [,,num1] = arr;

// [num1] = [11,34,67,23]
// [,,num1] = [11,34,67,23]

// console.log(num1); //num1

// var arr = [
//     [11,34,67,8],
//     [22,57,99]
// ];

// var [,[num2,,num1]] = arr;

// console.log(num1,num2);

//6. Object De-structuring:
// var user = {
//     fname : "Raj",
//     lname : "shah",
//     age : 12,
//     gender : "Male",
//     address : {
//         city : "RJK",
//         state : "Gujarat",
//         nation : "India"
//     }
// };

// var {address} = user;

// console.log(address.city);

//7. Optional  Chaining : 
// var user = {
//     fname : "Raj",
//     lname : "shah",
//     age : 12,
//     gender : "Male"
// };

// console.log(user?.address?.city);

// extra : obj and array with const


/*
DB : 
users 

[
{},
{}
]


DB : 

[
    [
        {},
        {}
    ]
    []
    []
]

*/ 

var users = [
    {
    fname : "Raj",
    lname : "shah",
    age : 12,
    Hobbies : ["Playing Games","Reading Books"],
    gender : "Male",
    address : {
        city : "RJK",
        state : "Gujarat",
        nation : "India"
    }
    },
    {
    fname : "Sahil",
    lname : "Patel",
    age : 20,
    Hobbies : ["Watcing Series","Sleeping"],
    gender : "Male",
    address : {
        city : "AMD",
        state : "Gujarat",
        nation : "India"
    }
    }
];

console.log(users);

for (const element of users) {
    console.log(element.address);
}