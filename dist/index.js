"use strict";
// Problem-1
function formatString(input, toUpper) {
    if (toUpper === true) {
        const resultString = input.toUpperCase();
        return (resultString);
    }
    else if (toUpper === false) {
        const outPutString = input.toLowerCase();
        return (outPutString);
    }
    else {
        return input;
    }
}
console.log(formatString('Hello'));
console.log(formatString('Hello', true));
console.log(formatString('Hello', false));
