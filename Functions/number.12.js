function printstars(n){
  let stars = "";
  for(let i = 0; i < n; i++){
    stars += "*";
  }
    return stars;
}
console.log(printstars(5)); // "*****"
console.log(printstars(3)); // "***"