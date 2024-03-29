/* BASICS 
=========== */

// --> primitives: number, string boolean
//----------------------------------------
let age: number;
age = 32;

let userName: string;
userName = "Max";

let isInstructor = true;

// age ="32" // Incorrect

// --> arrays , objects

let hobbies: string[] = ["Sports", "Travel", "Food"];

let person1: {
  name: string;
  age: number;
};

person1 = {
  name: "Max",
  age: 39,
};

//----

// type inference
//-----------------
// --> functions types & parameters

let courseTitle = "React Complete guide"; // TypeScript detect that the variable content a string
// It infers a string as the content

// courseTitle = 23; // Incorrect

// Type Union
//--------------

let course: string | number = "React course";
course = 13; // OK

// Type Aliases
// --------------

type personType = {
  name: string;
  age: number;
};

let person2: personType = {
  name: "Max",
  age: 39,
};
//----

interface personInterface {
  name: string;
  age: number;
}

let person3: personInterface = {
  name: "Max",
  age: 39,
};

let students: personType[];

// Functions & Types

function add(a: number, b: number) {
  return a + b;
}

function printer(value: any) {
  console.log(value);
}

// Generics

// --> 1: without generics
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const numbersArray = insertAtBeginning(demoArray, -1); // --> [ -1, 1, 2, 3]

// --2 : with Generics

function insertAtBeginning2<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const numbersArray2 = insertAtBeginning2([1, 2, 3], -1); // --> [ -1, 1, 2, 3]
const stringsArray2 = insertAtBeginning2(["a", "b", "c"], "d"); // --> ["d", "a", "b", "c"]

// OR

function insertAtBeginning3<T>(array: Array<T>, value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const numbersArray3 = insertAtBeginning2([1, 2, 3], -1); // --> [ -1, 1, 2, 3]
const stringsArray3 = insertAtBeginning2(["a", "b", "c"], "d"); // --> ["d", "a", "b", "c"]
