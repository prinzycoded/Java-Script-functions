function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1) .toLowerCase();
}
console.log(capitalizeFirstLetter("lagos")); // "Lagos"
console.log(capitalizeFirstLetter("javascript")); // "Javascript"