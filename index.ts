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
const userID = (x,y):number => {
    return x+y;
};

console.log(userID(100,"for Kashan"));

// interfaces. when we assign type in objects it becomes very lengthy so instead of assigning them in objects 
// we make a interface and use that interface name for objects where we need.
interface Details { name: string, age: number, email: string, userIDname:()=>string }

let Persons: Details = {
    name: "Kashan", 
    age: 20, 
    email: "kashanmoin@gmail.com",
    userIDname:function(){
        return "Kashan Moin Here";
    }
};

// we cannot call directly userIDname but use it as Persons.userIDname because it is object of persons
console.log(Persons, Persons.userIDname());

