const numbers = [7, -8, 0, 8, -3, 0, 10, -8, 2, 1, 4, 0]

let positiveCount = 0 ;
let negativeCount = 0;
let zeroCount = 0;

for (const number of numbers) {
    if (number > 0) {
        positiveCount ++;
    } else if (number < 0) {
        negativeCount ++;
    } else {
        zeroCount ++
    }
}

console.log(`Positive numbers: ${positiveCount}`);
console.log(`Negative numbers: ${negativeCount}`);
console.log(`Zero numbers: ${zeroCount}`);

