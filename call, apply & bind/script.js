let student = {
  firstName: "Aneel",
  lastName: "Grewal",
};
let printFullName = function (state, country) {
  console.log(
    this.firstName + " " + this.lastName + " " + state + " " + country
  );
};
printFullName.call(student, "Oslo", "Norway");

let student2 = {
  firstName: "Jas",
  lastName: "Noor",
};

//call method
printFullName.call(student2, "Oslo", "Norway");

//apply method
printFullName.apply(student2, ["Oslo", "Norway"]);

//bind method
let print = printFullName.bind(student2, "Oslo", "Norway");
console.log("bind method");
print();
