const users = [
    { name: "Ann", email: "ann@gmail.com", age: 25 },
    { name: "Kate", email: "kate@gmail.com", age: 30 },
    { name: "Daria", email: "daria@gmail.com", age: 22 }
];

for (let { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}