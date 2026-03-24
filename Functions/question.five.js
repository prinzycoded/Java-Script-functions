function getgrade(score){
    if (score >= 70){
        return "A";
    } else if (score >= 60){
        return "B";
    } else if (score >= 50){
        return "C";
    } else {
        return "F";
    }
}
console.log(getgrade(85)); // Output: "A"
console.log(getgrade(62)); // Output: "B"
console.log(getgrade(55)); // Output: "C"
console.log(getgrade(40)); // Output: "F"