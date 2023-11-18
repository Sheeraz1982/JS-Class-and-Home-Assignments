// Solution by IF & Else Command:
// Ques#1// Write a program to check whether the given input number is 
// divisible by 3 or else show a message “Number is not divisible 
// by 3?

// var number = +(prompt("Enter a number:"));

// if (number % 3 === 0) {
//     console.log("Number is divisible by 3");
// } else {
//     console.log("Number is not divisible by 3");
// }


// Solution by Create Function:

// function checkDivisible() {
//     var numberInput = document.getElementById("numberInput").value;
//     var number = +(numberInput);

//     if (number % 3 === 0) {
//         document.getElementById("resultMessage").textContent = "Number is divisible by 3";
//     } else {
//         document.getElementById("resultMessage").textContent = "Number is not divisible by 3";
//     }
// }


// Check Even or ODD Number:
// Ques#2// Write a program that checks whether the given input is an even 
// number or an odd number?

// function checkCondition(){
//     const numberInput = document.getElementById("anyNumber").value;
//     const number = +(numberInput);
//     if (number % 2 === 0) {
//         document.getElementById("resultMessage").textContent = "This is Even Number";
//     } else {
//         document.getElementById("resultMessage").textContent = "This is an ODD Number";
//     }
// }


// If/Else Statement:
// Ques#3// Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough", 
// otherwise output "Too young"?

// const age = +(prompt("Enter a number:"));
// if (age >= 18){
//     console.log("OLD Enough");
// } else {
//     console.log("Too Young");
// }

// Ques#4// Write a program that prompts the user for their name, and then displays a special 
// greeting to that person if their name is the same as yours. If the name entered by 
// the user is anything other than your name, your code should not produce any output?

// let myName = 'Syed Sheeraz Ali'
// const userName = prompt("Enter Any Name");
// if (userName === myName){
//     console.log("Your Name is like my Name and I am glad");
// }else{
//     console.log(" ")
// }

// function checkCondition(){
//     const numberInput = document.getElementById("anyNumber").value;
//     const number = +(numberInput);
//     if (number % 2 === 0) {
//         document.getElementById("resultMessage").textContent = "This is Even Number";
//     } else {
//         document.getElementById("resultMessage").textContent = "This is an ODD Number";
//     }
// }


// Ques#5// Write a program to check whether the given input number is divisible by 3 or not by 
// using Switch Case statements. Show a message “Number is not divisible by 3” or “Number 
// is divisible by 3”?

// function checkDivisibilityBy3(number) {
//     switch (number % 3) {
//         case 0:
//             console.log("Number is divisible by 3");
//             break;
//         default:
//             console.log("Number is not divisible by 3");
//     }
// }
// let inputNumber = 11; 
// checkDivisibilityBy3(inputNumber);


// Ques#7// Write a program to create a calculator for +, -, *, /, % using switch case statements. 
// (number1, number2 and operator will be input)


// function calculate(number1, number2, operator) {
//     switch (operator) {
//         case '+':
//             return number1 + number2;
//         case '-':
//             return number1 - number2;
//         case '*':
//             return number1 * number2;
//         case '/':
//             // Check if the divisor is not zero
//             if (number2 !== 0) {
//                 return number1 / number2;
//             } else {
//                 return 'Error: Division by zero';
//             }
//         case '%':
//             // Check if the divisor is not zero
//             if (number2 !== 0) {
//                 return number1 % number2;
//             } else {
//                 return 'Error: Modulo by zero';
//             }
//         default:
//             return 'Error: Invalid operator';
//     }
// }

// // Taking user input
// let number1 = parseFloat(prompt('Enter the first number:'));
// let number2 = parseFloat(prompt('Enter the second number:'));
// let operator = prompt('Enter the operator (+, -, *, /, %):');

// // Performing the calculation
// let result = calculate(number1, number2, operator);

// // Displaying the result
// console.log(`Result: ${result}`);



// Que#8// Write a program that takes time as input from user in 24 hours clock format 
// like: 1900 = 7pm. Implement the following case using if, else & else if statements

// / Get user input for time in 24-hour format
// var inputTime = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");

// // Convert the input to a number
// var time = parseInt(inputTime);

// // Check if the input is valid
// if (isNaN(time) || time < 0 || time > 2359) {
//     console.log("Invalid input. Please enter a valid time in 24-hour format.");
// } else {
//     // Convert the time to 12-hour format
//     var twelveHourFormat;

//     if (time < 1000) {
//         twelveHourFormat = "0" + Math.floor(time / 100) + ":" + (time % 100);
//     } else if (time < 1200) {
//         twelveHourFormat = Math.floor(time / 100) + ":" + (time % 100);
//     } else if (time < 1300) {
//         twelveHourFormat = time + " (12:00 PM)";
//     } else if (time < 2200) {
//         twelveHourFormat = "0" + (Math.floor(time / 100) - 12) + ":" + (time % 100);
//     } else {
//         twelveHourFormat = (Math.floor(time / 100) - 12) + ":" + (time % 100);
//     }

