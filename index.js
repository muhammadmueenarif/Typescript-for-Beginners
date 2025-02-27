"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// console.log('Kashan Moin here');
// let num:number=10;
// console.log(num);
// num= "John";
// let age:number = 20;
// age = 40;
// console.log(`the age is ${age}`);
// const value:String = "Kashan"
// boolean
var statement = true;
console.log(statement);
// array
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var names = ["john", "clark", "tony"];
console.log(names);
// objects
var person = {
    name: "Kashan", age: 20,
    email: "kashanmoin@gmail.com", phone: 1234567890
};
console.log(person);
// | is used to assign more than one data type so in this case it can store the 
// number as well as string. 
var a = "20";
a = 20;
console.log(a);
// any data type means it can be of any type 
var x = 10;
x = "Hello";
x = true;
console.log(x);
// function. parameter x that can be of any type. we can set value of parameter to number or any other.
// x:number, y:string or x:number y:number 
var userID = function (x, y) {
    return x + y;
};
console.log(userID(100, "for Kashan"));
// interfaces. when we assign type in objects it becomes very lengthy so instead of assigning them in objects 
// we make a interface and use that interface name for objects where we need.
// interface Details { name: string, age: number, email: string, userIDname:()=>string }
// let Persons: Details = {
//     name: "Kashan", 
//     age: 20, 
//     email: "kashanmoin@gmail.com",
//     userIDname:function(){
//         return "Kashan Moin Here";
//     }
// };
// we cannot call directly userIDname but use it as Persons.userIDname because it is object of persons
// console.log(Persons, Persons.userIDname());
// class
var myapp = /** @class */ (function () {
    // getting username from instance parameter of class. 
    function myapp(username) {
        this.username = this.username;
    }
    myapp.prototype.getName = function () {
        console.log(this.username);
    };
    return myapp;
}());
// instance of class myapp
var user1 = new myapp('New User');
user1.getName();
// array methods. push, pop, shift, unshift, concat, slice. 
var numbers = [1, 2, 3, 4, 5];
numbers.push(6); //add number to end of array
console.log(numbers);
numbers.pop(); //remove last element of array
console.log(numbers);
numbers.shift(); //remove first element of array.
console.log(numbers);
numbers.unshift(0); //add element at start 
console.log(numbers);
var numbers2 = [7, 8, 9];
var combined = numbers.concat(numbers2); //concat is used to combine two arrays
console.log(combined);
var sliced = combined.slice(2, 5); //slice is used to create new array from existing array
console.log(sliced);
//filter and map
var filteredArray = combined.filter(function (num) { return num > 5; }); //filter numbers greater than 5.
console.log(filteredArray);
var doubledArray = combined.map(function (num) { return num * 2; }); //double each number.
console.log(doubledArray);
// reduce
var reducedArray = [5, 8, 10, 2, 20,];
var sum = reducedArray.reduce(function (acc, curr) { return acc + curr; }, 0); //print sum.
console.log(sum);
// for max number
var max = reducedArray.reduce(function (acc, curr) { return Math.max(acc, curr); });
console.log(max);
// foreach and findindex
var score = [150, 741, 841, 22, 410]; //find index of number 20.
var highScore = score.find(function (score) { return score > 500; });
var highScoreIndex = score.findIndex(function (score) { return score > 800; });
console.log("high score index is ".concat(highScoreIndex));
console.log("high scores are ".concat(highScore));
var fruits = ["apple", "banana", "orange"];
fruits.forEach(function (fruits) { return console.log(fruits); }); //print each element of array. if we print direct 
//  console.log(fruits), it will return array but for each return element of array not in array format.
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setmyName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.myName = function () {
        return this.name;
    };
    return Child;
}(Parent));
var name1 = new Child();
name1.setmyName('John Doe');
console.log(name1.myName());
// modules
var login_1 = require("./login");
var signup_1 = require("./signup");
var login = new login_1["default"]();
console.log(login.data, login.userName);
var signup = new signup_1["default"]();
console.log(signup.data, signup.userName);
//void 
var number;
function printNumber() {
    number = 40 * 50 * 44; //if we don't use return it will show undefined. when we use return, then not undefined.
    //the type of function is changed to that return value like in this case number.
}
console.log(number);
//unknown type 
var data;
data = 10;
data = "Hello";
data = true;
var values;
values = data; // this is valid because any type can be assigned to any type. this will show true because it 
// is last value assigned to data variable.
// if we assign data type unknown to data variable then the error will occur. because type unknow is not 
//assignable to type string.  
// However, introducing unknown results in a type mismatch error.
console.log(data);
