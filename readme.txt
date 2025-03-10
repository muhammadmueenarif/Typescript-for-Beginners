Lec 1. Introduction to TypeScript
TypeScript is a programming language developed by Microsoft that enhances the capabilities of JavaScript by 
introducing static typing and other features. It can be thought of as a superset of JavaScript as it builds 
upon JavaScript's syntax and functionality, while adding new tools for developers to create more reliable and 
maintainable code.

One of the core features of TypeScript is static. Typing in JavaScript variables can hold values of any type, 
and this flexibility can sometimes lead to errors that are difficult to catch until runtime. TypeScript solve 
this issue by allowing developers to explicitly declare the types of variables, function parameters and return values.

This means you can specify whether a variable is of type, string, number, boolean, or any other custom type 
you define. This information is then used by the TypeScript compiler to catch type related errors during development 
before the code is executed basically.
So this feature significantly reduces the chances of type related bugs and enhances the overall quality of 
code.

TypeScript also features type inference, which allows the compiler to automatically determine the type of a 
variable if it's not explicitly specified.
So this strikes a balance between the strictness of static typing because static is just rigid. It's very 
strict. And the convenience of dynamic typing. Type Inference simplifies the code writing by reducing need 
for repetitive type annotations while still maintaining the benefits of type checking.

Beyond static typing. TypeScript offers a range of tools that improve the development experience. Modern 
code editors and integrated development environments Ides can leverage TypeScript type information to 
provide intelligent code completion, highlighting potential errors and offering suggestions as you write code.
This basically accelerates the development process, it reduces mistakes and encourages best practices.

Typescripts features go beyond types.
It supports the latest ECMA script features and can transpile down to various versions of JavaScript, making 
it suitable for targeting different environments.

Additionally, TypeScript allows for the creation of interfaces which define contracts that classes and objects 
must adhere to. And this promotes a more structured and organized code base by clearly defining the shape and 
behavior of different parts of the code.

The language also introduces advanced features like decorators, a form of metaprogramming that enables developers 
to enhance or modify the behavior of classes and their members. This is particularly useful in frameworks like 
Angular, where decorators are extensively used for tasks such as dependency, injection and routing configuration.

In summary, TypeScript is a powerful tool for developers seeking to improve their JavaScript projects. It offers 
static typing to catch errors early in the development process.
Type inference for convenience and the range of features that enhance code quality readability and maintainability.
Typescript's compatibility with JavaScript ecosystems, along with its ability to transpile to various JS versions, 
ensures that projects written in TypeScript can be used across a wide range of platforms and environments.
Whether you're building web applications, server side systems or other software, TypeScript provides an 
effective way to level up your development process.


Lec 2. Frameworks that use TS
Several prominent web development frameworks have chosen TypeScript as their language of choice due to its 
advantages in enhancing code quality developer productivity and project maintainability. Some of the notable 
frameworks that utilize TypeScript include number one Angular, so developed and maintained by Google.
Angular is a comprehensive framework for building dynamic web applications. Since its release, Angular 
has been a strong advocate of TypeScript. Typescript's Strong typing aligns well with Angular's 
emphasis on structured and maintainable code. This pairing ensures robust applications with a well defined 
architecture.

Number two React Created by Facebook. React is a widely used library for building user interfaces. While React 
itself doesn't require TypeScript, many developers and companies choose to use TypeScript with React to 
take advantage of its static typing features which enhance the predictability and reliability of their applications.

Number three Vue.js. Although Vue.js doesn't enforce TypeScript usage, it offers excellent TypeScript support. 
Vue.js is known for its flexibility and ease of integration, and using TypeScript with Vue.js can help maintain 
code quality and improve the development experience.

Number four next JS. So basically, Next.js is the back end framework that's heavily influenced by Angular's 
architecture and design principles. It encourages the use of TypeScript to build scalable and maintainable 
Node.js applications. TypeScript Strong typing helps prevent common errors in the back end code base.


Number five. Ionic. Ionic is a framework for building cross-platform mobile application using web technologies.
It leverages TypeScript to create performant and feature rich apps that can be deployed on various platforms, 
including iOS, Android and the Web.


Number six. Aurelia. Aurelia is a modern framework focused on simplicity and flexibility. It's designed with 
TypeScript in mind, allowing developers to easily integrate and take advantage of TypeScript features to 
create robust and maintainable applications.

These frameworks have recognized the benefits that TypeScript brings to the table, including enhanced code 
quality, better tooling, early error detection and improved collaboration among development teams. As a result, 
TypeScript has become a preferred choice for building applications in these frameworks, contributing to its 
widespread adoption in the web development community.


Lec 3. TypeScript Popularity Surge
The popularity of TypeScript, an extension of JavaScript has reached remarkable heights due to its compelling 
features that cater to the evolving needs of modern software development. This demand is particularly pronounced 
in the realm of prominent frameworks such as Angular and React, which have chosen TypeScript as their language 
of choice for a multitude of reasons. 
Let's see, what are the advantages driving TypeScript demand?
The first one is type safety for robust code. TypeScript is most distinguished feature is its static typing 
system. Unlike JavaScript where variables can change types, TypeScript enforces strict type definitions.
This eliminates a class of errors during development and results in more reliable, predictable and robust code.

