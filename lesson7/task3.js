function divide (numerator, denominator){
    if (denominator === 0){
        throw new Error('Denominator cannot be less than 0');
    }
    if (typeof numerator !== "number" || typeof denominator !== "number" ){
        throw new Error('Denominator and numerator must be a number');
    }
    return numerator / denominator;
}

try{
    console.log(divide(10, 2));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try{
    console.log(divide(8, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

try{
    console.log(divide(8, "f"));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}
