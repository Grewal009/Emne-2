//shallow copy in case of arrays
let fruits = ["mango", "apple"];
let myFruits = fruits;
myFruits.push("grapes");
fruits.push("orange");

//shallow copy in case of objects
let user1 = {
  name: "sam",
  age: 25,
};
let user2 = user1;
user2.name = "Sammy";

//no problem in case of primitive values
let username1 = "Aneel";
let username2 = username1;
username2 = username2 + " Singh";

let user11 = {
  name: "sam",
  age: 25,
};
let user22 = {};
Object.assign(user22, user11);

let student1 = {
  name: "Aman",
  class: "10",
  subjects: ["math", "science", "english"],
  totalSubjects: this.subjects,
};
