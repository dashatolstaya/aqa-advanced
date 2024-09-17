function handleNum(number, handleEven, handleOdd) {
    if (number % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
}

function handleEven (){
    console.log("Number is even")
}
function handleOdd (){
    console.log("Number is odd")
}

handleNum(4, handleEven, handleOdd);
handleNum(5, handleEven, handleOdd);