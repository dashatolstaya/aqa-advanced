function printTextWithDelay(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

printTextWithDelay("JavaScript Promises", 2000);