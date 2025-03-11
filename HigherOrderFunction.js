/*

Higher order functions are those functions which takes functions as arguments or retrun function as results

*/

// calculate area of circle for the array of radius

const radius = [5,6,7,8,9,10]

function calculateArea(radius){
    let output = [];
    radius.forEach((item)=>{
      output.push(Math.PI * item * item)
    })
    return output
}

// calculate circumference for the array of radius

function calculateCircumference(radius) {
    let output = []
    radius.forEach((item)=>{
       output.push(2*Math.PI*item*item)
    })
    return output
}

// console.log(calculateCircumference(radius));

// console.log(calculateArea(radius));


// we are individually creating functions to show output of circumference and area of circle


function calculateArea(radius){
    return Math.PI * radius * radius
}

function calculateCircumference(radius){
    return 2 * Math.PI * radius * radius
}

// calculate diamter

function diameter(radius){
   return 2 * radius
}

function displayResult(radius,operation){
    let output = []
    
    radius.forEach((item)=>{
        return output.push(operation(item))
    })
    return output
}



console.log(displayResult(radius,calculateArea));
console.log(displayResult(radius,calculateCircumference));
console.log(displayResult(radius,diameter));