Number two, early error detection by catching mistakes at compile time rather than runtime. TypeScript helps 
developers find errors early in the development process. This proactive approach minimizes debugging time and 
reduces the chances of issues arising in production environments.

Number three. Code readability and maintainability. The strong typing enforced by TypeScript leads to clearer 
and more self-documenting code. This not only makes it easier for developers to understand the code base, but 
also streamlines collaboration among teams.

Number four. Code Editor Enhancements. TypeScript type annotations Enable code editors to offer intelligent 
autocompletion real time error checking and better navigation. Enhancing the overall developer experience and productivity.


Why major frameworks prefer TypeScript?
Number one is the scale and complexity handling frameworks like Angular and React are employed for building
large scale intricate applications and Typescript's type system becomes invaluable in such scenarios as it 
helps manage the complexity of these projects. The ability to define clear interfaces and types aids in keeping 
a well-organized and comprehensible code base even as the project grows.

So the second reason is team collaboration. Collaboration among multiple developers is intrinsic to framework 
based projects. Typescript's strict typing acts as a common language that facilitates seamless collaboration.
It eliminates misunderstandings, reduces communication gaps, and ensures that all contributors adhere to 
consistent coding practices.

Number three Maintaining code quality. In larger projects, maintaining code quality can be challenging.
Typescript's enforced type checking, combined with its rich tooling ecosystem Aids in maintaining high code 
quality standards. This results in fewer bugs, easier debugging and efficient code maintenance.

Number four. Future proof reading, future proofing. Major frameworks anticipate the long term sustainability 
of their projects. TypeScript being a superset of JavaScript offers compatibility with the ever evolving JavaScript ecosystem.

This future proofs projects ensures that they can incorporate new language features and enhancements 
seamlessly.

So in conclusion, Typescripts surge in demand is driven by its ability to enhance code reliability, detect 
errors early and improve overall code quality. In the realm of major frameworks like Angular and React, TypeScript 
is chosen for its adeptness in managing complexity, facilitating teamwork, maintaining code excellence, and 
offering a forward looking approach to development.

This combination of factors positions TypeScript as an integral part of modern software development, powering 
applications with stability, scalability and collaborative efficiency.



Lec 4. JavaScript vs TypeScript
TypeScript and JavaScript are two related but distinct programming languages with varying features and

JavaScript is a widely used scripting language, primarily used for web development. It runs directly in web 
browsers and enables interactive and dynamic functionality on websites. JavaScript is dynamically typed, 
allowing variables to change types during runtime. While this flexibility can lead to quick development, it 
can also result in runtime errors that are harder to catch before execution.

While TypeScript is a superset of JavaScript developed by Microsoft. It introduces static typing where variable 
types are declared before runtime. This catches type related errors during development enhancing code quality 
and making applications more robust.

TypeScript offers type inference, reducing the need for explicit type annotations. It also supports the latest 
ECMA script features and transpiles into JavaScript for compatibility with different environments.


let's now explore the key differences between the two.
So the first difference is the type system. TypeScript has a static type system enforcing type definitions 
during development to catch errors early.
JavaScript relies on dynamic typing, which can lead to runtime errors that are detected only when the code executed.

Number two. 
So basically the second difference is the error detection. Typescript's static typing leads to better error 
detection at compile time, reducing the likelihood of type related bugs.
JavaScript errors are often discovered only during runtime. 

Number three Tooling.
TypeScript offers Advanced code editor support, including Autocompletion type checking and refactoring tools.
Thanks to its type annotations, JavaScript has more limited tooling support.

Number four code quality TypeScript type system and early error detection contribute to higher code quality 
and easier maintenance and JavaScript's dynamic typing can lead to more complex debugging and maintenance efforts.

Number five Learning Curve.
JavaScript's Dynamic nature can make it easier for beginners to start coding quickly.
TypeScript Static typing may have a steeper learning curve, but promotes better code structure and understanding 
among teams.


In summary, JavaScript is versatile for web development but lacks the robust error checking of TypeScript.
TypeScript Static typing and enhanced tooling lead to more reliable, maintainable and scalable code, making 
it a valuable choice for larger projects and teams aiming for improved code quality and collaboration.


Lec 4. Install vs code and Typescript.
open vs code terminal and run command. npm install typescript --save-dev. to install. use tsc -v to check if 
it is installed or not. you can download from the website also if you don't want to install using terminal. 

npm install -g typescript. 
Ensure that you have node js installed. 
we need to give type first then assign value like let num:number=5;
num:number= "Hello world". this is error because number but give string. 
if we are not sure we can assign type any. 
num:any= "Hy"; means it can be of any type. 
in typescript we compile our code by using tsc. ts means typescript and c means compiler. typescript is 
compiled into js when executed in browser. tsc index.ts to run. 

