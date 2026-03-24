function formatPrice(price) {
    return "$" + price.toFixed(2);
}
console.log(formatPrice(450.09)); // "$450.00"
console.log(formatPrice(60.56)); // "$60.56"