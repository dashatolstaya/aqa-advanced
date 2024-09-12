//function declaration
function calculateRectangleArea(width, height) {
    return width * height;
}
console.log("Площа прямокутника: " + calculateRectangleArea(5, 10));

//function expression
const calculateRectangleArea2 = function (width,height) {
    return width * height;
}
console.log("Площа прямокутника: " + calculateRectangleArea2(8,9));

//Arrow function
const calculateRectangleArea3 = (width, height) => width * height;
console.log("Площа прямокутника: " + calculateRectangleArea3(2,6));






