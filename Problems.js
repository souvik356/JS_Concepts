const users = [
    {firstName: 'Souvik', lastName: 'Roy', age: 29},
    {firstName: 'Pranab', lastName: 'Bhatt', age: 41},
    {firstName: 'Ankit', lastName: 'Das', age: 18},
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 }
]

// QUESTIONS

// print count of ages

// let output = {}

// users.forEach((item)=>{
//    if(output[item.age]){
//     output[item.age]++
//    }
//    else{
//     output[item.age] = 1
//    }
// })

// console.log(output);

// Filter Users by Last Name   

let output = {}

const newArr= users.map((item)=>{
  return item.lastName.startsWith('R')
})
console.log(newArr);


// Group Users by Age
// Find the Oldest User
// Calculate the Average Age
//  Extract Full Names
// Find Users with Age Greater Than 30
// Sort Users by Age
