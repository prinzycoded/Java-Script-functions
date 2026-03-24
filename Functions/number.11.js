function findMax(arrow){
    let max = arrow[0];
    for(let i = 1; i < arrow.length; i++){
        if(arrow[i] > max){
            max = arrow[i];
        }
    }
    return max;
}
console.log(findMax([2, 9, 5])); // 9
console.log(findMax([12, 7, 20])); // 20
console.log(findMax([10, 12, 15])); // 15