let list = [];

let addingToList = true;

let taskName;
let dueDate;

function toDoList(task, date) {
  return {
    taskName: task,
    dueDate: date,
  };
}

while (addingToList) {
  taskName = prompt("Enter your task");
  dueDate = prompt("When is the task due?");
  list.push(toDoList(taskName, dueDate));
  console.table(list);
  if (confirm("Do you want to add another chore?")) {
    continue;
  } else {
    addingToList = false;
  }
}
console.table(list);

//more notes

// data structure "Objects"

//Unique charcteristics and behaviors
//Objects are data structures with
//specific data pertaining to an individual or item

let names = ["Cadin", "James"];

//objects take properties (each propety has a set of keys and values)

let personObj = {
  Name: "Cadin", // propety (key: value)
  age: 21,
  getName: function () {
    // Methods
    console.log(this.name);
  },
};

let northWind = {
  categoryName: ["Beverages", "Poultry"],
};

let arrOfObjects = [{}, {}, {}]; // you can put objects in arrays

let playerData = {
  username: "Unknown",
  level: 46,
  skills: [],
};

//adding properties to an object

console.log(personObj);

personObj.favoriteColor = "Red";

console.log(personObj);

//end adding

//Changeing existing data

console.log(personObj);

personObj.age = 22; //dot notation
console.log(personObj["age"]); // square brac notation

console.log(personObj.age); //specifiying a specific container

// defineing the object
let obj1 = {
  color: "red",
  food: "Chicken",
};

let arr = [
  {
    name: "James",
    getName: function () {
      console.log(this.name);
    },
  },
];
//"this" keyword references the object that it is in

arr.push(1);
let str = "Cadin";

console.dir(String); // dir logs all key values

//for in loop
for (key in personObj) {
  console.log(key); //shows all keys
  console.log(personObj[key]); // shows the values
  console.log(key, personObj[key]); // shows key: value
}

// when searching databases
for (let i = 0; i < database.length; i++) {
  for (key in database[i]) {
    if (database[i][key == "USA"]) {
      console.log("american");
    }
  }
}
//make a signup form

//object litera

//constructor function
const Person(firstName, lastName, birthDate)
this.firstName=firstName
this.lastName=lastName
this.birthday=birthday

const newPerson = new Person("Cayde, Levinduski")

// pushing into an object

const poepleArrayOfObjects = []