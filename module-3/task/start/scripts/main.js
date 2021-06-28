//console.log('test');

// Single Line comment

/*

Multiline comment

*/

let strProductName = 'Tinned Beans';
let price = 0.99;
let quantity = 4;
let blnInstock = true;
let discountAmount = 0;

// console.log(strProductName);
// console.log(price);

//List of things that are "false"
let strVariable = '';
let numberOfKittens = 0;
let blnVariable = false;
let arrVariable = [];
let objVariable = {};
let variable; //undefined
let emptyVar = null;

//#Task 4
/*function showProductName(productName="test",secondVariable="Forbes"){
    console.log(productName);
    console.log(secondVariable);
    productName += ' Hello';
    console.log(productName);
}

let myName = 'Jonathan';
let mySurname = 'Forbes';

showProductName(myName, mySurname);*/

/*function showProductName(productName="test",secondVariable="Forbes"){
    productName = productName + productName;
    return productName;
}

let myName = 'Jonathan';
let mySurname = 'Forbes';

let strNewProductName = showProductName(myName);
console.log(strNewProductName);

console.log(showProductName(showProductName(myName)));*/

/*//task#5
function totalPrice(productPrice=0,productQuantity=0){
    console.log(productPrice * productQuantity);
}

totalPrice(price,quantity)*/

//Alex task#5
function totalPrice(productPrice=0,productQuantity=0){
    let totalPrice = productPrice * productQuantity;
    return '£' + totalPrice.toFixed(2); //toFixed - Convert a number into a string, rounding the number to keep only two decimals
}

let totalPriceBeer = totalPrice(1.05,4);
//console.log(totalPriceBeer);

//Alex task#6
/*function squareNumber(num){
    let squareNumber = num * num;
    return squareNumber;
}

let square = squareNumber(9);
console.log(square);*/

/*//1.above task#6 converted to an Arrow Function
let squareNumber = (num) => {
    let squareNumber = num * num;
    return squareNumber;
}

let square = squareNumber(9);
console.log(square);*/

//2.equiv to 1. above task#6 converted to a Pure Arrow Function
let squareNumber = num => num * num;

let square = squareNumber(9);
//console.log(square);

//Variable - local vs global
//Global - strProductname
//local - those vars created inside a function

//Comparison operators
function higherOrLower(a,b){
    if(a>b){
        //console.log('Higher');
        strMessage = a + ' is higher than ' + b;
    } else {
        //console.log('lower');
        strMessage = a + ' is lower than ' + b;
    }
    //console.log(strMessage);
}

higherOrLower(5,3);
higherOrLower(5,6);
higherOrLower(112,3);
higherOrLower(50,40);
higherOrLower(15,16);

//## Task 7

function productDiscount(){
    if(quantity>1){
        price = price - discountAmount;
    }
    //console.log(price);
}

productDiscount(quantity);

//## Alex Task 7 - FizzBuzz
function fizzBuzzChecker(number){
    let strMessage = number;
    if(number % 3 == 0 && number % 5 ==0){
        strMessage = 'FizzBuzz';
    } else if (number % 5 == 0) {
        strMessage = 'Buzz';
    } else if (number % 3 == 0){
        strMessage == 'Fizz';
    }
    return strMessage;
}

/*console.log(fizzBuzzChecker(1));
console.log(fizzBuzzChecker(2));
console.log(fizzBuzzChecker(3));
console.log(fizzBuzzChecker(4));
console.log(fizzBuzzChecker(5));
console.log(fizzBuzzChecker(6));
console.log(fizzBuzzChecker(7));
console.log(fizzBuzzChecker(8));
console.log(fizzBuzzChecker(9));
console.log(fizzBuzzChecker(10));
console.log(fizzBuzzChecker(11));
console.log(fizzBuzzChecker(12));
console.log(fizzBuzzChecker(13));
console.log(fizzBuzzChecker(14));
console.log(fizzBuzzChecker(15));
*/

