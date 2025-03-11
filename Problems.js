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

// let output = {}

// const newArr= []

// users.forEach((item)=>{
//   if(item.lastName.startsWith('R')){
//     newArr.push(item)
//   }
// })

// console.log(newArr);



// Group Users by Age



// Find the Oldest User

// const oldUser = users.reduce((accumulator,user)=>{
//   if(accumulator < user.age){
//     accumulator = user.age
//   }
//   return accumulator
// },0)

//  users.forEach((item)=>{
//   if(item.age === oldUser){
//     // console.log(item);
//     console.log(`${item.firstName} ${item.lastName}'s age is ${item.age}`);
//   }
// })


// Calculate the Average Age

// const sumOfAge = users.reduce((accumulator,user,)=>{
//     accumulator = accumulator + user.age
//     return accumulator
// },0)

// console.log(sumOfAge/users.length);


//  Extract Full Names

// users.forEach((item)=>{
//   console.log(`${item.firstName} ${item.lastName}`);
// })
const newArr = users.map((item)=> `${item.firstName} ${item.lastName}`)
console.log(newArr);


// Find Users with Age Greater Than 30

const ageGreaterThan30 = users.filter((item)=>{
   return item.age > 30
})

console.log(ageGreaterThan30);


// Sort Users by Age


//Learn about objects

