const number = [2,3,4,5,6,7,8,9]


//filter 

const removeFour = number.filter((item)=>{
   return(
    item !== 4
   )
})

// console.log(removeFour);


const oddNumbers = number.filter((item)=>{
   return (
    item % 2 !== 0
   )
})

// console.log(oddNumbers);

const binary = function(num){
   return num.toString(2)
}

const binaryArray = number.map(binary)

// console.log(binaryArray);

function threeTime(num){
    return num * 3
}

// const threeTimes = number.map(threeTime)
const threeTimes = number.map((item)=>{
   return (
    item * 3
   )
})

// console.log(threeTimes);


// Reduce 

/* 

   Reduce is a function which takes all value of array and make it into single element

*/

const sum = number.reduce((accumultor,current)=>{
  // accumulator act as sum = 0
  // current act as arr[i]
  accumultor = accumultor + current
  return accumultor
})

// console.log(sum);

const users  = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
]

// print the users with age less than 30 

// print the users with age less than 30 using reduce method

const usersWithAgeless30 = users.reduce((accumulator,user)=>{
   if(user.age<30){
    accumulator[user.firstName] = user.age
   }
   return accumulator
},{})

console.log(usersWithAgeless30);

// const usersWithAgeless30 = users.reduce((accumulator,user)=>{
//    if(user.age<30){
//     accumulator.push(user.firstName)
//    }
//    return accumulator
// },[])

// console.log(usersWithAgeless30);






// const usersWithAgeless30 = user.filter((item)=>{
//    return item.age <= 30
// })

// const names = usersWithAgeless30.map((user)=>{
//   return (
//     `${user.firstName} ${user.lastName} ${user.age}`
//   )
// })
// console.log(names);
// console.log('usersWithAgeless30',usersWithAgeless30);



// const output = {}
//  users.forEach((item)=>{
//    if(output[item.age]){
//     output[item.age]++
//    }
//    else{
//     output[item.age] = 1
//    }
// })
// console.log(output);

// const newArr = user.map((item)=>{
//    return(
//     `${item.firstName} ${item.lastName}`
//    )
// })
// console.log(newArr);

// const ageArr = users.reduce((accumulator,current)=>{
//   if(accumulator[current.age]){
//     accumulator[current.age] ++
//   }
//   else{
//     accumulator[current.age] = 1
//   }
//   return accumulator
// },{})

// console.log(ageArr);



