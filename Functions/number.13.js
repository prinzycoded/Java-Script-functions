function isLongEnough(str, minLength) {
    return str.length >= minLength;
}
console.log(isLongEnough("Hello", 5)); // true
console.log(isLongEnough("Hi", 5)); // false
