/* BASICS 
=========== */

// --> primitives: number, string boolean

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

let students: {
  name: string;
  age: number;
}[];

// type inference

// --> functions types & parameters

let courseTitle = "React Complete guide"; // TypeScript detect that the variable content a string
// It infers a string as the content

// courseTitle = 23; // Incorrect
