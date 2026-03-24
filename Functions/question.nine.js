function ispositive(num) {
    if (num > 0) {
        return "positive";
    } else if (num < 0) {
        return "negative";
    } else {
        return "zero"; // or handle the zero case as needed
    }
}
console.log(ispositive(5)); // positive
console.log(ispositive(-3)); // negative
console.log(ispositive(0)); // zero