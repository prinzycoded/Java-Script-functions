function countDown(n) {
    for(let i = n; i >= 0; i--){
        console.log(i);
    }
    console.log("go");
}
countDown(5); // 5, 4, 3, 2, 1, 0, "go"
countDown(3); // 3, 2, 1, 0, "go"