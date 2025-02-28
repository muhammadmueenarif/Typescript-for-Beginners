export{}
// console.log('Kashan Moin here');
// let num:number=10;
// console.log(num);

// num= "John";



// let age:number = 20;
// age = 40;
// console.log(`the age is ${age}`);

// const value:String = "Kashan"
 
// boolean
let statement:boolean = true;
console.log(statement);


// array
let arr:number[] = [1,2,3,4,5];
console.log(arr);
let names:string[] = ["john", "clark", "tony"];
console.log(names);

// objects
let person: {name: string, age: number,email:string, phone:number} = {
    name: "Kashan", age: 20, 
    email: "kashanmoin@gmail.com", phone: 1234567890};
console.log(person);

// | is used to assign more than one data type so in this case it can store the 
// number as well as string. 
let a: number | string = "20";
a= 20;
console.log(a);


// any data type means it can be of any type 
let x: any = 10;
x = "Hello";
x = true;
console.log(x);

// function. parameter x that can be of any type. we can set value of parameter to number or any other.
// x:number, y:string or x:number y:number 
// const userID = (x,y):number => {
//     return x+y;
// };

// console.log(userID(100,"for Kashan"));

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
// class myapp {
//     username:string;
//     // getting username from instance parameter of class. 
//     constructor(username){
//         this.username = this.username;
//     }
//     getName(){
//         console.log(this.username);
//     }
// }
// // instance of class myapp
// let user1 = new myapp('New User');
// user1.getName();


// array methods. push, pop, shift, unshift, concat, slice. 
let numbers:number[] = [1,2,3,4,5];
numbers.push(6); //add number to end of array
console.log(numbers);

numbers.pop(); //remove last element of array
console.log(numbers);

numbers.shift(); //remove first element of array.
console.log(numbers);

numbers.unshift(0); //add element at start 
console.log(numbers);

let numbers2:number[] = [7,8,9];
let combined:number[] = numbers.concat(numbers2); //concat is used to combine two arrays
console.log(combined);

let sliced:number[] = combined.slice(2,5); //slice is used to create new array from existing array
console.log(sliced);

//filter and map
let filteredArray:number[] = combined.filter(num => num > 5); //filter numbers greater than 5.
console.log(filteredArray);

let doubledArray:number[] = combined.map(num => num * 2); //double each number.
console.log(doubledArray);

// reduce
let reducedArray:number[] = [5,8,10,2,20,];
let sum:number = reducedArray.reduce((acc, curr) => acc + curr, 0); //print sum.
console.log(sum);
// for max number
let max:number = reducedArray.reduce((acc, curr) => Math.max(acc, curr));
console.log(max);


// foreach and findindex
let score:number[] = [150, 741, 841, 22, 410]; //find index of number 20.
let highScore  =score.find(score => score >500);
let highScoreIndex = score.findIndex(score=> score >800);
console.log(`high score index is ${highScoreIndex}`);
console.log(`high scores are ${highScore}`);


let fruits:string[] = ["apple", "banana", "orange"]
fruits.forEach(fruits => console.log(fruits)); //print each element of array. if we print direct 
//  console.log(fruits), it will return array but for each return element of array not in array format.


// classes
// class Parent {
//     name;
//     setmyName(name) {
//         this.name = name;
//     }
// }

// class Child extends Parent {
//     myName() {
//         return this.name;
//     }
// }

// const name1 = new Child();
// name1.setmyName('John Doe');
// console.log(name1.myName());


// modules
import mylogin from "./login"
import mysignup from './signup'

let login =  new mylogin();
console.log(login.data, login.userName);
let signup = new mysignup();
console.log(signup.data, signup.userName);

//void 
let number; 
function printNumber() { //you can write :void after the function bracket. type of function will become that of return result.
    number = 40*50*44; //if we don't use return it will show undefined. when we use return, then not undefined.
    //the type of function is changed to that return value like in this case number.
}

console.log(number);

//unknown type 
let data:any;
data = 10;
data = "Hello";
data = true;

let values:string;
values = data; // this is valid because any type can be assigned to any type. this will show true because it 
// is last value assigned to data variable.
// if we assign data type unknown to data variable then the error will occur. because type unknow is not 
//assignable to type string.  
// However, introducing unknown results in a type mismatch error.


console.log(data);

// access modifiers. public and private. 
class newUsers {
    private name="";
    setmyName(name:string) {
        this.name = name;
    }
    displayMyName() {
        console.log(this.name);
    }
    private getLength(){
        console.log(this.name.length);
    }
}

let users = new newUsers();
users.setmyName('David Warner');
// users.name= "Ricky Ponting"; //we get error because name is private and we can't access it outside class.
users.displayMyName(); // this will print David Warner because it is public.
// users.getLength(); // this will show error because it is private method. 

// constructors
class Person {
    name:string;
    age:number;
    constructor(name:string, age:number){
        //if we remove constructor and then try to print value then we get undefined error value. 
        // we can remove these below lines and write public with name and age in constructor then we not get error
        this.name=name; 
        this.age=age;
    }
    greeting() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("Kashan", 10);
person1.greeting();


// promises. 
function fetchData(): Promise<String> { 
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        // if condition is true then resolve promise otherwise reject it
    const data = "This is fetched data";
    resolve(data);
    }, 2000);
})
};

fetchData().then((data)=> {
    console.log("Data receieved",data);
}).catch((error)=> {
    console.log("Error occurred", error);
})