//     console.log("The time in 12-hour format is: " + twelveHourFormat);
// }

// Ques#11

// var firstName = "Ali";

// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// } else {
//     document.write("You are not Fahad");
// }

// Ques#12 Corrected Statement
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);


// var originalArray = [1, 2, 3, 4, 5];
// var newArray = originalArray.slice(1, 4);

// console.log(newArray);  // Output: [2, 3, 4]

// var pets = ["dog", "cat", "fly", "bug", "ox", "bull", "lion", "monkey"]
// var noPets = pets.slice(2, 7);
// console.log(noPets)

// function rollDice() {
//     const player1Dice = document.getElementById('player1Dice');
//     const player2Dice = document.getElementById('player2Dice');
//     const resultDisplay = document.getElementById('result');
//     const player1 = document.getElementById('player1');
//     const player2 = document.getElementById('player2');

//     const player1Number = document.getElementById('player1Number');
//     const player2Number = document.getElementById('player2Number');

//     player1.textContent = "";
//     player2.textContent = "";
//     player1Number.textContent = "";
//     player2Number.textContent = "";

//     // Generate random numbers for dice roll (1-6)
//     const p1 = Math.floor(Math.random() * 6) + 1;
//     const p2 = Math.floor(Math.random() * 6) + 1;

//     player1Number.textContent = p1;
//     player2Number.textContent = p2;

//     // Change dice images based on the random numbers
//     player1Dice.src = `./../Dice_Game/Assets/dice${ p1 }.png`; 
//     player2Dice.src = `./../Dice_Game/Assets/dice${ p2 }.png`;

//     // Determine the winner
//     if (p1 > p2) {
//         resultDisplay.textContent = "Player 1 wins!";
//         player1.textContent = "Winner";
//     } else if (p2 > p1) {
//         resultDisplay.textContent = "Player 2 wins!";
//         player2.textContent = "Winner";
//     } else {
//         resultDisplay.textContent = "It's a tie!";
//         alert("Its a tie!")
//     }
// }

// let grade = 'C';

// switch (grade) {
//     case 'A':
//         console.log('A Grade');
//         break
//     case 'B':
//         console.log('B Grade');
//         break
//     case 'C':
//         console.log('C Grade');
//         break
// default:
//     console.log('Pappu Fail Hogaya');
// }

// let age = 24;

// switch (age) {
//     case 20:
//         console.log('Young Guy');
//         break
//     case 24:
//         console.log('Very Young Guy');
//         break
//     case 30:
//         console.log('OLD Guy');
//         break
// default:
//     console.log('Pappu Fail Hogaya');
// }

// let num = 10;
// switch (true) {
//     case num > 5:
//         console.log('if chal rha hai')
//         break
//     default:
//         console.log('else chal raha hai');
// }

// let arr = []
// function greetUser(){
//     arr.push (text.value);
//     text.value = ''
    
    // console.log(arr)
// }

// let currentDate = new Date()
// console.log(currentDate);

// let currentDate = new Date ('May 30 , 1982')
// console.log(currentDate);

// let currentDate = new Date()
// console.log(typeof(currentDate));

// const todo = document.querySelector('#todo');
// const ul = document.querySelector('#ul');


// const arr = [];
// function renderTodo() {
//     for (let i = 0; i < arr.length; i++) {
//         ul.innerHTML += `<li>${arr[i]}<button id="dTodo" onclick="deleteTodo(${i})">delete</button>
//         <button id="eTodo" onclick="editTodo(${i})">edit</button></li>`
//     }
// }
// function addTodo() {
//     ul.innerHTML = ''
//     arr.push(todo.value);
//     console.log(arr);
//     renderTodo()
//     todo.value = '';
// }


// function deleteTodo(i) {
//     ul.innerHTML = ''
//     console.log('todo deleted', arr[i]);
//     arr.splice(i, 1);
//     console.log(arr);
//     renderTodo()

// }
// function editTodo(i) {
//     ul.innerHTML = ''
//     // console.log('todo edited' , arr[i]);
//     const editedVal = prompt('enter value to update');
//     arr.splice(i, 1, editedVal);
//     renderTodo()
// }


// // const fruit = ['apple' , 'banana' , 'orange'];
// // for (let i = 0; i < fruit.length; i++) {
// //     console.log(fruit[i]);
// // }

// // renderTodo()

// // Literal:
// // var name = 'World';
// // var greeting = `Hello, ${name}! , I am here for you ${name}!`;
// // console.log(greeting);

// var length = 2 * 0.3048; // 2 feet to meters
// var width = 4 * 0.3048; // 4 feet to meters
// var thickness = 2 * 0.0254; // 2 inches to meters

// // Calculate area
// var area = length * width;

// // Density in kg/m³
// var density = 100;

// // Calculate weight
// var weight = area * thickness * density;

// console.log('Weight of Rockwool board:', weight, 'kg');

// let a = 5
// if (a > 9){
//     console.log(result);
// }

var date = new Date ()
var getday = date.getDay()
document.write(getday);




