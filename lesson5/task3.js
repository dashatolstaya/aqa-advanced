const number = 7;

// for loop
console.log('Таблиця множення за допомогою циклу for');
for (let i=1; i<=10; i++) {
   console.log(`${number} * ${i} = ${number * i}`)
}

// while loop
console.log('\nТаблиця множення за допомогою циклу while');
let j=1;
while (j<=10){
    console.log(`${number} * ${j} = ${number * j}`);
    j++;
}