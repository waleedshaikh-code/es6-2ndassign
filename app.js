
//1- overwrite value while making new object using Object.assign
// const obj1 = {
//         firstName: "waleed",
//         lastName: "shaikh",
//         rollNo: "098",
//     }
    
//     let newObj = Object.assign({}, obj1)
//     console.log(obj1)
    
//     newObj.rollNo = "999999"
//     console.log(newObj)
    

//2- Nested Terminay Operator
// let temperature = prompt("what is the current temperature")
// let cool = "cool"
// let warm = "warm"
// function checking(){
//  const type = prompt("What type of temperature? (hot/cold)") 
//  return type 
// }
// let hot ="hot"
// let cold="cold"
// const weather = temperature == cool ? checking()==hot ? "its summer" : "its winter" : "You should wear dresses for summer"
// console.log(weather)



//3- for-in loop should not be used to an Array where the index order is important

// let student={
//     name:"waleed",
//     program:"bsit",
//     university:"bahria",
// }
// for(const n in student){
//     console.log(`${n} = ${student[n]}`)
//}

// for of loop

// let arr=["waleed","moiz","umer","hamza"]
// for(const n of arr){
//     console.log(n);
// }


//4-  What is arrow function?

// Defination:
// An arrow function expression is a compact alternative to a traditional function expression,
// but is limited and can't be used in all situations.

// ----------Simple arrow function-------------

// let welcome = () => {
//     return "waleed";
// }
// console.log(welcome());

// -----------arrow function return value by default--------------

// let welcome=()=>"waleed"
// console.log(welcome());


// -------------arrow function with parameter-------------------

// const student = (fname, lname) => `${fname} ${lname}`
// console.log(student('Waleed', 'Shaikh') )