ts-node index.ts. run it to see in console. or node index.js. 


Lec 5. TypeScript Compiler 
How code conversion into js and how to limit it. when we make changes in ts file then we need to recompile the 
code to see updated value so js file also updated. 

if we write tsc index.ts --watch it will look for changes auto hence streamline the process. 


Lec 6. Variables 
let, var and const are variable. with let we can't declare variable with same name.
const constant its value can't be changed.


Lec 7. Data Types 
there are other data types also available. boolean, number, string, array, object, null, undefined. 


Lec 8. Functions with annotations
let a: number | string = "20"; | is used to assign more than one data type so in this case it can store the 
number as well as string. 

there is also any data type means it can store any value. 


Lec 9. interfaces 
Interfaces are a fundamental feature in TypeScript that allows you to define the structure of objects 
specifying the properties they should have along with their corresponding data types.

interfaces. when we assign type in objects it becomes very lengthy so instead of assigning them in objects 
we make a interface and use that interface name for objects where we need.


Lec 10. Classes 
constructors are special methods within class and executed when an object is created. 
they can be used for object initialization. 


Lec 11. Array Methods 
push, pop, shift, unshift. concat, filter, map, max, reduce, findindex, foreach.


Lec 12. Inheritance
oop concepts Inheritance, class, interface. Inheritance one class uses properties of other. 

Lec 13. MOdules. 
main purpose to make code modular and easy to maintain. with modules we can handle different user data for 
various purpose like we used for signup and login. 

Lec 14. explicit vs annotations
they server similar purpose. Both concepts aim to enhance code readability, maintainability and reduce errors 
by employing them.
when we assign type using :, it is called explicit. 

On the other hand, explicit typing is a term used to make data parameters more explicit and clear. It emphasizes 
that developers should manually specify types to eliminate any ambiguity or confusion. In essence, it ensures 
that type definitions are not dependent on inference.


Lec 15. Void
it is used to define return type of function in ts and js. 
The purpose of using void is to make code self-explanatory, especially when dealing with functions that may 
return different types of values.


Lec 16. Unknown Type 
In summary, the any data type in TypeScript is flexible and avoids compile time data checking. It permits 
various types to be assigned to a variable without tracing errors. In contrast, the unknown type is considered 
better than any because it enhances type safety. If you use unknown in one part of your code and refer to 
it elsewhere, you will receive an error if the data types do not match. This promotes more. Robust type checking 
and helps prevent potential issues.


Lec 17. configuration
tsc --init. it will generate configuration files. we will focus on include and exclude. 
by default it compiles all the files in our project. but if we want to include only specific files and exclude 
others we can do it also. we can modify configuration. 
make an exclude function at the end of config file and add file you don't want to compile.
  tsconfig.json
  "exclude": [
    "node_modules"
  ]

  similarly to include specific file, we can include that file using include. 
  tsconfig.json
  "include": [
    "*/myapp.ts"
    ]
This flexibility in configuring which files to include or exclude becomes particularly useful in larger
production level projects where some files may not hold significant value or relevance to the project and 
you wish to exclude them from the compilation process.


Lec 18. TS Config Target. 
in tsconfig file the target default value is 3 but we can set it as to latest by writing es and then the veriosn 
we want to use like es6 or es next. 


Lec 19. Access Modifiers.   
public and private methods with access modifiers. These modifiers are crucial when working in object oriented 
programming as they dictate how methods can be accessed. Public and private methods serve the purpose of 
controlling access to classes. If a method is marked as public, it can be used anywhere in the code.
Conversely, if a method is marked as private, it's restricted to the class where it's defined.


Lec 20. Constructors. 
Constructors have a specific role which is initializing objects of a class. With the constructor method, we 
can initialize the properties of a class. Key points to remember include the constructors, name, initialization 
of properties and the possibility of using multiple constructors. Additionally, the super keyword is 
often employed.


Lec 21. Promises. 
Two crucial concepts to understand are promises and asynchronous operations. Promises and TypeScript provide 
a way to handle asynchronous operations and their outcomes, whether they are successful or result in an error.
Promises represent values that may not be immediately available, but will be at some point in the future.
TypeScript enhances the safety of promises by allowing you to specify the type of data that will resolve
to.


Lec 22. Promises with Async. 
The async await syntax simplifies working with promises, making the code look more like synchronous code while 
preserving asynchronous behavior. Promises are essential for handling asynchronous operations in TypeScript, 
such as network requests, file input, output, or any situation where you need to wait for a result. They 
provide a structured and type safe way to handle asynchronous workflows as shown in the summary of the lecture.
Using promises with async or await patterns, results in more readable and maintainable code for handling 
single asynchronous operations, making the code resemble synchronous code.
However, there are situations where using initial promises with then and catch may be more appreciated,
such as when you need to manage complex control flow or perform multiple synchronous operations 
concurrently.
Ultimately, the choice between these approaches depends on the specific requirements of your project and 
your team's coding style preferences.

