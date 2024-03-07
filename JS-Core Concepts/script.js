// Q1- Write a function “table” that takes a parameter and Prints Its Multiplication Table. Use variables to pass as an argument.

function table(x) {
  for (let i = 1; i <= 10; i++) {
    console.log(x + " x " + i + " = " + x * i);
  }
}
table(5);

// Q2- State Differences between let , var and const keywords.

// 1. let - let is block scope
//        - can be updated but no re-declared

// 2. var - var is function scope
//        - can be updated and re-declared

// 3. const - const is block scope
//          - cannot be updated and re-declared

// Q3 - Function "max" to find the maximum element and determine if it's even or odd:
function max(arr) {
    
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(`The maximum element in the array is ${max}`);
    if(max % 2 == 0){
        console.log(max + " is even");
    }
    else{
        console.log(max + " is odd");
    }
}

max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Q4 - Object "Person" with a greet function:

let person = {
    Name: "Upskill Mafia Member",
    City : "Medchal",
    greet: function() {
        const firstName = this.Name.split(' ')[0];
        console.log(`Hello ${firstName}`);
    }
  };
  
  person.greet();

//Q5 - Utilizing setInterval to display numbers 1 through 10 with a 10-second interval:
let count = 1;
const intervalId = setInterval(() => {
    if (count > 10) {
        clearInterval(intervalId);
    } else {
        console.log(count);
        count++;
    }
}, 10000);



