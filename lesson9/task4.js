const person = {
    firstName: "Olexander",
    lastName: "Ivanov",
    age: 30
};

person.email = "olexandr@gmail.com";
delete person.age;
console.log(person);