/*## Task 8

1. Create a function called drinkOrder which takes in two ( 2 ) parameters, one called drink then other called size
2. Inside the function create a switch statement which takes in one parameter the drink
3. For each case check for the drink
4. Then in each case console.log the drink
5. Don't forget the break statement after each case
6. And also the default statement
7. Call the drinkOrder function with the drink and size as arguments
*/

function drinkOrder(drink,size){
    //setting variable to be used inside the function
    let blnValidated = true; //true as everything is valid to begin with
    let strMessage = 'You have ordered a ' + size;
    //Validating the size argument to ensure they ordered a size we can sell
    if(size != 'small' && size != 'medium' && size != 'large'){
        // console.log('you have ordered a size we do not sell: ' + size);
        strMessage = 'you have ordered a size we do not sell: ' + size;
        // return;
        blnValidated = false;
    }
    //if tthe size is valid
    if(blnValidated){
        //creating different outputs based on the drinks argument
        switch(drink){
            case 'cola':
                // console.log('you have ordered Coca Cola');
                strMessage += ' Coca-Cola';
            break;
            case 'lemon':
                // console.log('you have ordered Schweppes');
                strMessage += ' Schweppes';
            break;
            case 'orange':
                // console.log('you have ordered Tango');
                strMessage += ' Tango';
            break;
            //validation
            default:
                //overwriting the message when the drink can't be sold
                // console.log('We don\'t sell ' + drink);
                strMessage += ' We don\'t sell ' + drink;
            break;
        }
    }  
    console.log(strMessage);
}

// drinkOrder('cola','small');
// drinkOrder('lemon','medium');
// drinkOrder('orange','large');
// drinkOrder('cola','huge');
// drinkOrder('coffee','medium');

// ## Task 9

// 1. Create a function called calculator, which takes in 3 parameters, num1, num2, operator
// 2. Inside the function use a switch statement taking in the operator as a parameter
// 3. Create 4 cases and 1 default case (Alex: 5 cases no default)
// 4. Each case should be for addition (+), subtraction (-),division (/) and multiplication (`*`)
// 5. Each case should console.log the result, for example num1 + num2, num1 / num2, etc
// 6. Call the function

// - calculator( 1, 2, '+');
// - calculator( 1, 2, '/');

function calculator(num1,num2,operator){
    //declaring sum variables
    let sum;
    //Validation for num1 & num2
    if(isNaN(num1)){
        return 'Number 1 is not a number';
    }
    if(isNaN(num2)){
        return 'Number 2 is not a number';
    }
    //switch statement for operator
    switch(operator){
        case '+':
            sum = num1 + num2;
        break;
        case '-':
            sum = num1 - num2;
        break;
        //Multiply function for all possible cases
        case '*':
        case 'x':
            sum = num1 * num2;
        break;
        case '/':
            sum = num1 / num2;
        break;
        case '%':
            sum = num1 % num2;
            break;
        //Validation for operator
        default:
            return 'You have used an invalid operator ' + operator;
        break;
    }
    return sum;
}

// console.log(calculator(10,5,'+'));
// console.log(calculator(10,5,'-'));
// console.log(calculator(10,5,'x'));
// console.log(calculator(10,5,'/'));
// console.log(calculator(10,5,'%'));
// console.log(calculator('Jonathan',5,'%'));
// console.log(calculator(10,'Jonathan','%'));
// console.log(calculator(10,5,'Jonathan'));

//##Advance Task
//remove first and last letter of a string
//Validation test - google: check if variable is a string

function removeChar(strValue){
    if(strValue.length < 4){
        return 'You must pass through a string with at least 4 characters'
    }
    if(typeof strValue != 'string'){
        return 'This function can only work if a string is passed as the argument';
    }
    let firstTrim = 1;
    let trimUpto = strValue.length -2;
    return strValue.substr(firstTrim,trimUpto);
}

console.log(removeChar('Jonathan'));

//can access a string array by key
// strValue = 'Jonathan';
// console.log(strValue.substr(1,6));

// console.log(strValue[0]);
// console.log(strValue[1]);
// console.log(strValue[2]);
// console.log(strValue[3]);
// console.log(strValue[4]);
// console.log(strValue[5]);
// console.log(strValue[6]);
// console.log(strValue[7]);