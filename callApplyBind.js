/*
  call,apply,bind are the methods which are used to control the context of function which is invoked

  This methods are useful to borrow functions and use to another object

*/

let person = {
    name : 'Souvik Roy',
    designation : 'Associate Engineer',
    skills : 'Javascript',
    printAboutFunction : function (){
          console.log(`${this.name} :- ${this.designation}`)
    }
}
// person.printAboutFunction()

let person1 = {
    name : 'Akshay Saini',
    designation : 'Senior engineer',
    skills : 'Javascript'
}

// using call method using function borrowing

// person.printAboutFunction.call(person1)

let person2 = {
    name : 'Priyank sharma',
    designation : 'Frontend engineer',
    printInfo : function(salary,puntuation){
        console.log(`${this.name} :- ${this.designation} salary :- ${salary} ${puntuation}`);
    }
}

// person2.printInfo.call(person1,36000)
// person2.printInfo.call(person,36000)



// Apply :- It is just like Apply but here we pass arguments in the form of array

// person2.printInfo.apply(person,[36000,'!'])
const person4 = person2.printInfo.bind(person,36000,'!')
person4()








